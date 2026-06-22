def create_transaction_table(conn):

    cursor = conn.cursor()

    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS transactions(

<<<<<<< HEAD
            id SERIAL
            PRIMARY KEY ,
=======
            id INTEGER
            PRIMARY KEY AUTOINCREMENT,
>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e

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
