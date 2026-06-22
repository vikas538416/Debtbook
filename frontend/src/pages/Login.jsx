import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin =
        async () => {
            try{
                const response =
                    await fetch(
                        `${import.meta.env.VITE_API_URL}/login`,
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

    const [email, setEmail] =
        useState("");
    const [password, setPassword] =
        useState("");
    const handleLogin =
        async () => {

            const response =
                await fetch(
                    `${import.meta.env.VITE_API_URL}/login`,
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

export default Login;
