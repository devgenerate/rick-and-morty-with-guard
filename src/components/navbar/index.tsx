// @vendors
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// @redux
import { AppStore } from '@/redux'

// @constants
import { PUBLIC_ROUTES } from '@/constants'

import './styles.css'

export const Navbar = () => {
    const user = useSelector((store: AppStore) => store.user)
    const navigate = useNavigate()

    const goTo = (path: string) => () => {
        navigate(path)
    }

    return (
        <nav className='navbar'>
            <ul className='navbar__list'>
                <li onClick={goTo(PUBLIC_ROUTES.CHARACTERS)}>
                    Characters
                </li>
                {
                    !user.id && (
                        <li onClick={goTo(PUBLIC_ROUTES.LOGIN)}>
                            Login
                        </li>
                    )
                }
                {
                    !!user.id && (
                        <li onClick={goTo(PUBLIC_ROUTES.LOGOUT)}>
                            Logout
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}