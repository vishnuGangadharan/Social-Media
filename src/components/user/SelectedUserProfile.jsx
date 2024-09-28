// import React, { useEffect, useState } from "react";
// import { Card, Dropdown } from "flowbite-react";
// import { Avatar } from "@nextui-org/react";
// import { FaEdit } from "react-icons/fa";
// import UserPosts from "./UserPosts";
// import { useSelector } from 'react-redux';
// import {RootState} from '../../redux/store'
// import { followUser, userDetails } from "@/api/user";
// import { ProfileTypes } from "@/services/interface/post";

// const SelectedUserProfile = () => {

//     const [data, setData] = useState<ProfileTypes | undefined>(undefined)
    
//     const getUserDetails = async()=>{
//         try{
//         const response = await userDetails(userId)
      
//             setData(response?.data.data)
//             console.log(response?.data)
            
        
//     }catch(error){
//         console.log(error);
        
//     }
//     }

//     useEffect(() => {
//         getUserDetails()
//     },[userId])   

// const follwClick = async(userId: string) =>{
//     try {
//         const response = await followUser(userId)
//         console.log('res',response);
        
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }

//   return (
//     <div className="flex flex-col justify-center items-center  w-full ">
//     <Card className="max-w-sm w-[50%] border-none  bg-black text-white">
//         <div className="flex justify-end px-4 ">
//             <Dropdown inline label="">
//                 <Dropdown.Item>
//                     <a
//                         href="#"
//                         className="block px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                         Edit
//                     </a>
//                 </Dropdown.Item>
//                 <Dropdown.Item>
//                     <a
//                         href="#"
//                         className="block px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                         Export Data
//                     </a>
//                 </Dropdown.Item>
//                 <Dropdown.Item>
//                     <a
//                         href="#"
//                         className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                         Delete
//                     </a>
//                 </Dropdown.Item>
//             </Dropdown>
//         </div>
//         <div className="flex flex-col items-center pb-5">
//             <Avatar
//                 src={data && data.user?.profilePicture}
//                 className="w-28 h-28 text-large mb-4" />

//             <div className="flex gap-3">
//             <h5 className="mb-1 text-xl font-medium text-white dark:text-white">{ data?.user?.name}</h5>
//                 <FaEdit className="text-gray-400 hover:text-gray-700 mt-1" />
//             </div>
//                 <span className="text-sm text-gray-500 dark:text-gray-400">{data && data.user?.email} </span>
//             <div className="mt-4 flex space-x-3 lg:mt-6">
//                 <button
//                    onClick={() => follwClick(data?.user?._id ?? '')}
//                     className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
//                 >
//                     Add friend
//                 </button>
//                 <a
//                     href="#"
//                     className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
//                 >
//                     Message
//                 </a>
//             </div>
//         </div>
//     </Card>
//     <hr className="w-[200px] h-0.5 bg-gray-300 border-0 mb-3 mx-auto" />
//     <div className="mb-5">
//         <UserPosts post= {data?.post && data.post}/>
//     </div>
// </div>

//   )
// }

// export default SelectedUserProfile
