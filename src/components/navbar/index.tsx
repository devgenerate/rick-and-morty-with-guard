// @vendors
import { Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

// @redux
import { AppStore } from '@/redux'

export const Navbar = () => {
    const user = useSelector((store: AppStore) => store.user)
    return (
        <nav>
           Navbar
        </nav>
    )
}