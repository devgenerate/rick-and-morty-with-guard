// @vendors
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// @adapters
import { userResponseAdapter } from '@/adapters'

// @services
import { loadUser } from '@/services'

// @redux
import { createUser } from '@/redux'

// @constants
import { PRIVATE_ROUTES } from '@/constants/routes'

export const Login = () => {
  const dispatcher = useDispatch()
  const navigate = useNavigate()

  const onLogin = async () => {
    const userResponse = await loadUser()
    const user = userResponseAdapter(userResponse)
    dispatcher(createUser(user))
    navigate(`/${PRIVATE_ROUTES.CHARACTER}/1`)
  }

  return (
    <div>
      <button onClick={onLogin}>Login</button>
    </div>
  )
}
