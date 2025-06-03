# Importing required libraries
import pandas as pd
import os
from pathlib import Path
import re
from opencc import OpenCC

# Define input and output directories
INPUT_DIR = "input"
OUTPUT_DIR_TW = "output_tw"
OUTPUT_DIR_CN = "output_cn"

# Ensure output directories exist
os.makedirs(OUTPUT_DIR_TW, exist_ok=True)
os.makedirs(OUTPUT_DIR_CN, exist_ok=True)

# Initialize OpenCC for Traditional to Simplified Chinese conversion
cc = OpenCC('t2s')

def clean_meaning(text: str) -> str:
    """
    Clean the meaning field by removing unwanted artifacts, merging newlines into a single line,
    and ensuring proper encoding for TypeScript.
    
    Args:
        text (str): Input text from meaning column
    Returns:
        str: Cleaned text with newlines removed and special characters escaped
    """
    if pd.isna(text):
        return ""
    # Convert text to string, ensuring UTF-8 encoding
    text = str(text)
    # Remove unwanted artifacts like _x000D_ and \r
    text = re.sub(r'_x000D_|\r', '', text)
    # Remove newlines to merge content into a single line
    text = re.sub(r'\n+', '', text)
    # Remove leading/trailing whitespace
    text = text.strip()
    # Escape special characters for TypeScript string literals
    text = text.replace('"', '\\"').replace('\\', '\\\\').replace('\t', '\\t')
    return text

def get_constant_name(filename: str, lang: str) -> str:
    """
    Generate TypeScript constant name based on input filename and language.
    e.g., N5Words -> n5WordsZhTW for Traditional, n5WordsZhCN for Simplified
    
    Args:
        filename (str): Input filename without extension
        lang (str): Language code ('ZhTW' or 'ZhCN')
    Returns:
        str: Formatted constant name
    """
    # Convert first character to lowercase and append language code
    constant_name = filename[0].lower() + filename[1:] + lang
    return constant_name

def convert_file_to_typescript(file_path: str, output_dir_tw: str, output_dir_cn: str) -> None:
    """
    Convert a CSV or XLSX file to TypeScript format with WordData array for both Traditional and Simplified Chinese.
    
    Args:
        file_path (str): Path to input CSV or XLSX file
        output_dir_tw (str): Path to output directory for Traditional Chinese
        output_dir_cn (str): Path to output directory for Simplified Chinese
    """
    # Check file extension
    file_ext = Path(file_path).suffix.lower()
    
    # Read file based on extension
    try:
        if file_ext == '.csv':
            df = pd.read_csv(file_path, encoding='utf-8')
        elif file_ext == '.xlsx':
            df = pd.read_excel(file_path, engine='openpyxl')
        else:
            print(f"Unsupported file format: {file_ext}. Skipping {file_path}")
            return
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return
    
    # Verify required columns exist
    required_columns = ["word_id", "words", "pron", "letter_order", "letter", "type", "meaning"]
    missing_columns = [col for col in required_columns if col not in df.columns]
    if missing_columns:
        print(f"Missing columns in {file_path}: {missing_columns}")
        return
    
    # Get base filename
    base_name = Path(file_path).stem
    
    # Prepare TypeScript content for Traditional Chinese (ZhTW)
    constant_name_tw = get_constant_name(base_name, 'ZhTW')
    ts_content_tw = [
        'import { WordData } from "../../types/translation";',
        '',
        f'const {constant_name_tw}: WordData[] = ['
    ]
    
    # Prepare TypeScript content for Simplified Chinese (ZhCN)
    constant_name_cn = get_constant_name(base_name, 'ZhCN')
    ts_content_cn = [
        'import { WordData } from "../../types/translation";',
        '',
        f'const {constant_name_cn}: WordData[] = ['
    ]
    
    # Convert each row to TypeScript object
    for _, row in df.iterrows():
        # Clean the meaning field (Traditional Chinese)
        cleaned_meaning_tw = clean_meaning(row["meaning"])
        # Convert to Simplified Chinese
        cleaned_meaning_cn = cc.convert(cleaned_meaning_tw)
        # Handle other fields, ensuring they are strings and escaped properly
        words = str(row["words"]).replace('"', '\\"').replace('\\', '\\\\').replace('\t', '\\t')
        pron = str(row["pron"]).replace('"', '\\"').replace('\\', '\\\\').replace('\t', '\\t')
        letter = str(row["letter"]).replace('"', '\\"').replace('\\', '\\\\').replace('\t', '\\t')
        type_val = str(row["type"]).replace('"', '\\"').replace('\\', '\\\\').replace('\t', '\\t')
        
        # Common word entry for both outputs
        word_entry = [
            '  {',
            f'    wordId: {row["word_id"]},',
            f'    words: "{words}",',
            f'    pron: "{pron}",',
            f'    letterOrder: {row["letter_order"]},',
            f'    letter: "{letter}",',
            f'    type: "{type_val}",',
        ]
        
        # Add meaning for Traditional Chinese
        word_entry_tw = word_entry + [
            f'    meaning: "{cleaned_meaning_tw}"',
            '  },'
        ]
        ts_content_tw.extend(word_entry_tw)
        
        # Add meaning for Simplified Chinese
        word_entry_cn = word_entry + [
            f'    meaning: "{cleaned_meaning_cn}"',
            '  },'
        ]
        ts_content_cn.extend(word_entry_cn)
    
    # Remove the last comma for both
    if ts_content_tw[-1].endswith(','):
        ts_content_tw[-1] = ts_content_tw[-1][:-1]
    if ts_content_cn[-1].endswith(','):
        ts_content_cn[-1] = ts_content_cn[-1][:-1]
    
    # Close the array for both
    ts_content_tw.extend([
        '];',
        '',
        f'export default {constant_name_tw};'
    ])
    ts_content_cn.extend([
        '];',
        '',
        f'export default {constant_name_cn};'
    ])
    
    # Generate output file names
    output_file_tw = os.path.join(output_dir_tw, f"{base_name}.ts")
    output_file_cn = os.path.join(output_dir_cn, f"{base_name}.ts")
    
    # Write to TypeScript files with UTF-8 encoding
    try:
        with open(output_file_tw, 'w', encoding='utf-8') as f:
            f.write('\n'.join(ts_content_tw))
        print(f"Generated {base_name}.ts in {output_dir_tw}")
    except Exception as e:
        print(f"Error writing {output_file_tw}: {e}")
    
    try:
        with open(output_file_cn, 'w', encoding='utf-8') as f:
            f.write('\n'.join(ts_content_cn))
        print(f"Generated {base_name}.ts in {output_dir_cn}")
    except Exception as e:
        print(f"Error writing {output_file_cn}: {e}")

def main():
    """
    Main function to process all CSV and XLSX files in input directory
    """
    # Get all CSV and XLSX files in input directory
    supported_extensions = ('.csv', '.xlsx')
    files = [f for f in os.listdir(INPUT_DIR) if f.lower().endswith(supported_extensions)]
    
    if not files:
        print(f"No CSV or XLSX files found in {INPUT_DIR}")
        return
    
    # Process each file
    for file in files:
        file_path = os.path.join(INPUT_DIR, file)
        print(f"Processing {file}...")
        convert_file_to_typescript(file_path, OUTPUT_DIR_TW, OUTPUT_DIR_CN)

if __name__ == "__main__":
    main()