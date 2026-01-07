import { Navigate, Route, Routes } from "react-router"
import LoginPage from "../pages/LoginPage"
import DashboardPage from "../pages/DashboardPage"
import PackagePage from "../pages/PackagePage";
import ProtectedRoute from "./ProtectedRoutes";
import NotFoundPage from "../pages/NotFoundPage";
import HistoryPage from "../pages/HistoryPage";
import TopUpPage from "../pages/TopUpPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            
            <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/package/:packageId" element={<PackagePage />} />
                <Route path="/history" element={<HistoryPage />} />
                <Route path="/top-up" element={<TopUpPage />} />
            </Route>

            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default AppRoutes;