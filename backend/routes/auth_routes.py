from flask import Blueprint,request,jsonify

<<<<<<< HEAD
from Debtbook.backend.config.database import get_connection

from Debtbook.backend.utils.jwt_handler import generate_token
import sqlite3
import bcrypt
=======
from config.database import get_connection

from utils.jwt_handler import generate_token
>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e

auth_bp = Blueprint(
    "auth",__name__
)

@auth_bp.route("/register",methods=["POST"])
def register():
<<<<<<< HEAD
    data = request.json
=======
    data = request.get_json()
>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e
    name = data["name"]
    email = data["email"]
    password = data["password"]

<<<<<<< HEAD
    #hash password
    hashed_password = bcrypt.hashpw(
        password.encode("utf-8"),
        bcrypt.gensalt()
    ).decode("utf-8")

    conn = sqlite3.connect("debtbook.db")
=======
    conn = get_connection()
>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e
    cursor = conn.cursor()

    try:
        cursor.execute("""
<<<<<<< HEAD
        INSERT INTO users(name,email,password) VALUES(%s,%s,%s)
        """,(name,email,hashed_password))
=======
        INSERT INTO users(name,email,password) VALUES(?,?,?)
        """,(name,email,password))
>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e
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


<<<<<<< HEAD
@auth_bp.route("/login",methods=["POST"])
def login():
    data = request.json
    email = data["email"]
    password = data["password"]

    conn = sqlite3.connect("debtbook.db")
=======
@auth_bp.route(
    "/login",
    methods=["POST"]
)
def login():

    data = request.get_json()

    email = data["email"]
    password = data["password"]

    conn = get_connection()

>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e
    cursor = conn.cursor()

    cursor.execute(
        """
<<<<<<< HEAD
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
=======
        SELECT *
        FROM users
        WHERE email=?
        AND password=?
        """,
        (
            email,
            password
        )
    )

    user = cursor.fetchone()

    conn.close()

    if user:

        token = generate_token(
        user[0]
    )
        return jsonify({
            "success": True,
            "token": token,
            "message":
            "Login Successful"
        })
    return jsonify({
        "success": False,
        "message": "Invalid Email Or Password"
    })
>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e
