import { Skeleton } from "antd";
import { usePackages } from "../hooks/usePackages";
import PackageCard from "./PackageCard";
import { useNavigate } from "react-router";

const PackagesSection = () => {
    const { packages, loading } = usePackages();
    const navigate = useNavigate(); 

    const handleBuy = (id: number) => {
        navigate(`/package/${id}`);
    };

    return (
        <div className="max-w-5xl mx-auto">
            <h1 className='font-bold text-white text-2xl mb-2'>Packages</h1>
            {loading ? (
                <div className="p-4 bg-white rounded-xl">
                   <Skeleton active paragraph={{ rows: 4 }} />
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {packages.map((item) => (
                        <PackageCard 
                            key={item.id}
                            item={item}
                            onBuy={handleBuy}  
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default PackagesSection;