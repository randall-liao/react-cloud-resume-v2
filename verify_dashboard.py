from playwright.sync_api import sync_playwright

def verify_mobile_dashboard():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Emulate a mobile device view
        context = browser.new_context(viewport={"width": 390, "height": 844})
        page = context.new_page()

        try:
            print("Navigating to http://localhost:5173...")
            page.goto("http://localhost:5173", timeout=60000)

            # Wait for content to load
            print("Waiting for content...")
            page.wait_for_selector("text=Cloud Resume", timeout=30000)
            page.wait_for_selector("text=Visitor Count", timeout=30000)

            # Wait a bit more for animations/fonts and mocked data (1000ms delay in VisitorCounter)
            page.wait_for_timeout(3000)

            # Take screenshot
            print("Taking screenshot...")
            screenshot_path = "mobile_dashboard_verify.png"
            page.screenshot(path=screenshot_path, full_page=True)
            print(f"Screenshot saved to {screenshot_path}")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_mobile_dashboard()
