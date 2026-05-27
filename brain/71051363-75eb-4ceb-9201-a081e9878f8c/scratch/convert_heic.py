import os
import sys

try:
    from PIL import Image
    # Try importing pillow_heif to handle HEIC files
    import pillow_heif
    pillow_heif.register_heif_opener()
    print("pillow_heif loaded successfully")
except ImportError:
    print("pillow_heif not found, trying fallback...")

heic_path = r"c:\Users\BLUEWAVE COMP\Documents\projects\ambience-vista\client\src\assets\IMG_6309.HEIC"
jpg_path = r"c:\Users\BLUEWAVE COMP\Documents\projects\ambience-vista\client\src\assets\IMG_6309.jpg"

if not os.path.exists(heic_path):
    print(f"HEIC file does not exist at {heic_path}")
    sys.exit(1)

try:
    image = Image.open(heic_path)
    image.save(jpg_path, "JPEG", quality=85)
    print(f"Successfully converted HEIC to JPEG: {jpg_path}")
except Exception as e:
    print(f"Conversion failed: {e}")
