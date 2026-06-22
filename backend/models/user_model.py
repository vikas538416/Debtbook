def create_user_table(conn):
    cursor = conn.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS users(
<<<<<<< HEAD
    id SERIAL PRIMARY KEY ,
=======
    id INTEGER PRIMARY KEY AUTOINCREMENT,
>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
    ,created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)
""")

    conn.commit()
