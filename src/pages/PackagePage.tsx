import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Modal, Skeleton } from "antd";
import type { DataPackage } from "../types";
import { useTransaction } from "../hooks/useTransaction";
import { packageService } from "../api/packages";
import { formatRupiah } from "../utils/formatRupiah";
import TransactionCard from "../components/TransactionCard";

const PackagePage = () => {
    const { packageId } = useParams();
    const navigate = useNavigate();
    
    const [item, setItem] = useState<DataPackage | null>(null);
    const [loadingData, setLoadingData] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { purchasePackage, loading: loadingBuy, contextHolder } = useTransaction();

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
            
            <TransactionCard
                item={item}
                onBack={() => navigate('/dashboard')} 
                onBuyClick={() => setIsModalOpen(true)}
            />

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