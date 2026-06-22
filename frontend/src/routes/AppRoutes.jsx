import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Navigate } from "react-router-dom";
import Register from "../pages/Register";

import Login from "../pages/Login";

import Dashboard from "../pages/Dashboard";

import ProtectedRoute from "../components/ProtectedRoute";

import PersonDetails from "../pages/PersonDetails";

import Reports from "../pages/Reports";

import Backup from "../pages/Backup";

import Reminders from "../pages/Reminders";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
    path="/"
    element={<Navigate to="/login" />}
/>
                <Route
                    path="/register"
                    element={<Register />}/>
                <Route
                    path="/login"
                    element={<Login />}/>
                <Route
                    path="/dashboard"
                    element={<ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>}/>

                <Route
                    path="/person/:id"
                    element={ <PersonDetails />
                    }/>

                <Route path="/reports"
                 element={<Reports />} />

                <Route path="/backup"
                 element={<Backup />}/>

                <Route path="/reminders"
                 element={<Reminders />}/>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;
