import os
import pillow_heif
from PIL import Image
from PIL.ExifTags import TAGS

pillow_heif.register_heif_opener()
file_path = r"c:\Users\BLUEWAVE COMP\Documents\projects\ambience-vista\client\src\assets\IMG_6309.HEIC"

try:
    img = Image.open(file_path)
    exif = img.getexif()
    if exif:
        print("HEIC EXIF Tags:")
        for key, val in exif.items():
            print(f"  {TAGS.get(key, key)}: {val}")
    else:
        print("No exif info found in HEIC")
except Exception as e:
    print("Error reading HEIC EXIF:", e)
