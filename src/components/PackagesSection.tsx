import { Badge, Button, Card, Skeleton } from "antd";
import { ThunderboltOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { usePackages } from "../hooks/usePackages";
import { formatRupiah } from "../utils/formatRupiah";

const PackagesSection = () => {
    const { packages, loading } = usePackages();

    return (
        <div className="max-w-5xl mx-auto">
            <h1 className='font-bold text-white text-2xl mb-2'>Packages</h1>
            {loading ? (
                <div className="p-4 bg-white rounded-xl">
                   <Skeleton active paragraph={{ rows: 4 }} />
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {packages.map((pkg) => (
                        <Card 
                            key={pkg.id} 
                            hoverable
                            className="rounded-xl overflow-hidden border-none shadow-lg flex flex-col h-full"
                            bodyStyle={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '1.5rem' }} 
                        >
                            {/* --- ISI CARD SAMA SEPERTI SEBELUMNYA --- */}
                            <div className="mb-4">
                                <Badge.Ribbon text={`${pkg.activeDays} Hari`} color="blue">
                                    <div className="mt-2">
                                        <h3 className="text-lg font-bold text-gray-800 leading-snug">
                                            {pkg.name}
                                        </h3>
                                        <p className="text-gray-500 text-sm mt-1">{pkg.description}</p>
                                    </div>
                                </Badge.Ribbon>
                            </div>

                            <div className="my-4 flex items-baseline gap-1 text-gray-800">
                                <ThunderboltOutlined className="text-yellow-500 text-xl" />
                                <span className="text-3xl font-extrabold">{pkg.quota}</span>
                                <span className="text-lg font-medium">GB</span>
                            </div>

                            <div className="mt-auto pt-4 border-t border-gray-100 w-full">
                                <div className="flex justify-between items-center w-full">
                                    <div className="text-blue-600 font-bold text-lg">
                                        {formatRupiah(pkg.price)}
                                    </div>
                                    <Button 
                                        type="primary" 
                                        shape="round"
                                        icon={<ShoppingCartOutlined />}
                                        className="bg-slate-800 hover:bg-slate-700 border-none font-semibold"
                                        onClick={() => console.log('Beli:', pkg.id)}
                                    >
                                        Beli
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
            
        </div>
    )
}

export default PackagesSection;