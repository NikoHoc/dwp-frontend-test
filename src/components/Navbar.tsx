import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

type NavbarProps = {
    onLogout: () => void;
};

const Navbar = ({ onLogout }: NavbarProps) => {
    return (
        <div className="max-w-5xl mx-auto flex justify-between items-center mb-8
        bg-white/5 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white/10">
            <h1 className="text-lg font-bold text-white leading-tight">DWP Portal</h1>
            <Button 
                style={{ fontWeight: "bold" }}
                type="primary" 
                danger 
                icon={<LogoutOutlined />} 
                onClick={onLogout}
            >
                Logout
            </Button>
        </div>
    )
}

export default Navbar;