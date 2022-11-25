import sys
import os
import re

HEIGHT = 970 # Высота, можно настроить под себя.
MEDIA = "min-width: 666px" # Условие @media.

new_data = []

def parse_files():
    files = []
    if len(sys.argv) > 1:
        for i in sys.argv[1:]:
            if os.path.isfile(i) and os.path.exists(i):
                files.append(i)
    if not len(files):
        print("Ошибка! Вы не выбрали файл.")
    return files

if __name__ == "__main__":
  files = parse_files()

  for file in files:
    new_data = []
    media = False
    media_end = 0

    if file:
      file_read = open(file, "r")
      lines = file_read.readlines()

      for text in lines:
        result = next(iter(re.findall(r"(\d+)px", text.strip())), "error")
        
        if result != "error":
          values = re.findall(r"(\d+)px", text.strip())
          result = text.strip()

          for item in values:
            old_value = item
            value = 100 / HEIGHT * float(item)
            result = result.replace(str(old_value) + "px", str(value) + "vh")

        else:
          result = text.strip()

        new_data.append(result)
        print(result)

      file_read.close()
      
      string = "\n\t"
      file_write = open(file, "a+")
      file_write.write("\n\n// Auto VH | by Miron Diamond\n// https://mirondiamond.ru\n\n@media (" + MEDIA + ") {\n\t")
      file_write.write(string.join(new_data))
      file_write.write("\n}")
      file_write.close()

  print("\nПроцесс успешно завершён.")
  print("by Miron Diamond")

  os.system("pause >nul")