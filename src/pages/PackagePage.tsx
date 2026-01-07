import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import type { DataPackage } from "../types";
import { useTransaction } from "../hooks/useTransaction";
import { packageService } from "../api/packages";
import { Button, Card, Descriptions, Modal, Skeleton, Tag } from "antd";
import { ThunderboltOutlined, ShoppingCartOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { formatRupiah } from "../utils/formatRupiah";

const PackagePage = () => {
    const { packageId } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState<DataPackage | null>(null);
    const [loadingData, setLoadingData] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { purchasePackage, loading: loadingBuy, contextHolder } = useTransaction();

    console.log("packageid: " + packageId)

    useEffect(() => {
        const fetchData = async () => {
            if (packageId) {
                const data = await packageService.getPackageById(packageId);
                setItem(data);
                setLoadingData(false);
            }
        };
        fetchData();
    }, [packageId]);

    const handleConfirmBuy = () => {
        if (item) {
            purchasePackage(item);
            setIsModalOpen(false);
        }
    };

    if (loadingData) return <div className="p-8"><Skeleton active /></div>;
    if (!item) return <div className="p-8 text-white">Paket tidak ditemukan</div>;

    return (
        <div className="min-h-screen p-4 flex items-center justify-center font-poppins" style={{ backgroundColor: "oklch(27.9% 0.041 260.031)" }}>
            {contextHolder}
            
            <Card className="w-full max-w-2xl shadow-2xl rounded-2xl border-none">
                <Button 
                    type="text" 
                    icon={<ArrowLeftOutlined />} 
                    className="mb-4 pl-0 hover:bg-transparent"
                    onClick={() => navigate('/dashboard')}
                >
                    Kembali ke Dashboard
                </Button>

                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex items-center justify-center bg-blue-50 rounded-xl p-8 md:w-1/3">
                         <div className="text-center">
                            <ThunderboltOutlined className="text-6xl text-yellow-500" />
                            <h2 className="text-3xl font-extrabold text-blue-600 mt-4">{item.quota} GB</h2>
                            <Tag color="blue" className="mt-2 text-sm px-3 py-1 rounded-full">
                                {item.activeDays} Hari
                            </Tag>
                         </div>
                    </div>

                    <div className="md:w-2/3 flex flex-col justify-center">
                        <h1 className="text-2xl font-bold text-gray-800">{item.name}</h1>
                        <p className="text-gray-500 mt-2 mb-6">{item.description}</p>
                        
                        <Descriptions column={1} bordered size="small">
                            <Descriptions.Item label="Kuota Utama">{item.quota} GB</Descriptions.Item>
                            <Descriptions.Item label="Masa Aktif">{item.activeDays} Hari</Descriptions.Item>
                            <Descriptions.Item label="Harga">
                                <span className="text-lg font-bold text-blue-600">
                                    {formatRupiah(item.price)}
                                </span>
                            </Descriptions.Item>
                        </Descriptions>

                        <Button 
                            type="primary" 
                            size="large"
                            icon={<ShoppingCartOutlined />}
                            className="mt-8 bg-slate-800 w-full"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Beli Sekarang
                        </Button>
                    </div>
                </div>
            </Card>

            <Modal
                title="Konfirmasi Pembelian"
                open={isModalOpen}
                onOk={handleConfirmBuy}
                confirmLoading={loadingBuy}
                onCancel={() => setIsModalOpen(false)}
                okText="Bayar"
                cancelText="Batal"
                okButtonProps={{ className: 'bg-blue-600' }}
            >
                <p>Apakah Anda yakin ingin membeli paket <b>{item.name}</b>?</p>
                <p>Saldo Anda akan dipotong sebesar <b>{formatRupiah(item.price)}</b>.</p>
            </Modal>
        </div>
    )
}

export default PackagePage;