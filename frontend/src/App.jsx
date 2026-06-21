import AppRoutes from "./routes/AppRoutes";

function App() {
    return (
        <AppRoutes />
    );
}
export default App;








// import { useState } from "react";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";

// function App() {
//     const [showRegister, setShowRegister] =
//         useState(false);
//     const isLoggedIn =
//         localStorage.getItem("loggedIn");
//     if (isLoggedIn) {
//         return <Dashboard />;
//     }
//     return (
//         <div>
//             {
//                 showRegister
//                     ? <Register />
//                     : <Login />
//             }
//             <button
//                 onClick={() =>
//                     setShowRegister(
//                         !showRegister
//                     )
//                 }
//             >
//                 {
//                     showRegister
//                         ? "Go To Login"
//                         : "Go To Register"
//                 }
//             </button>
//         </div>
//     );
// }
// export default App;
