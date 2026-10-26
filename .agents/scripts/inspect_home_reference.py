import json
import re
from pathlib import Path
import fitz

out = Path("/tmp/home-reference")
out.mkdir(exist_ok=True)
source = Path("attached_assets/ibukunsalau.com_redesign_–_Home_page_1793012091059.html").read_text()
template = json.loads(re.search(r'<script type="__bundler/template">\s*(.*?)\s*</script>', source, re.S).group(1))
(out / "reference.html").write_text(template)
manifest = json.loads(re.search(r'<script type="__bundler/manifest">\s*(.*?)\s*</script>', source, re.S).group(1))
(out / "manifest.json").write_text(json.dumps(manifest))
print("Manifest resources:", [(k, {p: (str(v)[:120] if p != "data" else f"{len(str(v))} bytes") for p, v in val.items()}) for k, val in manifest.items()])
doc = fitz.open("attached_assets/Home_page_1793012091056.pdf")
for i, page in enumerate(doc):
    page.get_pixmap(matrix=fitz.Matrix(1.4, 1.4)).save(str(out / f"page-{i+1}.png"))
(out / "pdf-text.txt").write_text("\n".join(p.get_text() for p in doc))
