import { useState } from 'react';
import { useNavigate } from 'react-router';
import { message } from 'antd';
import { useAuth } from '../context/AuthContext';
import { authService } from '../api/auth';

type LoginFormValues = {
  username: string;
  password: string;
}

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const handleLogin = async (values: LoginFormValues) => {
    setLoading(true);
    try {
      const user = await authService.getUser(values.username, values.password);

      if (user) {
        login(user);
        messageApi.open({
          type: 'success',
          content: `Login Berhasil! Selamat datang, ${user.fullName}`,
          duration: 2,
        });
        
        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
      } else {
        messageApi.open({
          type: 'error',
          content: 'Username atau Password salah!',
        });
      }
    } catch (error) {
      console.error(error);
      messageApi.open({
        type: 'error',
        content: (error as TypeError).message || 'Gagal terhubung ke server',
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleLogin,
    contextHolder 
  };
};