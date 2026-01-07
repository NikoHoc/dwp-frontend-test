import { useEffect } from 'react';
import { Table, Card, Tag } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router';
import { useHistory } from '../hooks/useHistory';
import { useLogout } from '../hooks/useLogout';
import Navbar from '../components/Navbar';
import { formatRupiah } from '../utils/formatRupiah';
import { formatDate } from '../utils/formatDate';

const HistoryPage = () => {
    const { history, loading, getHistory } = useHistory();    
    const { contextHolder, handleLogout } = useLogout();

    useEffect(() => {
        getHistory();
    }, []);
    console.log(history)

    const columns = [
        {
            title: 'Tanggal Pembelian',
            dataIndex: 'date',
            key: 'date',
            render: (text: string) => formatDate(text),
        },
        {
            title: 'Item',
            dataIndex: 'packageName',
            key: 'packageName',
            render: (text: string) => <span className="font-semibold">{text}</span>,
        },
        {
            title: 'Harga',
            dataIndex: 'price',
            key: 'price',
            render: (price: number) => formatRupiah(price),
        },
        {
            title: 'Kedaluwarsa Paket',
            dataIndex: 'expiryDate',
            key: 'expiryDate',
            render: (text: string) => formatDate(text),
        },
        {
            title: 'Kategori',
            dataIndex: 'category',
            key: 'category',
            render: (text: string) => <span className="font-semibold">{text}</span>,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <Tag color={status === 'success' ? 'green' : 'red'}>
                    {status.toUpperCase()}
                </Tag>
            ),
        },
    ];

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

                <Card className="shadow-xl rounded-xl border-none">
                    <div className="mb-6 border-b pb-4">
                        <h1 className="text-2xl font-bold text-gray-800">Riwayat Transaksi</h1>
                    </div>
                    <Table 
                        dataSource={history} 
                        columns={columns} 
                        rowKey="id"
                        loading={loading}
                        pagination={{ pageSize: 5 }}
                    />
                </Card>
            </div>
        </div>
    );
};

export default HistoryPage;