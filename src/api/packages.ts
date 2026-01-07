import type { DataPackage } from '../types';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

export const packageService = {
    getAllPackages: async (): Promise<DataPackage[]> => {
        const response = await fetch(`${BASE_URL}/packages`);
        
        if (!response.ok) {
            throw new Error('Gagal mengambil data paket');
        }
        
        return await response.json();
    },

    getPackageById: async (id: string): Promise<DataPackage | null> => {
        const response = await fetch(`${BASE_URL}/packages/${id}`);

        if (!response.ok) return null;
        
        return await response.json();
    }
};