import { Link } from "react-router-dom";

function LandingPage() {

    return (

        <div className="min-h-screen bg-[#08122E]">

            {/* Navbar */}

            <nav className="bg-white h-20 flex items-center justify-between px-16 shadow-sm">

                <div className="flex items-center gap-3">

                    <div className="
                    w-12
                    h-12
                    rounded-xl
                    bg-blue-600
                    flex
                    items-center
                    justify-center
                    text-white
                    text-xl
                    ">
                        📒
                    </div>

                    <h1 className="
                    text-3xl
                    font-bold
                    text-slate-900
                    ">
                        DebtBook
                    </h1>

                </div>

                <div className="
                hidden
                md:flex
                items-center
                gap-12
                text-lg
                ">

                    <a href="/features">
                        Features
                    </a>

                    <a href="/pricing">
                        Pricing
                    </a>

                    <a href="/about">
                        About
                    </a>

                    <a href="/blog">
                        Blog
                    </a>

                </div>

                <div className="
                flex
                items-center
                gap-6
                ">

                    <Link
                        to="/login"
                        className="
                        text-slate-700
                        font-medium
                        "
                    >
                        Log In
                    </Link>

                    <Link
                        to="/register"
                        className="
                        bg-blue-600
                        text-white
                        px-6
                        py-3
                        rounded-full
                        font-semibold
                        "
                    >
                        Get Started
                    </Link>

                </div>

            </nav>

            {/* Hero Section */}

            <section className="
            max-w-7xl
            mx-auto
            px-10
            py-20
            ">

                <div className="
                grid
                lg:grid-cols-2
                gap-16
                items-center
                ">

                    {/* Left Side */}

                    <div>

                        <div className="
                        inline-flex
                        items-center
                        gap-3
                        bg-white/10
                        border
                        border-white/10
                        px-5
                        py-3
                        rounded-full
                        text-white
                        mb-10
                        ">

                            <div className="
                            w-3
                            h-3
                            rounded-full
                            bg-green-400
                            ">
                            </div>

                            Trusted by 50,000+ users across India

                        </div>

                        <h1 className="
                        text-7xl
                        font-bold
                        text-white
                        leading-tight
                        ">
                            Track Every Rupee.
                        </h1>

                        <h1 className="
                        text-7xl
                        font-bold
                        bg-gradient-to-r
                        from-blue-400
                        via-cyan-400
                        to-green-400
                        bg-clip-text
                        text-transparent
                        mb-8
                        ">
                            Settle Every Debt.
                        </h1>

                        <p className="
                        text-2xl
                        text-slate-300
                        leading-relaxed
                        max-w-xl
                        ">
                            The simplest way to track money
                            you've lent or borrowed.

                            Know exactly who owes you what —
                            and when to pay back.
                        </p>

                        <div className="
                        flex
                        gap-5
                        mt-12
                        ">

                            <Link
                                to="/register"
                                className="
                                bg-blue-600
                                hover:bg-blue-700
                                text-white
                                px-10
                                py-5
                                rounded-2xl
                                text-xl
                                font-semibold
                                "
                            >
                                Start for Free →
                            </Link>

                            <Link
                                to="/dashboard"
                                className="
                                bg-blue-600
                                hover:bg-blue-700
                                text-white
                                px-10
                                py-5
                                rounded-2xl
                                text-xl
                                font-semibold
                                "
                            >
                                View Demo →
                            </Link>

                        </div>

                        <div className="
                        flex
                        gap-10
                        mt-12
                        text-slate-300
                        ">

                            <span>
                                ✓ No credit card
                            </span>

                            <span>
                                ✓ Free forever
                            </span>

                            <span>
                                ✓ 100% secure
                            </span>

                        </div>

                    </div>

                    {/* Right Side */}

                    <div>

                        <div className="
                        bg-[#19233F]
                        border
                        border-white/10
                        rounded-[40px]
                        p-8
                        shadow-2xl
                        ">

                            <div className="
                            bg-[#101A35]
                            rounded-[30px]
                            p-8
                            ">

                                <div className="
                                flex
                                items-center
                                justify-between
                                mb-8
                                ">

                                    <h2 className="
                                    text-white
                                    text-3xl
                                    font-bold
                                    ">
                                        DebtBook
                                    </h2>

                                    <div className="
                                    flex
                                    gap-2
                                    ">

                                        <div className="
                                        w-4
                                        h-4
                                        rounded-full
                                        bg-red-400
                                        "></div>

                                        <div className="
                                        w-4
                                        h-4
                                        rounded-full
                                        bg-yellow-400
                                        "></div>

                                        <div className="
                                        w-4
                                        h-4
                                        rounded-full
                                        bg-green-400
                                        "></div>

                                    </div>

                                </div>

                                <div className="
                                grid
                                grid-cols-2
                                gap-5
                                ">

                                    <div className="
                                    bg-[#202A45]
                                    p-6
                                    rounded-3xl
                                    ">
                                        <p className="text-slate-400">
                                            Total Given
                                        </p>

                                        <h1 className="
                                        text-4xl
                                        font-bold
                                        text-blue-400
                                        ">
                                            ₹62.5K
                                        </h1>
                                    </div>

                                    <div className="
                                    bg-[#202A45]
                                    p-6
                                    rounded-3xl
                                    ">
                                        <p className="text-slate-400">
                                            Total Borrowed
                                        </p>

                                        <h1 className="
                                        text-4xl
                                        font-bold
                                        text-yellow-400
                                        ">
                                            ₹36.5K
                                        </h1>
                                    </div>

                                    <div className="
                                    bg-[#202A45]
                                    p-6
                                    rounded-3xl
                                    ">
                                        <p className="text-slate-400">
                                            Net Balance
                                        </p>

                                        <h1 className="
                                        text-4xl
                                        font-bold
                                        text-green-400
                                        ">
                                            ₹26K
                                        </h1>
                                    </div>

                                    <div className="
                                    bg-[#202A45]
                                    p-6
                                    rounded-3xl
                                    ">
                                        <p className="text-slate-400">
                                            People
                                        </p>

                                        <h1 className="
                                        text-4xl
                                        font-bold
                                        text-purple-400
                                        ">
                                            8
                                        </h1>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                        </section>

            {/* Features Section */}

            <section className="bg-white">

                {/* Statistics */}

                <div className="bg-blue-600 text-white py-10">

                    <div className="
                    max-w-7xl
                    mx-auto
                    grid
                    md:grid-cols-4
                    grid-cols-2
                    gap-8
                    text-center
                    ">

                        <div>
                            <h1 className="text-5xl font-bold">
                                50,000+
                            </h1>

                            <p className="mt-2">
                                Active Users
                            </p>
                        </div>

                        <div>
                            <h1 className="text-5xl font-bold">
                                ₹500Cr+
                            </h1>

                            <p className="mt-2">
                                Amount Tracked
                            </p>
                        </div>

                        <div>
                            <h1 className="text-5xl font-bold">
                                2M+
                            </h1>

                            <p className="mt-2">
                                Transactions
                            </p>
                        </div>

                        <div>
                            <h1 className="text-5xl font-bold">
                                99.9%
                            </h1>

                            <p className="mt-2">
                                Uptime
                            </p>
                        </div>

                    </div>

                </div>

                {/* Heading */}

                <div className="
                max-w-5xl
                mx-auto
                text-center
                py-24
                px-8
                ">

                    <h1 className="
                    text-6xl
                    font-bold
                    text-slate-900
                    ">
                        Everything you need
                        to manage debts
                    </h1>

                    <p className="
                    text-xl
                    text-slate-500
                    mt-6
                    ">
                        Built for individuals,
                        families and small businesses
                        who need clarity in their
                        financial relationships.
                    </p>

                </div>

                {/* Feature Cards */}

                <div className="
                max-w-7xl
                mx-auto
                grid
                md:grid-cols-3
                gap-8
                px-8
                pb-24
                ">

                    <div className="
                    border
                    rounded-3xl
                    p-10
                    shadow-sm
                    ">

                        <div className="
                        w-16
                        h-16
                        rounded-2xl
                        bg-blue-100
                        flex
                        items-center
                        justify-center
                        text-3xl
                        ">
                            📒
                        </div>

                        <h2 className="
                        text-3xl
                        font-bold
                        mt-8
                        ">
                            Smart Debt Tracking
                        </h2>

                        <p className="
                        text-slate-500
                        mt-5
                        ">
                            Track every rupee given
                            or borrowed with notes
                            and dates.
                        </p>

                    </div>

                    <div className="
                    border
                    rounded-3xl
                    p-10
                    shadow-sm
                    ">

                        <div className="
                        w-16
                        h-16
                        rounded-2xl
                        bg-purple-100
                        flex
                        items-center
                        justify-center
                        text-3xl
                        ">
                            👥
                        </div>

                        <h2 className="
                        text-3xl
                        font-bold
                        mt-8
                        ">
                            People Management
                        </h2>

                        <p className="
                        text-slate-500
                        mt-5
                        ">
                            Organize contacts and
                            instantly see balances.
                        </p>

                    </div>

                    <div className="
                    border
                    rounded-3xl
                    p-10
                    shadow-sm
                    ">

                        <div className="
                        w-16
                        h-16
                        rounded-2xl
                        bg-green-100
                        flex
                        items-center
                        justify-center
                        text-3xl
                        ">
                            🔄
                        </div>

                        <h2 className="
                        text-3xl
                        font-bold
                        mt-8
                        ">
                            Transaction History
                        </h2>

                        <p className="
                        text-slate-500
                        mt-5
                        ">
                            Search and filter
                            every transaction.
                        </p>

                    </div>

                </div>
                <div className="
max-w-7xl
mx-auto
grid
md:grid-cols-3
gap-8
px-8
pb-24
">

    {/* Card 1 */}

    <div className="
    border
    rounded-3xl
    p-10
    shadow-sm
    bg-white
    ">

        <div className="
        w-16
        h-16
        rounded-2xl
        bg-yellow-50
        flex
        items-center
        justify-center
        text-3xl
        ">
            📊
        </div>

        <h2 className="
        text-4xl
        font-bold
        mt-8
        text-slate-900
        ">
            Insightful Reports
        </h2>

        <p className="
        text-slate-500
        mt-5
        text-lg
        leading-relaxed
        ">
            Visualize your lending and
            borrowing patterns with
            beautiful charts. Export
            as PDF or CSV anytime.
        </p>

    </div>

    {/* Card 2 */}

    <div className="
    border
    rounded-3xl
    p-10
    shadow-sm
    bg-white
    ">

        <div className="
        w-16
        h-16
        rounded-2xl
        bg-red-50
        flex
        items-center
        justify-center
        text-3xl
        ">
            🛡️
        </div>

        <h2 className="
        text-4xl
        font-bold
        mt-8
        text-slate-900
        ">
            Bank-Grade Security
        </h2>

        <p className="
        text-slate-500
        mt-5
        text-lg
        leading-relaxed
        ">
            Your data is encrypted with
            AES-256 and protected by
            JWT authentication.
            Your finances stay private.
        </p>

    </div>

    {/* Card 3 */}

    <div className="
    border
    rounded-3xl
    p-10
    shadow-sm
    bg-white
    ">

        <div className="
        w-16
        h-16
        rounded-2xl
        bg-cyan-50
        flex
        items-center
        justify-center
        text-3xl
        ">
            ⚡
        </div>

        <h2 className="
        text-4xl
        font-bold
        mt-8
        text-slate-900
        ">
            Lightning Fast
        </h2>

        <p className="
        text-slate-500
        mt-5
        text-lg
        leading-relaxed
        ">
            A blazing fast interface that
            loads instantly. Manage
            hundreds of contacts and
            thousands of transactions.
        </p>

    </div>

</div>

</section>

{/* Testimonials Section */}

<section className="bg-slate-50 py-24">

    <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">

            <h1 className="
            text-6xl
            font-bold
            text-slate-900
            ">
                Loved by thousands of users
            </h1>

            <p className="
            text-xl
            text-slate-500
            mt-5
            ">
                Real people. Real stories.
            </p>

        </div>

        <div className="
        grid
        md:grid-cols-3
        gap-8
        ">

            {/* Testimonial 1 */}

            <div className="
            bg-white
            border
            rounded-3xl
            p-8
            shadow-sm
            ">

                <div className="text-yellow-500 text-xl">
                    ★★★★★
                </div>

                <p className="
                mt-6
                text-slate-600
                leading-relaxed
                ">
                    "DebtBook completely transformed
                    how I manage loans with suppliers
                    and customers. The dashboard gives
                    instant visibility into who owes
                    what."
                </p>

                <div className="
                flex
                items-center
                gap-4
                mt-8
                ">

                    <div className="
                    w-12
                    h-12
                    rounded-full
                    bg-blue-600
                    text-white
                    flex
                    items-center
                    justify-center
                    font-bold
                    ">
                        SM
                    </div>

                    <div>

                        <h3 className="font-bold">
                            Suresh Menon
                        </h3>

                        <p className="text-slate-400">
                            Small Business Owner · Bangalore
                        </p>

                    </div>

                </div>

            </div>

            {/* Testimonial 2 */}

            <div className="
            bg-white
            border
            rounded-3xl
            p-8
            shadow-sm
            ">

                <div className="text-yellow-500 text-xl">
                    ★★★★★
                </div>

                <p className="
                mt-6
                text-slate-600
                leading-relaxed
                ">
                    "I used to forget small loans
                    between friends. DebtBook keeps
                    everything organized. It's like
                    having a personal accountant."
                </p>

                <div className="
                flex
                items-center
                gap-4
                mt-8
                ">

                    <div className="
                    w-12
                    h-12
                    rounded-full
                    bg-purple-600
                    text-white
                    flex
                    items-center
                    justify-center
                    font-bold
                    ">
                        AK
                    </div>

                    <div>

                        <h3 className="font-bold">
                            Ananya Krishnan
                        </h3>

                        <p className="text-slate-400">
                            Freelancer · Chennai
                        </p>

                    </div>

                </div>

            </div>

            {/* Testimonial 3 */}

            <div className="
            bg-white
            border
            rounded-3xl
            p-8
            shadow-sm
            ">

                <div className="text-yellow-500 text-xl">
                    ★★★★★
                </div>

                <p className="
                mt-6
                text-slate-600
                leading-relaxed
                ">
                    "The reports feature is incredibly
                    powerful. I can see lending
                    patterns and make smarter
                    financial decisions."
                </p>
                <div className="
                flex
                items-center
                gap-4
                mt-8
                ">
                    <div className="
                    w-12
                    h-12
                    rounded-full
                    bg-green-600
                    text-white
                    flex
                    items-center
                    justify-center
                    font-bold
                    ">
                        DA
                    </div>
                    <div>
                        <h3 className="font-bold">
                            Deepak Agarwal
                        </h3>
                        <p className="text-slate-400">
                            Software Engineer · Pune
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* FAQ Section */}

<section className="bg-white py-24">

    <div className="max-w-5xl mx-auto px-8">

        <div className="text-center mb-16">

            <h1 className="
            text-6xl
            font-bold
            text-slate-900
            ">
                Frequently Asked Questions
            </h1>

            <p className="
            text-xl
            text-slate-500
            mt-5
            ">
                Everything you need to know about DebtBook.
            </p>

        </div>

        <div className="space-y-6">

            <div className="
            border
            rounded-3xl
            p-6
            shadow-sm
            flex
            justify-between
            items-center
            ">
                <h3 className="text-xl font-semibold">
                    Is DebtBook free to use?
                </h3>

                <span className="text-2xl text-slate-400">
                    ▼
                </span>
            </div>

            <div className="
            border
            rounded-3xl
            p-6
            shadow-sm
            flex
            justify-between
            items-center
            ">
                <h3 className="text-xl font-semibold">
                    How secure is my financial data?
                </h3>

                <span className="text-2xl text-slate-400">
                    ▼
                </span>
            </div>

            <div className="
            border
            rounded-3xl
            p-6
            shadow-sm
            flex
            justify-between
            items-center
            ">
                <h3 className="text-xl font-semibold">
                    Can I export my data?
                </h3>

                <span className="text-2xl text-slate-400">
                    ▼
                </span>
            </div>

            <div className="
            border
            rounded-3xl
            p-6
            shadow-sm
            flex
            justify-between
            items-center
            ">
                <h3 className="text-xl font-semibold">
                    Does DebtBook send reminders?
                </h3>

                <span className="text-2xl text-slate-400">
                    ▼
                </span>
            </div>

            <div className="
            border
            rounded-3xl
            p-6
            shadow-sm
            flex
            justify-between
            items-center
            ">
                <h3 className="text-xl font-semibold">
                    Can I use DebtBook on mobile?
                </h3>

                <span className="text-2xl text-slate-400">
                    ▼
                </span>
            </div>

        </div>

    </div>

</section>
{/* CTA Section */}

<section className="bg-slate-50 py-24">

    <div className="
    max-w-5xl
    mx-auto
    px-8
    ">

        <div className="
        bg-blue-600
        rounded-[32px]
        text-center
        py-16
        px-8
        ">

            <h1 className="
            text-5xl
            font-bold
            text-white
            ">
                Ready to take control of your finances?
            </h1>

            <p className="
            text-xl
            text-blue-100
            mt-5
            ">
                Join 50,000+ users who trust DebtBook.
            </p>

            <Link
                to="/register"
                className="
                inline-block
                mt-10
                bg-white
                text-blue-600
                px-12
                py-5
                rounded-2xl
                text-xl
                font-semibold
                hover:scale-105
                transition
                "
            >
                Get Started Free →
            </Link>

        </div>

    </div>

</section>

{/* Footer */}

<footer className="
bg-[#020B25]
text-white
pt-20
pb-10
">

    <div className="
    max-w-7xl
    mx-auto
    px-8
    ">

        <div className="
        grid
        md:grid-cols-4
        gap-16
        ">

            {/* Logo */}

            <div>

                <div className="
                flex
                items-center
                gap-3
                mb-6
                ">

                    <div className="
                    w-10
                    h-10
                    bg-blue-600
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    ">
                        📒
                    </div>

                    <h2 className="
                    text-3xl
                    font-bold
                    ">
                        DebtBook
                    </h2>

                </div>

                <p className="
                text-slate-400
                leading-relaxed
                ">
                    The modern way to track
                    personal and business debts.
                    Built with love in India.
                </p>

            </div>

            {/* Product */}

            <div>

                <h3 className="
                text-xl
                font-bold
                mb-6
                ">
                    Product
                </h3>

                <ul className="
                space-y-4
                text-slate-400
                ">

                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Changelog</li>
                    <li>Roadmap</li>

                </ul>

            </div>

            {/* Company */}

            <div>

                <h3 className="
                text-xl
                font-bold
                mb-6
                ">
                    Company
                </h3>

                <ul className="
                space-y-4
                text-slate-400
                ">

                    <li>About</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Press</li>

                </ul>

            </div>

            {/* Support */}

            <div>

                <h3 className="
                text-xl
                font-bold
                mb-6
                ">
                    Support
                </h3>

                <ul className="
                space-y-4
                text-slate-400
                ">

                    <li>Help Center</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Contact</li>

                </ul>

            </div>

        </div>

        <div className="
        border-t
        border-white/10
        mt-16
        pt-8
        flex
        justify-between
        text-slate-400
        ">

            <p>
                © 2024 DebtBook. All rights reserved.
            </p>

            <p>
                Made with ❤️ in India
            </p>

        </div>

    </div>

</footer>
</div>

    );
}

export default LandingPage;
