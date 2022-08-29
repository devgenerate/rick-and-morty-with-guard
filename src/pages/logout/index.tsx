// @vendors
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// @actions
import { resetUser } from '@/redux'

// @constants
import { PUBLIC_ROUTES } from '@/constants'

export const Logout = () => {
  const dispatcher = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatcher(resetUser())
    navigate(`/${PUBLIC_ROUTES.CHARACTERS}`, { replace: true })
  })

  return null
}