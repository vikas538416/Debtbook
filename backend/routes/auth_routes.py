from flask import Blueprint, request, jsonify
from config.database import get_connection
from utils.jwt_handler import generate_token
import bcrypt

auth_bp = Blueprint("auth", __name__)


@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()

    name = data["name"]
    email = data["email"]
    password = data["password"]

    hashed_password = bcrypt.hashpw(
        password.encode("utf-8"),
        bcrypt.gensalt()
    ).decode("utf-8")

    conn = get_connection()
    cursor = conn.cursor()

    try:
        cursor.execute(
            """
            INSERT INTO users(name, email, password)
            VALUES(%s, %s, %s)
            """,
            (name, email, hashed_password)
        )

        conn.commit()

        return jsonify({
            "success": True,
            "message": "User Registered Successfully"
        })

    except Exception:
        conn.rollback()

        return jsonify({
            "success": False,
            "message": "Email Already Exists"
        })

    finally:
        conn.close()


@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()

    email = data["email"]
    password = data["password"]

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        """
        SELECT id, password
        FROM users
        WHERE email = %s
        """,
        (email,)
    )

    user = cursor.fetchone()

    conn.close()

    if not user:
        return jsonify({
            "success": False,
            "message": "User not found"
        }), 404

    user_id = user[0]
    stored_password = user[1]

    if bcrypt.checkpw(
        password.encode("utf-8"),
        stored_password.encode("utf-8")
    ):
        token = generate_token(user_id)

        return jsonify({
            "success": True,
            "token": token,
            "message": "Login Successful"
        })

    return jsonify({
        "success": False,
        "message": "Invalid Password"
    }), 401
