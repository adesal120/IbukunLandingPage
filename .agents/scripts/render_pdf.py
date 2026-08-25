from pathlib import Path
import fitz

pdf_path = Path("attached_assets/Ibukun_Salau_—_Founder,_Product_Leader_1787616644911.pdf")
output_dir = Path(".agents/outputs/ibukun-salau-pdf")
output_dir.mkdir(parents=True, exist_ok=True)

document = fitz.open(pdf_path)
print(f"pages={document.page_count}")
for index, page in enumerate(document):
    pixmap = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
    output_path = output_dir / f"page-{index + 1}.png"
    pixmap.save(output_path)
    print(output_path)
    print(page.get_text("text")[:2000])