from flask import Blueprint,request,jsonify

from config.database import get_connection

from utils.jwt_handler import generate_token

auth_bp = Blueprint(
    "auth",__name__
)

@auth_bp.route("/register",methods=["POST"])
def register():
    data = request.get_json()
    name = data["name"]
    email = data["email"]
    password = data["password"]

    conn = get_connection()
    cursor = conn.cursor()

    try:
        cursor.execute("""
        INSERT INTO users(name,email,password) VALUES(?,?,?)
        """,(name,email,password))
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


@auth_bp.route(
    "/login",
    methods=["POST"]
)
def login():

    data = request.get_json()

    email = data["email"]
    password = data["password"]

    conn = get_connection()

    cursor = conn.cursor()

    cursor.execute(
        """
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
