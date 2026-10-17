import sys, re, subprocess, urllib.parse
from fontTools.ttLib import TTFont
NEED = "ẹọṣẸỌṢàáèéìíòóùúÀÁÈÉÌÍÒÓÙÚńǹŃṆ̀̀́"
fams = sys.argv[1:]
for fam in fams:
    q = urllib.parse.quote(fam)
    css = subprocess.run(["curl","-sS",f"https://fonts.googleapis.com/css2?family={q}:wght@400"],capture_output=True,text=True).stdout
    urls = re.findall(r"url\((https://[^)]+)\)", css)
    if not urls: print(f"{fam:24} NOT FOUND"); continue
    have=set(); gpos_mark=False
    for i,u in enumerate(urls):
        fn=f"{fam.replace(' ','_')}_{i}.ttf"; subprocess.run(["curl","-sS","-o",fn,u])
        f=TTFont(fn); have|=set(f.getBestCmap().keys())
        if "GPOS" in f and f["GPOS"].table.FeatureList:
            gpos_mark |= any(r.FeatureTag in ("mark","mkmk") for r in f["GPOS"].table.FeatureList.FeatureRecord)
    miss=[c for c in NEED if ord(c) not in have]
    print(f"{fam:24} missing: {''.join(repr(c)[1:-1] if ord(c)>=0x300 and ord(c)<0x370 else c for c in miss) or 'none':20} mark-positioning: {gpos_mark}")
