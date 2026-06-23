import { useState } from "react";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password
                    })
                }
            );

            const data = await response.json();

            alert(data.message);

            if (data.success) {
                alert("Registration successful. Please login.");
                window.location.href = "/login";
            }
            else {
                alert(data.message);
            }
        } catch (error) {
            console.log(error);
            alert("Server Error");
        }
    };

    return (
        <div>
            <h1>Register</h1>

            <input
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
            />

            <br />

            <input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <br />

            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <br />

            <button onClick={handleRegister}>
                Register
            </button>
        </div>
    );
}

export default Register;
