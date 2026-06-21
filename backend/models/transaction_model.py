def create_transaction_table(conn):

    cursor = conn.cursor()

    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS transactions(

            id INTEGER
            PRIMARY KEY AUTOINCREMENT,

            person_id INTEGER
            NOT NULL,

            amount REAL
            NOT NULL,

            type TEXT
            NOT NULL,

            note TEXT,

            created_at TIMESTAMP
            DEFAULT CURRENT_TIMESTAMP,

            FOREIGN KEY(person_id)
            REFERENCES people(id)

        )
        """
    )

    conn.commit()
