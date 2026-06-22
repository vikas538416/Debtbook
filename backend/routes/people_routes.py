from flask import Blueprint
from flask import request
from flask import jsonify

from Debtbook.backend.config.database import get_connection

people_bp = Blueprint(
    "people",
    __name__
)

@people_bp.route(
    "/people",
    methods=["POST"]
)
def add_person():
    data = request.get_json()
    user_id = data["user_id"]
    name = data["name"]
    phone = data["phone"]
    reminder_date = data["reminder_date"]
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute(
        """
        INSERT INTO people
        (
            user_id,
            name,
            phone,
            reminder_date
        )
        VALUES(?,?,?,?)
        """,
        (
            user_id,
            name,
            phone,
            reminder_date
        )
    )
    conn.commit()
    conn.close()
    return jsonify({
        "success": True,
        "message":
        "Person Added Successfully"
    })


@people_bp.route(
    "/people",
    methods=["GET"]
)
def get_people():

    conn = get_connection()

    cursor = conn.cursor()

    cursor.execute(
        """
        SELECT
        id,
        name,
        phone
        FROM people
        """
    )

    people = cursor.fetchall()

    conn.close()

    result = []

    for person in people:

        result.append({

            "id": person[0],

            "name": person[1],

            "phone": person[2]

        })

    return jsonify(result)




@people_bp.route(
    "/people/<int:person_id>",
    methods=["GET"]
)
def get_person(person_id):

    conn = get_connection()

    cursor = conn.cursor()

    cursor.execute(
        """
        SELECT
        id,
        name,
        phone
        FROM people
        WHERE id=%s
        """,
        (person_id,)
    )

    person = cursor.fetchone()

    conn.close()

    if person:

        return jsonify({

            "id": person[0],

            "name": person[1],

            "phone": person[2]

        })

    return jsonify({
        "message":
        "Person Not Found"
    })



@people_bp.route(
    "/reminders"
)
def reminders():

    conn = get_connection()

    cursor = conn.cursor()

    cursor.execute(
        """
        SELECT

        id,
        name,
        phone,
        reminder_date

        FROM people

        WHERE reminder_date
        IS NOT NULL
        """
    )

    rows =cursor.fetchall()

    conn.close()

    result = []

    for row in rows:

        result.append({

            "id": row[0],

            "name": row[1],

            "phone": row[2],

            "reminder_date":
            row[3]

        })

    return jsonify(result)
