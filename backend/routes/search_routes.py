from flask import Blueprint
from flask import request
from flask import jsonify

from Debtbook.backend.config.database import get_connection

search_bp = Blueprint(
    "search",
    __name__
)

@search_bp.route("/search")
def search():

    query = request.args.get(
        "query",
        ""
    )

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        """
        SELECT id,name,phone
        FROM people
        WHERE name LIKE ?
        """,
        (f"%{query}%",)
    )

    rows = cursor.fetchall()

    result = []

    for row in rows:

        result.append({
            "id": row[0],
            "name": row[1],
            "phone": row[2]
        })

    conn.close()

    return jsonify(result)
