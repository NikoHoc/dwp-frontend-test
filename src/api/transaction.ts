import type { Transaction } from '../types';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';


type CreateTransactionDTO = Omit<Transaction, 'id'>;

export const transactionService = {
    createTransaction: async (data: CreateTransactionDTO): Promise<Transaction> => {
        const response = await fetch(`${BASE_URL}/transactions`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error("Gagal membuat transaksi");

        return await response.json();
    }
};