// @redux
import { useSelector } from 'react-redux';
import {Navigate, Outlet} from 'react-router-dom';

// @redux
import { AppStore} from '@/redux';

// @constants
import { PUBLIC_ROUTES } from '@/constants';

const PrivateGuard = () => {
    const user = useSelector((store: AppStore) => store.user)

    return user.id ? <Outlet /> : <Navigate to={PUBLIC_ROUTES.CHARACTERS} replace />
}

export default PrivateGuard