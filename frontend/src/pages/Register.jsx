import { useState } from "react";

function Register() {
    const [name, setName] =
        useState("");
    const [email, setEmail] =
        useState("");
    const [password, setPassword] =
        useState("");
    const handleRegister =
        async () => {
            try{
                const response =
                    await fetch("http://127.0.0.1:5000/register",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type":
                                    "application/json"
                            },
                            body: JSON.stringify({
                                name, email, password
                            })
                        }
                    );
                const data =
                    await response.json();
                alert(
                    data.message
                );
                if (data.success) {
                    window.location.href =
                        "/login";
                }
            }
            catch(error){
                console.log(error);
                alert("Server Error");
            }
        };
    return (
        <div>
            <h1>
                Register
            </h1>
            <input placeholder="Name"
                onChange={(e) => setName(  e.target.value )}/>
            <br />
            <input placeholder="Email" onChange={(e) => setEmail( e.target.value)}/>
            <br />
            <input type="password" placeholder="Password"
                onChange={(e) =>setPassword( e.target.value)}/>
            <br />
            <button onClick={handleRegister}>
                Register
            </button>
        </div>
    );
}
export default Register;
