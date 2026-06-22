from flask import Blueprint,request,jsonify

from Debtbook.backend.config.database import get_connection

from Debtbook.backend.utils.jwt_handler import generate_token
import sqlite3
import bcrypt

auth_bp = Blueprint(
    "auth",__name__
)

@auth_bp.route("/register",methods=["POST"])
def register():
    data = request.json
    name = data["name"]
    email = data["email"]
    password = data["password"]

    #hash password
    hashed_password = bcrypt.hashpw(
        password.encode("utf-8"),
        bcrypt.gensalt()
    ).decode("utf-8")

    conn = sqlite3.connect("debtbook.db")
    cursor = conn.cursor()

    try:
        cursor.execute("""
        INSERT INTO users(name,email,password) VALUES(%s,%s,%s)
        """,(name,email,hashed_password))
        conn.commit()

        return jsonify({
            "success":True,
            "message":"User Registered Successfully"
        })

    except:
        return jsonify({
            "success":False,
            "message":"Email Already Exists"
        })

    finally:
        conn.close()


@auth_bp.route("/login",methods=["POST"])
def login():
    data = request.json
    email = data["email"]
    password = data["password"]

    conn = sqlite3.connect("debtbook.db")
    cursor = conn.cursor()

    cursor.execute(
        """
        SELECT password
        FROM users
        WHERE email=%s
        """,
        (email,)
    )
    user = cursor.fetchone()
    conn.close()
    if not user:
        return jsonify({"message": "User not found"}),404

    stored_password = user[0]

    if bcrypt.checkpw(
        password.encode("utf-8"),
        stored_password.encode("utf-8")
    ):

        return jsonify({
            "message": "Login Successful"
        })
    else:
        return jsonify({"message":"Invalid Password"}),401
