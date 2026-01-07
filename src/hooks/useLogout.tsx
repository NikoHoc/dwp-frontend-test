import { message } from "antd";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export const useLogout = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const [messageApi, contextHolder] = message.useMessage();

    const handleLogout = () => {
        messageApi.open({
            type: 'success',
            content: 'Logout Berhasil! Sampai jumpa.',
            duration: 2,
        });

        setTimeout(() => {
            logout();
            navigate('/login');
        }, 1000);
    };

    return {
        handleLogout,
        contextHolder
    };
};
