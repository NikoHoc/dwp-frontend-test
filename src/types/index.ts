export interface User {
    id: string;
    username: string;
    password?: string;
    fullName: string;
    phoneNumber: string;
    balance: number;
}

export interface DataPackage {
    id: number;
    name: string;
    description: string;
    quota: number;
    price: number;
    activeDays: number;
}

export interface Transaction {
    id: string;
    userId: string;
    packageId?: number;
    packageName: string;
    price: number;
    date: string;      
    expiryDate?: string;
    category?: 'purchase' | 'topup';
    status: 'success' | 'failed' | 'pending';
}