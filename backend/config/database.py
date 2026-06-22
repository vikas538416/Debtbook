<<<<<<< HEAD
import psycopg2
from dotenv import load_dotenv
import os


load_dotenv()

# DATABASE_PATH = "database/debtbook.db"

# def get_connection():

#     os.makedirs(
#         "database",exist_ok=True
#     )

#     return sqlite3.connect(DATABASE_PATH)


def get_connection():
    return psycopg2.connect(
        host = os.getenv("DB_HOST"),
        database = os.getenv("DB_NAME"),
        user = os.getenv("DB_USER"),
        password = os.getenv("DB_PASSWORD"),
        port = os.getenv("DB_PORT")
    )
=======
import sqlite3
import os

DATABASE_PATH = "database/debtbook.db"

def get_connection():

    os.makedirs(
        "database",exist_ok=True
    )

    return sqlite3.connect(DATABASE_PATH)


>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e
