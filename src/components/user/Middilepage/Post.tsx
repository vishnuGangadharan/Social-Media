import React from 'react';
import { Avatar } from '@nextui-org/react';
import { FcApproval } from 'react-icons/fc';
import otp from '../../../../public/user/otp.png';
import { FcLike } from "react-icons/fc";
import { FcComments } from "react-icons/fc";

const Post = () => {
    return (
        <div className='h-screen flex justify-center mt-5'>
            <div className='border border-2 rounded-xl border-gray-500 w-[50%] h-[80vh] overflow-y-auto p-4 scrollbar-hide'> {/* Set fixed height and enable scrolling */}
                <div>
                    <div className='mb-4 border-b border-gray-600 pb-4'>
                        <div className='flex items-center'>
                            {/* Avatar */}
                            <Avatar
                                isBordered
                                color="success"
                                className='w-10 h-10'
                                src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                            />
                            {/* Name, Approval Icon, and Date */}
                            <div className='ml-4'>
                                <div className='flex items-center'>
                                    <p className='text-white text-lg font-semibold'>John Doe</p> {/* Name */}
                                    <FcApproval className='ml-2' /> {/* Verified Icon */}
                                </div>
                                <p className='text-gray-400 text-sm'>Sept 22, 2024</p> {/* Date */}
                            </div>
                        </div>
                        <div className='mt-2 flex justify-center'>
                            <img src={otp} alt="" className='max-w-full h-auto rounded-md' /> {/* Responsive image */}
                        </div>
                        <div className='flex mt-2  '>
                            <FcLike className='mr-3' size={24} />
                            <FcComments size={24} />
                        </div>
                        <div className='flex flex-col items-start mt-1'>
                            <p className='text-sm text-gray-400'>100 Likes</p>
                            <div className='text-gray-500 text-sm mt-1'>
                                <p className='mb-1'>this is some texts for the comments...</p>
                                <p className='text-xs'>100 comments</p>
                            </div>
                            <input
                                type="text"
                                className='mt-3 text-white shadow appearance-none border rounded-xl w-full py-2 px-4 leading-tight focus:outline-none focus:shadow-outline backdrop-blur-sm bg-white/20 placeholder-white 
                              hover:bg-white/40 hover:border-blue-500 transition duration-200 ease-in-out text-sm'
                                placeholder='Add a comment...'
                                autoComplete="off"
                            />
                        </div>


                    </div>



                    <div className='mb-4 border-b border-gray-600 pb-4'>
                        <div className='flex items-center'>
                            {/* Avatar */}
                            <Avatar
                                isBordered
                                color="success"
                                className='w-10 h-10'
                                src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                            />
                            {/* Name, Approval Icon, and Date */}
                            <div className='ml-4'>
                                <div className='flex items-center'>
                                    <p className='text-white text-lg font-semibold'>John Doe</p> {/* Name */}
                                    <FcApproval className='ml-2' /> {/* Verified Icon */}
                                </div>
                                <p className='text-gray-400 text-sm'>Sept 22, 2024</p> {/* Date */}
                            </div>
                        </div>
                        <div className='mt-2 flex justify-center'>
                            <img src={otp} alt="" className='max-w-full h-auto rounded-md' /> {/* Responsive image */}
                        </div>
                    </div>



                    <div className='mb-4 border-b border-gray-600 pb-4'>
                        <div className='flex items-center'>
                            {/* Avatar */}
                            <Avatar
                                isBordered
                                color="success"
                                className='w-10 h-10'
                                src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                            />
                            {/* Name, Approval Icon, and Date */}
                            <div className='ml-4'>
                                <div className='flex items-center'>
                                    <p className='text-white text-lg font-semibold'>John Doe</p> {/* Name */}
                                    <FcApproval className='ml-2' /> {/* Verified Icon */}
                                </div>
                                <p className='text-gray-400 text-sm'>Sept 22, 2024</p> {/* Date */}
                            </div>
                        </div>
                        <div className='mt-2 flex justify-center'>
                            <img src={otp} alt="" className='max-w-full h-auto rounded-md' /> {/* Responsive image */}
                        </div>
                    </div>



                    <div className='mb-4 border-b border-gray-600 pb-4'>
                        <div className='flex items-center'>
                            {/* Avatar */}
                            <Avatar
                                isBordered
                                color="success"
                                className='w-10 h-10'
                                src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                            />
                            {/* Name, Approval Icon, and Date */}
                            <div className='ml-4'>
                                <div className='flex items-center'>
                                    <p className='text-white text-lg font-semibold'>John Doe</p> {/* Name */}
                                    <FcApproval className='ml-2' /> {/* Verified Icon */}
                                </div>
                                <p className='text-gray-400 text-sm'>Sept 22, 2024</p> {/* Date */}
                            </div>
                        </div>
                        <div className='mt-2 flex justify-center'>
                            <img src={otp} alt="" className='max-w-full h-auto rounded-md' /> {/* Responsive image */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
