import { useState, useEffect } from 'react';
import type { Transaction } from '../types';
import { transactionService } from '../api/transaction';
import { useAuth } from '../context/AuthContext';

export const useHistory = () => {
    const { user } = useAuth();
    const [history, setHistory] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchHistory = async () => {
        if (!user) return;
        setLoading(true);
        try {
            const data = await transactionService.getHistoryByUserId(user.id);
            setHistory(data);
        } catch (error) {
            console.error("Gagal load history", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchHistory();
    }, [user]);

    return { history, loading, getHistory: fetchHistory };
};