from playwright.sync_api import sync_playwright
import time

def verify(page):
    print("Navigating to http://localhost:3000")
    page.goto("http://localhost:3000")
    page.wait_for_load_state("networkidle")

    # 1. Desktop Light Mode
    page.set_viewport_size({"width": 1280, "height": 800})
    time.sleep(2) # Give React time to hydrate
    page.screenshot(path="verification/desktop_light.png")
    print("Desktop Light screenshot taken")

    # 2. Toggle Dark Mode
    # The button is an IconButton.
    # The header has two buttons. CodeIcon (first), Theme Toggle (second).
    buttons = page.get_by_role("button").all()
    if len(buttons) >= 2:
        print("Clicking Theme Toggle Button")
        buttons[-1].click()
        time.sleep(1) # Wait for theme transition
        page.screenshot(path="verification/desktop_dark.png")
        print("Desktop Dark screenshot taken")
    else:
        print(f"Error: Found only {len(buttons)} buttons")
        page.screenshot(path="verification/error.png")

    # 3. Mobile Layout
    page.set_viewport_size({"width": 375, "height": 667})
    time.sleep(1)
    page.screenshot(path="verification/mobile_dark.png") # Should still be dark
    print("Mobile Dark screenshot taken")

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    try:
        verify(page)
    except Exception as e:
        print(f"Error: {e}")
    finally:
        browser.close()
