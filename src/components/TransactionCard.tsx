import { Button, Card, Descriptions, Tag } from "antd";
import { ThunderboltOutlined, ShoppingCartOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { formatRupiah } from "../utils/formatRupiah";
import type { DataPackage } from "../types";

interface TransactionCardProps {
    item: DataPackage;
    onBack: () => void;
    onBuyClick: () => void;
}

const TransactionCard = ({ item, onBack, onBuyClick }: TransactionCardProps) => {
    return (
        <Card className="w-full max-w-2xl shadow-2xl rounded-2xl border-none">
            <Button 
                type="text" 
                icon={<ArrowLeftOutlined />} 
                className="mb-4 pl-0 hover:bg-transparent"
                onClick={onBack}
            >
                Kembali ke Dashboard
            </Button>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex items-center justify-center bg-blue-50 rounded-xl p-8 md:w-1/3">
                        <div className="text-center">
                        <ThunderboltOutlined className="text-6xl" />
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
                        onClick={onBuyClick}
                    >
                        Beli Sekarang
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default TransactionCard;