import { UserOutlined, WalletOutlined, HistoryOutlined } from '@ant-design/icons';
import { Avatar, Card, Statistic } from "antd";
import { formatRupiah } from "../utils/formatRupiah";
import type { User } from '../types';
import { Link } from 'react-router';

type UserSectionProps = {
    user: User;
}

const UserSection = ({ user }: UserSectionProps) => {
    return (
        <div className="max-w-5xl mx-auto mb-4">
            <div className='flex flex-row justify-between'>
                <h1 className='font-bold text-white text-2xl mb-2'>Welcome Back 👋</h1>
                <Link 
                    to="/history" 
                    className="text-white hover:text-blue-300 transition-colors flex items-center gap-2 text-sm font-medium"
                >
                    <HistoryOutlined /> Lihat Riwayat Transaksi
                </Link>
            </div>
            <Card className="shadow-lg rounded-xl border-none">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-2">
                    <div className="flex items-center gap-3">
                        <Avatar size={42} icon={<UserOutlined />} />
                        <div className="flex flex-col">
                            <h1 className="text-lg font-bold leading-tight">{user?.fullName}</h1>
                            <p>Status: aktif</p>
                        </div>                        
                    </div>
                    <Statistic 
                        title={
                            <span className="flex items-center gap-2">
                                <UserOutlined />
                                Nomor Telepon
                            </span>
                        } 
                        value={user?.phoneNumber} 
                        formatter={(value) => String(value)} />
                    <Statistic 
                        title={
                            <span className="flex items-center gap-2">
                                <WalletOutlined />
                                Balance
                            </span>
                        }
                        value={formatRupiah(user.balance)} />
                </div>             
            </Card>
        </div>
    )
}

export default UserSection;