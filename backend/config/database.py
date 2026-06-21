import sqlite3
import os

DATABASE_PATH = "database/debtbook.db"

def get_connection():

    os.makedirs(
        "database",exist_ok=True
    )

    return sqlite3.connect(DATABASE_PATH)


