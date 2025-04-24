import { Navigate, Outlet } from 'react-router';

import Spinner from './Spinner';

import { useAuth } from '../hooks/getIsAuth';

const PrivateRoute = () => {
    const { isAuth, loading } = useAuth();

    if (loading) {
        return <Spinner />;
    }

    return isAuth ? <Outlet /> : <Navigate to={'/signin'} />;
};

export default PrivateRoute;
