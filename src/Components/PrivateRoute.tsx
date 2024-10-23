
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '../redux/store'; // Adjust path if necessary



const ProtectedRoute = () => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    return isAuthenticated ? <Outlet/> : <Navigate to="/login" />;
};
export default ProtectedRoute;
