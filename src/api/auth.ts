import type { User } from '../types';

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const authService = {
    getUser: async (username: string, password: string): Promise<User | null> => {
        const response = await fetch(
            `${BASE_URL}/customers?username=${username}&password=${password}`
        );

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        return data.length > 0 ? (data[0] as User) : null;
    },
};