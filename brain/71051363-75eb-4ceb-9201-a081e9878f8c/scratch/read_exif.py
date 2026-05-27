import os
from PIL import Image
from PIL.ExifTags import TAGS

file_path = r"c:\Users\BLUEWAVE COMP\Documents\projects\ambience-vista\client\src\assets\IMG_6309.jpg"

if not os.path.exists(file_path):
    print("File does not exist")
    sys.exit(1)

try:
    image = Image.open(file_path)
    exif_data = image._getexif()
    if exif_data:
        print("EXIF Tags found:")
        for tag, value in exif_data.items():
            tag_name = TAGS.get(tag, tag)
            # Skip large binary data tags (like MakerNote)
            if tag_name not in ['MakerNote', 'UserComment']:
                print(f"  {tag_name}: {value}")
    else:
        print("No EXIF data found in image")
except Exception as e:
    print("Error reading EXIF:", e)
