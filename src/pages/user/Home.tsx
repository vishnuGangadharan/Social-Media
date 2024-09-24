import React from 'react'
import LeftSideBar from '@/components/user/LeftSideBar'
import MiddleBar from '@/components/user/MiddleBar'
import RightBar from '@/components/user/RightBar'
const Home = () => {
  return (
    <div className='flex h-screen'>
      <LeftSideBar/>
      <MiddleBar/>
      <RightBar/>
    </div>
  )
}

export default Home
