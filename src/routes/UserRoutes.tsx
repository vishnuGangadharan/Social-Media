import { Route, Routes } from "react-router-dom"
import { Suspense, lazy } from "react"
import UserLayout from "@/Layout/UserLayout"

const SignUp = lazy(() => import("../pages/user/SignUp"))
const Login = lazy(() => import ('../pages/user/Login'))
const OTP = lazy(() => import ('../pages/user/OTP'))
const Home = lazy(() => import ('../pages/user/Home'))
const Profile = lazy(() => import ('../pages/user/Profile'))
const ProtectedRoutes = lazy(() => import ('../protectRoutes/UserProtect'))
const UserLogout = lazy(() => import ('../protectRoutes/UserLogout'))
const UserRoutes = () => {
  return (
   <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route element={<UserLogout/>}>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element= {<Login/>} />
        <Route path="/otp" element= {<OTP/>} />
        </Route>
        <Route element={<ProtectedRoutes/>}>
        <Route path="/" element= {<Home/>} />
        <Route  element={<UserLayout/>}>
            <Route path="/profile" element= {<Profile/>} />
        </Route>
        </Route>
    </Routes>

   </Suspense>
  )
}

export default UserRoutes

//https://res.cloudinary.com/dfzpyl4bi/image/upload/v1727327660/post/xqdf9nvyunsgyrypkq6w.jpg
//https://res.cloudinary.com/dfzpyl4bi/image/upload/v1727327660/post/qqhlwbyupnx15qiv5jfo.jpg