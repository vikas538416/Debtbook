def create_people_table(conn):

    cursor = conn.cursor()

    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS people(
            id INTEGER
            PRIMARY KEY AUTOINCREMENT,
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
