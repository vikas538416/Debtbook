import { useState } from "react";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {

        try {

            const response = await fetch(
                "http://127.0.0.1:5000/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        phone,
                        password
                    })
                }
            );

            const data = await response.json();

            if (data.success) {
<<<<<<< HEAD

                alert(
                    "Registration Successful"
                );

                window.location.href =
                "/login";

            } else {

                alert(
                    data.message
                );

            }

=======
                alert("Registration successful. Please login.");
                window.location.href = "/login";
            }
            else {
                alert(data.message);
            }
>>>>>>> 41ff95196e81a3b353e6bec5f3a3819a7515420b
        } catch (error) {

            console.log(error);

            alert(
                "Server Error"
            );

        }

    };

    return (

        <div className="min-h-screen flex">

            {/* Left Side */}

            <div
                className="
                hidden
                lg:flex
                lg:w-1/2
                bg-gradient-to-br
                from-slate-950
                via-blue-950
                to-indigo-900
                text-white
                p-14
                flex-col
                justify-between
                "
            >

                <div>

                    <div className="flex items-center gap-4 mb-16">

                        <div className="
                        w-14
                        h-14
                        bg-blue-600
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        text-2xl
                        ">
                            📒
                        </div>

                        <h1 className="
                        text-5xl
                        font-bold
                        ">
                            DebtBook
                        </h1>

                    </div>

                    <h1 className="
                    text-6xl
                    font-bold
                    leading-tight
                    mb-10
                    ">
                        Start tracking debts in
                        <br />
                        under 2 minutes
                    </h1>

                    <div className="
                    space-y-8
                    text-xl
                    text-slate-200
                    ">

                        <div>
                            ✓ Set up your account for free
                        </div>

                        <div>
                            ✓ Add your first contact instantly
                        </div>

                        <div>
                            ✓ Log your first transaction
                        </div>

                        <div>
                            ✓ See your debt overview dashboard
                        </div>

                    </div>

                </div>

                <div>

                    <p className="
                    text-slate-400
                    text-lg
                    ">
                        Free plan:
                        10 contacts &
                        50 transactions/month
                    </p>

                    <p className="
                    text-slate-500
                    mt-10
                    ">
                        © 2026 DebtBook.
                        All rights reserved.
                    </p>

                </div>

            </div>

            {/* Right Side */}

            <div
                className="
                w-full
                lg:w-1/2
                bg-slate-100
                flex
                items-center
                justify-center
                p-8
                "
            >

                <div
                    className="
                    bg-white
                    p-10
                    rounded-3xl
                    shadow-xl
                    w-full
                    max-w-xl
                    "
                >

                    <h1 className="
                    text-5xl
                    font-bold
                    text-slate-900
                    ">
                        Create your account
                    </h1>

                    <p className="
                    text-slate-500
                    mt-3
                    mb-8
                    ">
                        Free forever.
                        No credit card required.
                    </p>

                    <div className="mb-5">

                        <label className="
                        block
                        mb-2
                        font-medium
                        ">
                            Full Name
                        </label>

                        <input
                            type="text"
                            placeholder="Arjun Mehta"
                            value={name}
                            onChange={(e) =>
                                setName(
                                    e.target.value
                                )
                            }
                            className="
                            w-full
                            p-4
                            border
                            rounded-xl
                            outline-none
                            focus:ring-2
                            focus:ring-blue-500
                            "
                        />

                    </div>

                    <div className="mb-5">

                        <label className="
                        block
                        mb-2
                        font-medium
                        ">
                            Email Address
                        </label>

                        <input
                            type="email"
                            placeholder="arjun@gmail.com"
                            value={email}
                            onChange={(e) =>
                                setEmail(
                                    e.target.value
                                )
                            }
                            className="
                            w-full
                            p-4
                            border
                            rounded-xl
                            outline-none
                            focus:ring-2
                            focus:ring-blue-500
                            "
                        />

                    </div>

                    <div className="mb-5">

                        <label className="
                        block
                        mb-2
                        font-medium
                        ">
                            Phone Number
                        </label>

                        <input
                            type="text"
                            placeholder="+91 9876512345"
                            value={phone}
                            onChange={(e) =>
                                setPhone(
                                    e.target.value
                                )
                            }
                            className="
                            w-full
                            p-4
                            border
                            rounded-xl
                            outline-none
                            focus:ring-2
                            focus:ring-blue-500
                            "
                        />

                    </div>

                    <div className="mb-6">

                        <label className="
                        block
                        mb-2
                        font-medium
                        ">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="********"
                            value={password}
                            onChange={(e) =>
                                setPassword(
                                    e.target.value
                                )
                            }
                            className="
                            w-full
                            p-4
                            border
                            rounded-xl
                            outline-none
                            focus:ring-2
                            focus:ring-blue-500
                            "
                        />

                    </div>

                    <div className="
                    flex
                    items-center
                    gap-2
                    mb-6
                    ">

                        <input
                            type="checkbox"
                        />

                        <span className="
                        text-sm
                        text-slate-600
                        ">
                            I agree to the
                            Terms of Service
                            and Privacy Policy
                        </span>

                    </div>

                    <button
                        onClick={handleRegister}
                        className="
                        w-full
                        bg-gradient-to-r
                        from-blue-600
                        to-blue-700
                        text-white
                        py-4
                        rounded-xl
                        text-lg
                        font-semibold
                        hover:scale-[1.02]
                        transition
                        "
                    >
                        Create Free Account →
                    </button>

                    <p className="
                    text-center
                    mt-8
                    text-slate-600
                    ">

                        Already have an account?

                        <a
                            href="/login"
                            className="
                            text-blue-600
                            font-semibold
                            ml-2
                            "
                        >
                            Sign In
                        </a>

                    </p>

                </div>

            </div>

        </div>

    );
}

export default Register;
