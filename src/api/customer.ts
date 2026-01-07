import type { User } from '../types';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

export const customerService = {
    updateBalance: async (userId: string, newBalance: number): Promise<User> => {
        const response = await fetch(`${BASE_URL}/customers/${userId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ balance: newBalance })
        });

        if (!response.ok) throw new Error("Gagal update saldo user");
        
        return await response.json();
    }
};