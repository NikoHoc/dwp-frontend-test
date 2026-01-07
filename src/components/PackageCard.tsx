import { Badge, Button, Card } from "antd";
import type { DataPackage } from "../types";
import { ThunderboltOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { formatRupiah } from "../utils/formatRupiah";

type PackageCardProps = {
    item: DataPackage;
    onBuy: (id: number) => void;
}

const PackageCard = ({ item, onBuy }: PackageCardProps) => {
    return (
        <Card hoverable>
            <div className="mb-4">
                <Badge.Ribbon text={`${item.activeDays} Hari`} color="blue">
                    <div className="mt-2">
                        <h3 className="text-lg font-bold text-gray-800 leading-snug">
                            {item.name}
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                    </div>
                </Badge.Ribbon>
            </div>

            <div className="my-4 flex items-baseline gap-1 text-gray-800">
                <ThunderboltOutlined className="text-yellow-500 text-xl" />
                <span className="text-3xl font-extrabold">{item.quota}</span>
                <span className="text-lg font-medium">GB</span>
            </div>

            <div className="mt-auto pt-4 border-t border-gray-100 w-full">
                <div className="flex justify-between items-center w-full">
                    <div className="text-blue-600 font-bold text-lg">
                        {formatRupiah(item.price)}
                    </div>
                    <Button
                        type="primary"
                        shape="round"
                        icon={<ShoppingCartOutlined />}
                        className="bg-slate-800 hover:bg-slate-700 border-none font-semibold"
                        onClick={() => onBuy(item.id)}
                    >
                        Beli
                    </Button>
                </div>
            </div>
        </Card>
    )
}

export default PackageCard;