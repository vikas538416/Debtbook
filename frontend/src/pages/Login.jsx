import { useState } from "react";

function Login() {
<<<<<<< HEAD
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin =
        async () => {
            try{
                const response =
                    await fetch(
                        "http://127.0.0.1:5000/login",
                        {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                email, password
                            })
                        }
                    );
                const data =
                    await response.json();
                if (data.success) {
                    localStorage.setItem(
                        "token", data.token);
                    window.location.href = "/dashboard";
                } else { alert(data.message); }
            }
            catch(error){
                console.log(error);
                alert("Server Error");
            }
        };
    return (
        <div>
            <h1>Login</h1>
            <input placeholder="Email"
                onChange={(e) => setEmail( e.target.value)}/><br />
            <input type="password" placeholder="Password"
                onChange={(e) =>
                    setPassword( e.target.value)}/><br />
            <button onClick={ handleLogin}>Login</button>
        </div>
    );
}
=======

    const [email, setEmail] =
        useState("");
    const [password, setPassword] =
        useState("");
    const handleLogin =
        async () => {

            const response =
                await fetch(
                    "http://127.0.0.1:5000/login",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body: JSON.stringify({
                            email,
                            password
                        })
                    }
                );

            const data =
                await response.json();

            if (data.success) {

                localStorage.setItem(
                    "token",
                    data.token
                );

                window.location.href = "/dashboard";

            } else {

                alert(
                    data.message
                );
            }
        };

    return (

        <div>

            <h1>
                Login
            </h1>

            <input
                placeholder="Email"
                onChange={(e) =>
                    setEmail(
                        e.target.value
                    )
                }
            />

            <br />

            <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                    setPassword(
                        e.target.value
                    )
                }
            />

            <br />

            <button
                onClick={
                    handleLogin
                }
            >
                Login
            </button>

        </div>

    );
}

>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e
export default Login;
