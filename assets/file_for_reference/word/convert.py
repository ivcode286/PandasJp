# Importing required libraries
import pandas as pd
import os
from pathlib import Path
import re

# Define input and output directories
INPUT_DIR = "input"
OUTPUT_DIR = "output"

# Ensure output directory exists
os.makedirs(OUTPUT_DIR, exist_ok=True)

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

def get_constant_name(filename: str) -> str:
    """
    Generate TypeScript constant name based on input filename.
    e.g., N1Words -> n1WordsZhTW, N2Words -> n2WordsZhTW
    
    Args:
        filename (str): Input filename without extension
    Returns:
        str: Formatted constant name
    """
    # Convert first character to lowercase and append 'ZhTW'
    constant_name = filename[0].lower() + filename[1:] + 'ZhTW'
    return constant_name

def convert_file_to_typescript(file_path: str, output_dir: str) -> None:
    """
    Convert a CSV or XLSX file to TypeScript format with WordData array.
    
    Args:
        file_path (str): Path to input CSV or XLSX file
        output_dir (str): Path to output directory
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
    
    # Get constant name based on filename
    base_name = Path(file_path).stem
    constant_name = get_constant_name(base_name)
    
    # Prepare TypeScript content
    ts_content = [
        'import { WordData } from "../../types/translation";',
        '',
        f'const {constant_name}: WordData[] = ['
    ]
    
    # Convert each row to TypeScript object
    for _, row in df.iterrows():
        # Clean the meaning field
        cleaned_meaning = clean_meaning(row["meaning"])
        # Handle other fields, ensuring they are strings and escaped properly
        words = str(row["words"]).replace('"', '\\"').replace('\\', '\\\\').replace('\t', '\\t')
        pron = str(row["pron"]).replace('"', '\\"').replace('\\', '\\\\').replace('\t', '\\t')
        letter = str(row["letter"]).replace('"', '\\"').replace('\\', '\\\\').replace('\t', '\\t')
        type_val = str(row["type"]).replace('"', '\\"').replace('\\', '\\\\').replace('\t', '\\t')
        
        word_entry = [
            '  {',
            f'    wordId: {row["word_id"]},',
            f'    words: "{words}",',
            f'    pron: "{pron}",',
            f'    letterOrder: {row["letter_order"]},',
            f'    letter: "{letter}",',
            f'    type: "{type_val}",',
            f'    meaning: "{cleaned_meaning}"',
            '  },'
        ]
        ts_content.extend(word_entry)
    
    # Remove the last comma
    if ts_content[-1].endswith(','):
        ts_content[-1] = ts_content[-1][:-1]
    
    # Close the array
    ts_content.extend([
        '];',
        '',
        f'export default {constant_name};'
    ])
    
    # Generate output file name
    output_file = os.path.join(output_dir, f"{base_name}.ts")
    
    # Write to TypeScript file with UTF-8 encoding
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write('\n'.join(ts_content))
        print(f"Generated {base_name}.ts in output directory")
    except Exception as e:
        print(f"Error writing {output_file}: {e}")

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
        convert_file_to_typescript(file_path, OUTPUT_DIR)

if __name__ == "__main__":
    main()