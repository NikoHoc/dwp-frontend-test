import { useAuth } from "../context/AuthContext";
import { useLogout } from "../hooks/useLogout";
import { Spin } from "antd";
import Navbar from "../components/Navbar";
import UserSection from "../components/UserSection";
import PackagesSection from "../components/PackagesSection";

const DashboardPage = () => {
    const { user } = useAuth(); 
    const { handleLogout, contextHolder } = useLogout();

    if (!user) {
        return <div className="flex justify-center items-center h-screen"><Spin size="large" /></div>;
    }

    return (
        <div className="min-h-screen p-4 font-poppins">
            {contextHolder}
            <Navbar onLogout={handleLogout} />
            <UserSection user={user} />
            <PackagesSection />
        </div>
    );
};

export default DashboardPage;