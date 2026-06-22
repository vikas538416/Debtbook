def create_people_table(conn):

    cursor = conn.cursor()

    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS people(
<<<<<<< HEAD
            id SERIAL
            PRIMARY KEY ,
=======
            id INTEGER
            PRIMARY KEY AUTOINCREMENT,
>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e
            user_id INTEGER
            NOT NULL,
            name TEXT
            NOT NULL,
            phone TEXT,
            reminder_date TEXT,
            created_at TIMESTAMP
            DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(user_id)
            REFERENCES users(id)
        )
        """
    )

    conn.commit()
