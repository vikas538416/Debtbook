import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await fetch(
                "http://127.0.0.1:5000/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            );

            const data = await response.json();
            if (response.status === 404) {
                alert("User not found. Please register first.");
                window.location.href = "/register";
                return;
            }
            if (data.success) {
                localStorage.setItem("token", data.token);
                window.location.href = "/dashboard";
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.log(error);
            alert("Server Error");
        }
    };

    return (
        <div className="min-h-screen flex">

            {/* Left Side */}

            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white p-12 flex-col justify-between">

                <div>

                    <div className="flex items-center gap-3 mb-12">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                            📒
                        </div>

                        <h1 className="text-4xl font-bold">
                            DebtBook
                        </h1>
                    </div>

                    <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
                        <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                        Trusted by 50,000+ users across India
                    </div>

                    <h1 className="text-6xl font-bold leading-tight">
                        Track Every Rupee.
                    </h1>

                    <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8">
                        Settle Every Debt.
                    </h1>

                    <p className="text-xl text-slate-300 max-w-xl">
                        The simplest way to track money you've lent or borrowed.
                        Know exactly who owes you what and when to pay back.
                    </p>
                </div>

                {/* Stats */}

                <div className="grid grid-cols-2 gap-5 mt-12">

                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                        <h2 className="text-5xl font-bold">
                            ₹3.2L
                        </h2>

                        <p className="text-slate-300 mt-2">
                            Money Tracked
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                        <h2 className="text-5xl font-bold">
                            24
                        </h2>

                        <p className="text-slate-300 mt-2">
                            Active Contacts
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                        <h2 className="text-5xl font-bold">
                            ₹45K
                        </h2>

                        <p className="text-slate-300 mt-2">
                            This Month
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                        <h2 className="text-5xl font-bold">
                            92%
                        </h2>

                        <p className="text-slate-300 mt-2">
                            Recovery Rate
                        </p>
                    </div>

                </div>

            </div>

            {/* Right Side */}

            <div className="w-full lg:w-1/2 bg-slate-100 flex items-center justify-center p-8">

                <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl p-10">

                    <div className="flex justify-center mb-6">

                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                            📒
                        </div>

                    </div>

                    <h1 className="text-5xl font-bold text-center text-slate-900">
                        Welcome Back
                    </h1>

                    <p className="text-center text-slate-500 mt-3 mb-10">
                        Sign in to your DebtBook account
                    </p>

                    <div className="mb-5">

                        <label className="font-medium text-slate-700">
                            Email Address
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            placeholder="Enter your email"
                            className="w-full mt-2 p-4 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                        />

                    </div>

                    <div className="mb-5">

                        <label className="font-medium text-slate-700">
                            Password
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            placeholder="Enter your password"
                            className="w-full mt-2 p-4 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                        />

                    </div>

                    <div className="flex justify-between items-center mb-8">

                        <label className="flex items-center gap-2 text-slate-600">
                            <input type="checkbox" />
                            Remember me
                        </label>

                        <a
                            href="#"
                            className="text-blue-600"
                        >
                            Forgot password?
                        </a>

                    </div>

                    <button
                        onClick={handleLogin}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl text-lg font-semibold hover:scale-[1.02] transition"
                    >
                        Sign In →
                    </button>

                    <p className="text-center mt-8 text-slate-600">

                        Don't have an account?

                        <a
                            href="/register"
                            className="text-blue-600 font-semibold ml-2"
                        >
                            Create one free
                        </a>

                    </p>

                </div>

            </div>

        </div>
    );
}

export default Login;
