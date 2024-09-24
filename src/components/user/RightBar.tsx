import React from 'react';
import { Avatar } from '@nextui-org/react';

const RightBar = () => {
  return (
    <div className='w-[30%] h-screen bg-black/85 p-5'>
      <div className='flex justify-between items-center mt-5'>
        <span className='text-white text-xl font-bold ml-10'>Suggested for you</span>
        <span className='text-blue-400 cursor-pointer hover:underline mr-7 '>View all</span>
      </div>
      <div className='flex items-center mt-10 bg-gray-800 p-4 rounded-md'>
        {/* Avatar */}
        <Avatar
          isBordered
          color="success"
          className='w-12 h-12'
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
        />
        {/* Name */}
        <div className='ml-4'>
          <p className='text-white text-lg font-semibold hover:text-blue-400 cursor-pointer transition duration-200'>John Doe</p>
          <p className='text-gray-400 text-sm'>@johndoe</p> {/* Optional: Add a username */}
        </div>
        <span className='text-blue-500 text-sm font-semibold ml-auto cursor-pointer hover:underline mr-5'>Follow</span>
      </div>
    </div>
  );
};

export default RightBar;
