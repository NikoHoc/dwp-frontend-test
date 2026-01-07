import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import UserSection from "../components/UserSection";
import { useLogout } from "../hooks/useLogout";
import { Spin } from "antd";

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
            
        </div>
    );
};

export default DashboardPage;