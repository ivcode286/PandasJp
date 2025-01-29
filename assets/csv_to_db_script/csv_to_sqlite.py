import pandas as pd
import sqlite3

# 设置 CSV 文件路径和 SQLite 数据库文件名
csv_file = 'words.csv'  # 替换为你的 CSV 文件名
sqlite_db = 'PANDAS_JP.db'  # SQLite 数据库文件名

# 读取 CSV 文件
data = pd.read_csv(csv_file)

# 创建 SQLite 数据库连接
conn = sqlite3.connect(sqlite_db)

# 将数据写入 SQLite 表
data.to_sql('JP_WORDS', conn, if_exists='replace', index=False)  # 替换为你的表名

# 关闭连接
conn.close()

print("CSV 文件已成功转换为 SQLite 表！")