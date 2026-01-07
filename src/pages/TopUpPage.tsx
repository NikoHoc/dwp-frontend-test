import { useState } from 'react';
import { Card, Modal } from 'antd';
import { WalletOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router';
import { useTransaction } from '../hooks/useTransaction';
import { useAuth } from '../context/AuthContext';
import { formatRupiah } from '../utils/formatRupiah';
import Navbar from '../components/Navbar';
import { useLogout } from '../hooks/useLogout';

const NOMINALS = [10000, 50000, 100000, 150000, 300000, 500000];

const TopUpPage = () => {
    const { handleLogout } = useLogout();

    const { user } = useAuth();
    const { topUpBalance, loading, contextHolder } = useTransaction();
    
    const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = (amount: number) => {
        setSelectedAmount(amount);
        setIsModalOpen(true);
    };

    const handleConfirmTopUp = () => {
        if (selectedAmount) {
            topUpBalance(selectedAmount);
            setIsModalOpen(false);
        }
    };

    return (
        <div className="min-h-screen p-4 font-poppins">
            {contextHolder}
            <Navbar onLogout={handleLogout} />

            <div className="max-w-5xl mx-auto">
                <Link 
                    to="/dashboard" 
                    className="text-white hover:text-blue-300 transition-colors flex items-center gap-2 text-sm font-medium w-fit mb-2"
                >
                    <ArrowLeftOutlined /> Kembali ke Dashboard
                </Link>

                <h1 className="text-2xl font-bold text-white mb-2 mt-5">Top Up Balance Akun</h1>
                <Card>
                    <div className="flex items-center gap-4 text-white">
                        <WalletOutlined style={{ fontSize: '32px', color: 'black' }} />
                        <div>
                            <p className="text-black text-sm">Balanace Saat Ini</p>
                            <h2 className="text-2xl font-bold text-black">{formatRupiah(user?.balance || 0)}</h2>
                        </div>
                    </div>
                </Card>

                <p className="text-gray-400 mt-6">Pilih nominal yang ingin Anda tambahkan:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3">
                    {NOMINALS.map((amount) => (
                        <Card 
                            key={amount}
                            hoverable
                            className="text-center cursor-pointer hover:border-blue-500 transition-all"
                            onClick={() => handleCardClick(amount)}
                        >
                            <h3 className="text-xl font-bold text-blue-600">
                                {formatRupiah(amount)}
                            </h3>
                        </Card>
                    ))}
                </div>
            </div>
            <Modal
                title="Konfirmasi Top Up"
                open={isModalOpen}
                onOk={handleConfirmTopUp}
                confirmLoading={loading}
                onCancel={() => setIsModalOpen(false)}
                okText="Bayar"
                cancelText="Batal"
            >
                <p>Anda akan melakukan Top Up saldo sebesar:</p>
                <h2 className="text-2xl font-bold text-center my-4 text-blue-600">
                    {selectedAmount ? formatRupiah(selectedAmount) : 0}
                </h2>
            </Modal>
        </div>
    );
};

export default TopUpPage;