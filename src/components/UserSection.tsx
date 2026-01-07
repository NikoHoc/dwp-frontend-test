import { UserOutlined, WalletOutlined } from '@ant-design/icons';
import { Avatar, Card, Statistic } from "antd";
import { formatRupiah } from "../utils/formatRupiah";
import type { User } from '../types';

type UserSectionProps = {
    user: User;
}

const UserSection = ({ user }: UserSectionProps) => {
    return (
        <div className="max-w-5xl mx-auto mb-4">
            <h1 className='font-bold text-white text-2xl mb-2'>Wellcome Back 👋</h1>
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