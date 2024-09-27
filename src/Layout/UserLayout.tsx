import React from 'react';
import LeftSideBar from '@/components/user/LeftSideBar';
import { Outlet } from 'react-router-dom';
import RightBar from '@/components/user/RightBar';

function UserLayout() {
  return (
    <div className="flex w-full h-screen">
      {/* Sidebar with no extra margins or padding */}
      {/* <div className="w-[25%] bg-black/85 h-full"> */}
        <LeftSideBar />
      {/* </div> */}

      {/* Main content taking up 75% */}
      <div className="w-[65%] h-full bg-black overflow-auto scrollbar-hide">
        <Outlet />
      </div>

      <RightBar/>
    </div>
  );
}

export default UserLayout;
