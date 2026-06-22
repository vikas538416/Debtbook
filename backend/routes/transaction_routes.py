from flask import Blueprint
from flask import request
from flask import jsonify

from Debtbook.backend.config.database import get_connection

transaction_bp = Blueprint(
    "transaction",
    __name__
)

@transaction_bp.route(
    "/transactions",
    methods=["POST"]
)
def add_transaction():

    data = request.get_json()

    person_id = data["person_id"]

    amount = data["amount"]

    note = data["note"]

    transaction_type = data["type"]

    conn = get_connection()

    cursor = conn.cursor()

    cursor.execute(
        """
        INSERT INTO transactions
        (
            person_id,
            amount,
            type,
            note
        )
        VALUES(%s,%s,%s,%s)
        """,
        (
            person_id,
            amount,
            transaction_type,
            note
        )
    )

    conn.commit()

    conn.close()

    return jsonify({

        "success":True,

        "message":
        "Transaction Added"

    })

@transaction_bp.route(
    "/transactions/<int:person_id>",
    methods=["GET"]
)
def get_transactions(person_id):

    conn = get_connection()

    cursor = conn.cursor()

    cursor.execute(
        """
        SELECT
        id,
        amount,
        type,
        note,
        created_at

        FROM transactions

        WHERE person_id=%s

        ORDER BY id DESC
        """,
        (person_id,)
    )

    rows = cursor.fetchall()

    conn.close()

    result = []

    for row in rows:

        result.append({

            "id": row[0],

            "amount": row[1],

            "type": row[2],

            "note": row[3],

            "created_at": row[4]

        })

    return jsonify(result)



@transaction_bp.route(
    "/balance/<int:person_id>"
)
def get_balance(person_id):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute(
        """
        SELECT
        amount,
        type
        FROM transactions
        WHERE person_id=%s
        """,
        (person_id,)
    )
    rows = cursor.fetchall()
    conn.close()
    borrow_total = 0
    paid_total = 0
    for amount,transaction_type in rows:
        if transaction_type == "BORROW":
            borrow_total += amount
        else:
            paid_total += amount
    balance =borrow_total - paid_total
    return jsonify({
        "borrow":
        borrow_total,
        "paid":
        paid_total,
        "balance":
        balance
    })
