// @redux
import { useSelector } from 'react-redux';
import {Navigate, Outlet} from 'react-router-dom';

// @redux
import { AppStore} from '@/redux';

// @constants
import { PRIVATE_ROUTES } from '@/constants';

// @utils
import { getPrivatePath } from '@/utils';


const PublicGuard = () => {
    const user = useSelector((store: AppStore) => store.user)

    return user.id ? <Navigate to={getPrivatePath(PRIVATE_ROUTES.FAVOURITES)} /> : <Outlet />
}

export default PublicGuard