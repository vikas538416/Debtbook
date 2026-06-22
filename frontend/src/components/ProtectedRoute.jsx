import { Navigate } from "react-router-dom";

<<<<<<< HEAD
function ProtectedRoute({children}) {
    const token = localStorage.getItem("token");
    if (!token) {
        return (
            <Navigate to="/login"/>);
    }
    return children;
}
=======
function ProtectedRoute({

    children

}) {

    const token =
        localStorage.getItem(
            "token"
        );

    if (!token) {

        return (
            <Navigate
                to="/login"
            />
        );
    }

    return children;
}

>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e
export default ProtectedRoute;
