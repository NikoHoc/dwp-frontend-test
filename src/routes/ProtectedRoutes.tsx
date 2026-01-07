import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../context/AuthContext';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();

    // useEffect(() => {
    //     if (!isAuthenticated) {
    //         Swal.fire({
    //             icon: 'warning',
    //             title: 'Akses Ditolak',
    //             text: 'Tidak bisa mengakses page ini, silahkan Login terlebih dahulu!',
    //             showConfirmButton: false,
    //             timer: 2000,
    //             position: 'center'
    //         });
    //     }
    // }, [isAuthenticated])

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;