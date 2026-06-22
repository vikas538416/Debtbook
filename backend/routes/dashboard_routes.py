from flask import Blueprint
from flask import jsonify

<<<<<<< HEAD
from Debtbook.backend.config.database import get_connection
=======
from config.database import get_connection
>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e

from datetime import date

dashboard_bp = Blueprint(
    "dashboard",__name__)
@dashboard_bp.route(
    "/dashboard-summary")
def dashboard_summary():
    conn = get_connection()
    cursor = conn.cursor()
    # Total People
    cursor.execute(
        """
        SELECT COUNT(*)
        FROM people
        """
    )
    total_people = cursor.fetchone()[0]
    # Borrow Total
    cursor.execute(
        """
        SELECT
        COALESCE(
        SUM(amount),0)
        FROM transactions
        WHERE type='BORROW'
        """
    )
    borrow_total =cursor.fetchone()[0]
    # Paid Total
    cursor.execute(
        """
        SELECT
        COALESCE(
        SUM(amount),0)
        FROM transactions
        WHERE type='PAID'
        """
    )
    paid_total =cursor.fetchone()[0]
    conn.close()
    outstanding = borrow_total -paid_total
    return jsonify({
        "people":
        total_people,
        "borrow":
        borrow_total,
        "paid":
        paid_total,
        "outstanding":
        outstanding
    })


@dashboard_bp.route(
    "/dashboard-alerts"
)
def dashboard_alerts():

    conn = get_connection()

    cursor = conn.cursor()

    today = str(
        date.today()
    )

    cursor.execute(
        """
        SELECT
        id,
        name,
        reminder_date

        FROM people

        WHERE reminder_date=?
        """,
        (today,)
    )

    reminders =cursor.fetchall()

    result = []

    for row in reminders:

        result.append({

            "id": row[0],

            "name": row[1],

            "date": row[2]

        })

    conn.close()

    return jsonify(result)


@dashboard_bp.route(
    "/top-debtors"
)
def top_debtors():

    conn = get_connection()

    cursor = conn.cursor()

    cursor.execute(
        """
        SELECT

        people.name,

        SUM(
            CASE

            WHEN transactions.type='BORROW'
            THEN amount

            WHEN transactions.type='PAID'
            THEN -amount

            END

        ) as balance

        FROM transactions

        JOIN people

        ON

        people.id =
        transactions.person_id

        GROUP BY people.id

        ORDER BY balance DESC

        LIMIT 5
        """
    )

    rows =cursor.fetchall()

    conn.close()

    result = []

    for row in rows:

        result.append({

            "name": row[0],

            "balance": row[1]

        })

    return jsonify(result)


@dashboard_bp.route(
    "/overdue"
)
def overdue():

    today =str(date.today())

    conn = get_connection()

    cursor =conn.cursor()

    cursor.execute(
        """
        SELECT
        id,
        name,
        reminder_date

        FROM people

<<<<<<< HEAD
        WHERE reminder_date < %s
=======
        WHERE reminder_date < ?
>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e
        """,
        (today,)
    )

    rows =cursor.fetchall()

    conn.close()

    return jsonify([
        {
            "id":row[0],
            "name":row[1]
        }
        for row in rows
    ])
