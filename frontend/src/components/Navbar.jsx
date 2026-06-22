function Navbar() {
    const logout = () => {
<<<<<<< HEAD
        localStorage.removeItem("token");
        window.location.href ="/login";
    };
    return (
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    );
}
=======
        localStorage.removeItem(
            "token"
        );
        window.location.href =
            "/login";
    };
    return (
        <div>
            <button onClick={logout}>
                Logout
            </button>
        </div>
    );
}

>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e
export default Navbar;
