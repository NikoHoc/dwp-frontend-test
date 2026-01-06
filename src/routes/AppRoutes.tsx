import { Navigate, Route, Routes } from "react-router"
import LoginPage from "../pages/LoginPage"
import DashboardPage from "../pages/DashboardPage"
import PackagePage from "../pages/PackagePage";
import ProtectedRoute from "./ProtectedRoutes";
import NotFoundPage from "../pages/NotFoundPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            
            <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/package/:id" element={<PackagePage />} />
            </Route>

            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default AppRoutes;