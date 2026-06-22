from flask import Blueprint
from flask import jsonify

<<<<<<< HEAD
from Debtbook.backend.config.database import get_connection
=======
from config.database import get_connection
>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e

report_bp = Blueprint(
    "report", __name__)
@report_bp.route(
<<<<<<< HEAD
    "/report/<int:person_id>",methods=['GET']
=======
    "/report/<int:person_id>"
>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e
)
def report(person_id):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute(
        """
        SELECT
        amount,
        type,
        note,
        created_at
        FROM transactions
<<<<<<< HEAD
        WHERE person_id=%s
=======
        WHERE person_id=?
>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e
        """,
        (person_id,)
    )
    rows = cursor.fetchall()
    conn.close()
    result = []
    for row in rows:
        result.append({
            "amount": row[0],
            "type": row[1],
            "note": row[2],
            "created_at": row[3]
        })
    return jsonify(result)
