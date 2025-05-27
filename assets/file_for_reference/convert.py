# Comment: Import required library
import pandas as pd

# Comment: Read the Excel file
input_file = "N2.xlsx"
df = pd.read_excel(input_file)

# Comment: Function to limit English translations to max 3 words
def limit_to_three_words(text):
    if pd.isna(text):  # Comment: Handle empty or NaN cells
        return text
    words = str(text).split(',')
    return ','.join(words[:3])  # Comment: Take first 3 words and join with commas

# Comment: Apply the function to the 'English' column
df['English'] = df['English'].apply(limit_to_three_words)

# Comment: Save the modified dataframe to a new Excel file
output_file = "Modified_N2.xlsx"
df.to_excel(output_file, index=False)

print(f"Modified file saved as {output_file}")