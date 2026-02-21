<#
.SYNOPSIS
    Sets up Windows environment for Google Antigravity Browser Bridge (WSL Integration).
.DESCRIPTION
    This script automates the configuration required to debug Chrome from WSL.
    It handles Firewall rules, Chrome launching only (w/o admin rights) or admin tasks if elevated.
    Designed for WSL Mirrored Networking mode primarily.
.USAGE
    Run as Administrator for full setup (Firewall rules).
    Run as User to just launch Chrome if Firewall is already set.
#>

$ErrorActionPreference = "Stop"
$ChromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$UserDataDir = "C:\selenium\ChromeProfile"
$Port = 9222

Write-Host "==============================================" -ForegroundColor Cyan
Write-Host "   WSL Browser Bridge Setup (Windows Side)    " -ForegroundColor Cyan
Write-Host "==============================================" -ForegroundColor Cyan

# 0. Check Admin Privileges
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")
if (-not $isAdmin) {
    Write-Warning "Running without Administrator privileges. Firewall configuration will be skipped."
    Write-Warning "Ensure you have run this script as Administrator at least once to set up firewall rules."
}

# 1. Check for Chrome
if (-not (Test-Path $ChromePath)) {
    Write-Error "Chrome executable not found at $ChromePath. Please install Google Chrome."
}

# 2. Kill existing Chrome instances (Required for debugging flags to take effect)
Write-Host "`n[1/4] Checking running Chrome instances..." -ForegroundColor Yellow
$chromeProcesses = Get-Process chrome -ErrorAction SilentlyContinue
if ($chromeProcesses) {
    Write-Warning "Found $($chromeProcesses.Count) running Chrome processes."
    $response = Read-Host "Terminate them to enable debugging? (Y/N)"
    if ($response -eq 'Y' -or $response -eq 'y') {
        Stop-Process -Name chrome -Force -ErrorAction SilentlyContinue
        Write-Host "Chrome processes terminated." -ForegroundColor Green
    } else {
        Write-Warning "Proceeding without killing Chrome. Debugging WILL FAIL if existing instances block the port."
    }
} else {
    Write-Host "No Chrome instances running. Good." -ForegroundColor Green
}

# 3. Configure Firewall (Admin Only)
if ($isAdmin) {
    Write-Host "`n[2/4] Configuring Windows Firewall..." -ForegroundColor Yellow
    $ruleName = "WSL Chrome Debugging"
    try {
        Remove-NetFirewallRule -DisplayName $ruleName -ErrorAction SilentlyContinue
        # Create a permissive rule for the debugging port
        New-NetFirewallRule -DisplayName $ruleName -Direction Inbound -Action Allow -Protocol TCP -LocalPort $Port -Profile Any -Program Any | Out-Null
        Write-Host "Firewall rule '$ruleName' created successfully (Port $Port, All Profiles)." -ForegroundColor Green
    } catch {
        Write-Error "Failed to set Firewall rules despite Admin privileges."
    }
} else {
    Write-Host "`n[2/4] Skipping Firewall configuration (Not Admin)..." -ForegroundColor DarkGray
}

# 4. Launch Chrome
Write-Host "`n[3/4] Launching Chrome with Remote Debugging..." -ForegroundColor Yellow
# We bind safely to 127.0.0.1. With WSL Mirrored Mode, this is accessible from WSL as localhost too.
$chromeArgs = "--remote-debugging-port=$Port --remote-allow-origins=* --user-data-dir=""$UserDataDir"""
Start-Process -FilePath $ChromePath -ArgumentList $chromeArgs
Write-Host "Chrome launched. Window should appear shortly." -ForegroundColor Green

# 5. Verify Connectivity
Write-Host "`n[4/4] Verifying Local Connectivity..." -ForegroundColor Yellow
Start-Sleep -Seconds 3 # Give Chrome time to initialize

try {
    $response = Invoke-WebRequest -Uri "http://127.0.0.1:$Port/json/version" -UseBasicParsing -TimeoutSec 2
    if ($response.StatusCode -eq 200) {
        Write-Host "SUCCESS: Chrome is listening on port $Port." -ForegroundColor Green
        Write-Host "Content: $($response.Content)" -ForegroundColor Gray
    } else {
        Write-Error "Chrome returned unexpected status code: $($response.StatusCode)"
    }
} catch {
    Write-Error "Failed to connect to Chrome on localhost:$Port. Check if Chrome launched correctly."
}

Write-Host "`nSetup Complete!" -ForegroundColor Cyan
