import { Route, Routes } from "react-router-dom"
import { Suspense, lazy } from "react"

const SignUp = lazy(() => import("../pages/user/SignUp"))
const Login = lazy(() => import ('../pages/user/Login'))
const OTP = lazy(() => import ('../pages/user/OTP'))
const Home = lazy(() => import ('../pages/user/Home'))

const UserRoutes = () => {
  return (
   <Suspense fallback={<div>Loading...</div>}>
    <Routes>

        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element= {<Login/>} />
        <Route path="/otp" element= {<OTP/>} />
        <Route path="/" element= {<Home/>} />

    </Routes>

   </Suspense>
  )
}

export default UserRoutes
