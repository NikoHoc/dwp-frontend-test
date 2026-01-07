import { Card } from "antd";
import FormLogin from "../components/FormLogin";

const LoginPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen px-4">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-white font-montserrat">DWP E-Commerce</h1>
                <p className="text-white mt-2">Masuk untuk mengelola paket data Anda</p>
            </div>
            <Card className="w-full max-w-sm shadow-2xl">
                <div className="p-2">
                    <h2 className="text-xl font-bold mb-6 text-center">Login Akun</h2>
                    <FormLogin />
                </div>
            </Card>
        </div>
    );
};

export default LoginPage;