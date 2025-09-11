import { useMyContext } from '../Utils/UserInfoContext'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    const userData = useMyContext()
  return userData ? <Outlet /> : <Navigate to={"/login"} />
}

export default ProtectedRoutes