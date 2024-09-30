import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import UserLayout from "@/Layout/UserLayout"; // Ensure correct path

// Lazy load components
const SignUp = lazy(() => import("../pages/user/SignUp"));
const Login = lazy(() => import("../pages/user/Login"));
const OTP = lazy(() => import("../pages/user/OTP"));
const Home = lazy(() => import("../pages/user/Home"));
const Profile = lazy(() => import("../pages/user/Profile"));
const Reels = lazy(() => import("../pages/user/Reels"));
const ProtectedRoutes = lazy(() => import("../protectRoutes/UserProtect"));
const UserLogout = lazy(() => import("../protectRoutes/UserLogout"));

const UserRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<UserLogout />}>
        {/* Individual Suspense for each route */}
        <Route path="/signup" element={<Suspense fallback={<div>Loading Sign Up...</div>}><SignUp /></Suspense>} />
        <Route path="/login" element={<Suspense fallback={<div>Loading Login...</div>}><Login /></Suspense>} />
        <Route path="/otp" element={<Suspense fallback={<div>Loading OTP...</div>}><OTP /></Suspense>} />
      </Route>

      {/* Protected routes */}
      <Route element={<ProtectedRoutes />}>
        <Route element={<UserLayout />}>
          {/* Individual Suspense for protected routes */}
          <Route path="/" element={<Suspense fallback={<div>Loading Home...</div>}><Home /></Suspense>} />
          <Route path="/profile" element={<Suspense fallback={<div>Loading Profile...</div>}><Profile /></Suspense>} />
          <Route path="/reels" element={<Suspense fallback={<div>Loading Reels...</div>}><Reels /></Suspense>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default UserRoutes;
