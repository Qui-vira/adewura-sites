"""Download Google Fonts as self-hosted woff2 files, keeping the subsets Yoruba needs.

Usage: python3 tools/fetch-fonts.py <site-dir> "<css2 family spec>" [...]
Writes <site-dir>/fonts/*.woff2 and <site-dir>/fonts/fonts.css.
"""
import re, sys, subprocess, urllib.parse
from pathlib import Path

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0 Safari/537.36"
KEEP = {"latin", "latin-ext", "vietnamese"}  # Yoruba: ṣ lives in latin-ext, ẹ ọ and U+0323 in vietnamese

site = Path(sys.argv[1]); out = site / "fonts"; out.mkdir(parents=True, exist_ok=True)
css_out = []
for spec in sys.argv[2:]:
    url = "https://fonts.googleapis.com/css2?family=" + urllib.parse.quote(spec, safe=":;,@") + "&display=swap"
    css = subprocess.run(["curl", "-sSf", "-A", UA, url], capture_output=True, text=True, check=True).stdout
    for subset, block in re.findall(r"/\* ([\w-]+) \*/\s*(@font-face \{.*?\})", css, re.S):
        if subset not in KEEP: continue
        fam = re.search(r"font-family: '([^']+)'", block).group(1)
        wght = re.search(r"font-weight: ([\d ]+);", block).group(1).replace(" ", "-")
        stretch = re.search(r"font-stretch: ([\w%]+);", block)
        src = re.search(r"url\((https://[^)]+\.woff2)\)", block).group(1)
        name = f"{fam.replace(' ', '')}-{wght}{'-' + stretch.group(1).replace('%', 'pct') if stretch else ''}-{subset}.woff2"
        subprocess.run(["curl", "-sSf", "-o", str(out / name), src], check=True)
        css_out.append(f"/* {subset} */\n" + block.replace(src, name))
(out / "fonts.css").write_text("\n".join(css_out) + "\n")
print(site, len(css_out), "faces")
