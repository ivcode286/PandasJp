import pandas as pd
import os
import sys

# Ensure UTF-8 encoding for console output on Windows
if sys.platform == "win32":
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Define voiced (dakuon) and semi-voiced (handakuon) to clear sound (seion) mapping
seion_map = {
    # Katakana voiced sounds
    'ガ': 'カ', 'ギ': 'キ', 'グ': 'ク', 'ゲ': 'ケ', 'ゴ': 'コ',
    'ザ': 'サ', 'ジ': 'シ', 'ズ': 'ス', 'ゼ': 'セ', 'ゾ': 'ソ',
    'ダ': 'タ', 'ヂ': 'チ', 'ヅ': 'ツ', 'デ': 'テ', 'ド': 'ト',
    'バ': 'ハ', 'ビ': 'ヒ', 'ブ': 'フ', 'ベ': 'ヘ', 'ボ': 'ホ',
    # Katakana semi-voiced sounds
    'パ': 'ハ', 'ピ': 'ヒ', 'プ': 'フ', 'ペ': 'ヘ', 'ポ': 'ホ',
    # Hiragana voiced sounds
    'が': 'か', 'ぎ': 'き', 'ぐ': 'く', 'げ': 'け', 'ご': 'こ',
    'ざ': 'さ', 'じ': 'し', 'ず': 'す', 'ぜ': 'せ', 'ぞ': 'そ',
    'だ': 'た', 'ぢ': 'ち', 'づ': 'つ', 'で': 'て', 'ど': 'と',
    'ば': 'は', 'び': 'ひ', 'ぶ': 'ふ', 'べ': 'へ', 'ぼ': 'ほ',
    # Hiragana semi-voiced sounds
    'ぱ': 'は', 'ぴ': 'ひ', 'ぷ': 'ふ', 'ぺ': 'へ', 'ぽ': 'ほ'
}

# Define katakana to hiragana mapping
katakana_to_hiragana = {
    'ア': 'あ', 'イ': 'い', 'ウ': 'う', 'エ': 'え', 'オ': 'お',
    'カ': 'か', 'キ': 'き', 'ク': 'く', 'ケ': 'け', 'コ': 'こ',
    'サ': 'さ', 'シ': 'し', 'ス': 'す', 'セ': 'せ', 'ソ': 'そ',
    'タ': 'た', 'チ': 'ち', 'ツ': 'つ', 'テ': 'て', 'ト': 'と',
    'ナ': 'な', 'ニ': 'に', 'ヌ': 'ぬ', 'ネ': 'ね', 'ノ': 'の',
    'ハ': 'は', 'ヒ': 'ひ', 'フ': 'ふ', 'ヘ': 'へ', 'ホ': 'ほ',
    'マ': 'ま', 'ミ': 'み', 'ム': 'む', 'メ': 'め', 'モ': 'も',
    'ヤ': 'や', 'ユ': 'ゆ', 'ヨ': 'よ',
    'ラ': 'ら', 'リ': 'り', 'ル': 'る', 'レ': 'れ', 'ロ': 'ろ',
    'ワ': 'わ', 'ヰ': 'ゐ', 'ヱ': 'ゑ', 'ヲ': 'を', 'ン': 'ん',
    'ャ': 'ゃ', 'ュ': 'ゅ', 'ョ': 'ょ'
}

# Define conversion function
def convert_kana(text):
    if pd.isna(text):  # Handle NaN or empty values
        return text
    result = str(text)
    # Step 1: Convert voiced sounds to clear sounds (both hiragana and katakana)
    for voiced, clear in seion_map.items():
        result = result.replace(voiced, clear)
    # Step 2: Convert katakana to hiragana
    for kata, hira in katakana_to_hiragana.items():
        result = result.replace(kata, hira)
    return result

# Define input and output folders
input_folder = 'input'
output_folder = 'output'

# Ensure output folder exists
os.makedirs(output_folder, exist_ok=True)

# Process all .xlsx files in the input folder
for file_name in os.listdir(input_folder):
    if file_name.endswith('.xlsx'):
        # Construct input and output file paths
        input_path = os.path.join(input_folder, file_name)
        output_path = os.path.join(output_folder, file_name)
        
        # Read Excel file
        try:
            df = pd.read_excel(input_path, sheet_name='Sheet1')
            
            # Check if 'letter' column exists
            if 'letter' in df.columns:
                # Apply conversion function to 'letter' column, store in 'letter_converted'
                df['letter_converted'] = df['letter'].apply(convert_kana)
                
                # Save result to output file
                df.to_excel(output_path, index=False)
                print(f"Processed: {file_name} -> Saved to {output_path}")
            else:
                print(f"Error: Column 'letter' not found in {file_name}")
                
        except Exception as e:
            print(f"Error processing {file_name}: {str(e)}")

print("All files processed!")