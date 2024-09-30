import React from 'react'
import Status from './Middilepage/Status'
import Post from './Middilepage/Post'
const MiddleBar = () => {
  return (
    <div className='  h-screen overflow-hidden bg-black'>
      <div className=''>
      <Status/>
      </div>
      <div className='overflow-y-auto h-[calc(100vh-xx)]'>

      <Post/>
      </div>
    </div>
  )
}

export default MiddleBar
