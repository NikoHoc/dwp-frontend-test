import { useState } from 'react';
import { message } from 'antd';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import type { DataPackage } from '../types';
import { calculateExpiryDate } from '../utils/expiryDate';
import { customerService } from '../api/customer';
import { transactionService } from '../api/transaction';

export const useTransaction = () => {
    const [loading, setLoading] = useState(false);
    const { user, login } = useAuth();
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();

    const purchasePackage = async (item: DataPackage) => {
        if (!user) return;
        setLoading(true);

        try {
            if (user.balance < item.price) {
                throw new Error("Saldo Anda tidak mencukupi!");
            }

            const newBalance = user.balance - item.price;
            const updatedUser = await customerService.updateBalance(user.id, newBalance);

            await transactionService.createTransaction({
                userId: user.id,
                packageId: item.id,
                packageName: item.name,
                price: item.price,
                date: new Date().toISOString(),
                expiryDate: calculateExpiryDate(item.activeDays),
                status: 'success'
            });

            login(updatedUser); // Update context auth

            messageApi.success("Pembelian Berhasil!");
            
            setTimeout(() => {
                navigate('/dashboard');
            }, 1500);

        } catch (error) {
            messageApi.error((error as TypeError).message || "Transaksi Gagal");
        } finally {
            setLoading(false);
        }
    };

    return { 
        purchasePackage, 
        loading, 
        contextHolder 
    };
};