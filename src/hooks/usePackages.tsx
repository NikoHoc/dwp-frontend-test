import { useState, useEffect } from 'react';
import { message } from 'antd';
import type { DataPackage } from '../types';
import { packageService } from '../api/packages';

export const usePackages = () => {
    const [packages, setPackages] = useState<DataPackage[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const data = await packageService.getAllPackages();
                setPackages(data);
            } catch (error) {
                setError((error as TypeError).message);
                message.error('Gagal memuat daftar paket');
            } finally {
                setLoading(false);
            }
        };

        fetchPackages();
    }, []);

    return { 
        packages, 
        loading, 
        error 
    };
};