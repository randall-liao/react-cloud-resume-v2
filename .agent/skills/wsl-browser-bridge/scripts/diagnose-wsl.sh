#!/bin/bash

# diagnose-wsl.sh
# Checks connectivity from WSL to Windows Chrome

echo "=============================================="
echo "   WSL Browser Bridge Diagnosis (WSL Side)    "
echo "=============================================="

# 1. Dependency Check
echo -e "\n[1/4] Checking Dependencies..."
if ! command -v curl &> /dev/null; then
    echo "Error: curl is not installed. Please run: sudo apt-get install curl"
    exit 1
fi
if ! command -v socat &> /dev/null; then
    echo "Warning: socat is not installed. Recommended: sudo apt-get install socat"
fi
echo "Dependencies OK."

# 2. Check Localhost Connectivity (Mirrored Mode)
echo -e "\n[2/4] Checking Localhost Connectivity (Mirrored Mode)..."
if curl -s --max-time 2 http://localhost:9222/json/version > /dev/null; then
    echo "SUCCESS: localhost:9222 is reachable!"
    echo "Mirrored Networking seems to be working perfectly."
    exit 0
else
    echo "FAILURE: Could not connect to localhost:9222."
    echo "Provide details below:"
    curl -v --max-time 2 http://localhost:9222/json/version
fi

# 3. Check LAN IP Connectivity (Fallback)
echo -e "\n[3/4] Checking Windows LAN IP Connectivity..."
WIN_IP=$(grep -m 1 nameserver /etc/resolv.conf | awk '{print $2}')
echo "Detected Windows Nameserver IP: $WIN_IP"

if curl -s --max-time 2 "http://$WIN_IP:9222/json/version" > /dev/null; then
    echo "SUCCESS: Reachable via $WIN_IP!"
    echo "Mirrored Mode might be off, but LAN access works."
    echo "Recommendation: Use 'socat' to forward remote port to local:"
    echo "socat TCP-LISTEN:9222,fork,reuseaddr TCP:$WIN_IP:9222 &"
else
    echo "FAILURE: Could not connect to Windows IP ($WIN_IP)."
    echo "Possible causes:"
    echo "  - Windows Firewall is blocking connections (Run setup-windows.ps1 as Admin)."
    echo "  - Chrome is not running with --remote-debugging-port=9222."
    echo "  - WSL masquerading/NAT issues."
fi

# 4. Check for Port Conflicts
echo -e "\n[4/4] Checking for Port Conflicts in WSL..."
if ss -tuln | grep -q ":9222"; then
    echo "Warning: Port 9222 is already in use inside WSL."
    ss -tulnp | grep ":9222"
else
    echo "Port 9222 is free in WSL."
fi

echo -e "\nDiagnosis Complete."
