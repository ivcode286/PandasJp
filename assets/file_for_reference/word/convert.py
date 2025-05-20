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
    Clean the meaning field by removing unwanted artifacts and normalizing newlines to \n.
    
    Args:
        text (str): Input text from meaning column
    Returns:
        str: Cleaned text with newlines converted to \n for TypeScript
    """
    if pd.isna(text):
        return ""
    # Convert text to string and remove _x000D_, \r, and other artifacts
    text = re.sub(r'_x000D_|\r', '', str(text))
    # Replace multiple newlines with a single \n
    text = re.sub(r'\n+', '\n', text)
    # Remove leading/trailing whitespace
    text = text.strip()
    return text

def convert_file_to_typescript(file_path: str, output_dir: str) -> None:
    """
    Convert a CSV or XLSX file to TypeScript format with WordData interface and array.
    
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
    
    # Prepare TypeScript content
    ts_content = [
        'import { WordData } from "../../types/translation";',
        '',
        'const n5KanjiWordsZhTW: WordData[] = ['
    ]
    
    # Convert each row to TypeScript object
    for _, row in df.iterrows():
        # Clean the meaning field
        cleaned_meaning = clean_meaning(row["meaning"])
        # Escape quotes and backslashes in meaning for TypeScript
        cleaned_meaning = cleaned_meaning.replace('"', '\\"').replace('\\', '\\\\')
        word_entry = [
            '  {',
            f'    wordId: {row["word_id"]},',
            f'    words: "{row["words"]}",',
            f'    pron: "{row["pron"]}",',
            f'    letterOrder: {row["letter_order"]},',
            f'    letter: "{row["letter"]}",',
            f'    type: "{row["type"]}",',
            f'    meaning: "{cleaned_meaning}"',
            '  },'
        ]
        ts_content.extend(word_entry)
    
    # Remove the last comma
    if ts_content[-1].endswith(','):
        ts_content[-1] = ts_content[-1][:-1]
    
    # Close the array and add interface
    ts_content.extend([
        '];',
        '',
        'export interface WordData {',
        '  wordId: number;',
        '  words: string;',
        '  pron: string;',
        '  letterOrder: number;',
        '  letter: string;',
        '  type: string;',
        '  meaning: string;',
        '}',
        '',
        'export default n5KanjiWordsZhTW;'
    ])
    
    # Generate output file name
    base_name = Path(file_path).stem
    output_file = os.path.join(output_dir, f"{base_name}.ts")
    
    # Write to TypeScript file
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