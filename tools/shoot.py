"""Drive a prototype in Chromium: opening frames, Enter, then screenshots through the scroll.
Usage: python3 -I shoot.py <site> <outdir> [mobile]"""
import sys, time
from pathlib import Path
from playwright.sync_api import sync_playwright

site, out = sys.argv[1], Path(sys.argv[2])
mobile = len(sys.argv) > 3 and sys.argv[3] == "mobile"
out.mkdir(parents=True, exist_ok=True)
vp = {"width": 390, "height": 844} if mobile else {"width": 1440, "height": 900}
tag = "m" if mobile else "d"

with sync_playwright() as p:
    b = p.chromium.launch(executable_path="/opt/pw-browsers/chromium",
                          args=["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist", "--autoplay-policy=no-user-gesture-required"])
    ctx = b.new_context(viewport=vp, device_scale_factor=1, is_mobile=mobile, has_touch=mobile)
    pg = ctx.new_page()
    logs = []
    pg.on("console", lambda m: logs.append(f"{m.type}: {m.text}") if m.type in ("error", "warning") else None)
    pg.on("pageerror", lambda e: logs.append(f"pageerror: {e}"))
    t0 = time.time()
    pg.goto(f"http://localhost:4173/{site}/", wait_until="domcontentloaded")
    for ms in (300, 1200, 2100, 2900, 3700):
        pg.wait_for_timeout(max(0, ms - int((time.time() - t0) * 1000)))
        pg.screenshot(path=str(out / f"{tag}-open-{ms:05d}.jpg"), quality=70, type="jpeg")
    pg.wait_for_selector(".welcome__enter", timeout=20000)
    pg.wait_for_timeout(900)
    pg.screenshot(path=str(out / f"{tag}-welcome.jpg"), quality=70, type="jpeg")
    print("welcome after", round(time.time() - t0, 1), "s")
    pg.click(".welcome__enter")
    pg.wait_for_timeout(1200)
    total = pg.evaluate("document.documentElement.scrollHeight - innerHeight")
    stage = pg.evaluate("document.querySelector('.stage').offsetHeight - innerHeight")
    for frac in (0, 0.06, 0.12, 0.2, 0.3, 0.44, 0.62, 0.78, 0.9, 1.0):
        y = int(stage * frac)
        pg.evaluate(f"window.scrollTo(0, {y})")
        pg.wait_for_timeout(1300)
        pg.screenshot(path=str(out / f"{tag}-stage-{int(frac*100):03d}.jpg"), quality=70, type="jpeg")
    for name, sel in (("initiatives", "#initiatives"), ("field", "#field"), ("collage", "#collage"), ("involved", "#involved")):
        pg.evaluate(f"document.querySelector('{sel}').scrollIntoView()")
        pg.wait_for_timeout(1100)
        pg.screenshot(path=str(out / f"{tag}-{name}.jpg"), quality=70, type="jpeg")
    print("scroll height", total, "stage", stage)
    print("\n".join(logs) or "no console errors")
    b.close()
