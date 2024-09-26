import React from 'react';
import { Listbox, ListboxItem } from "@nextui-org/react";
import { CiSquarePlus } from "react-icons/ci";
import { FcFilmReel } from "react-icons/fc";
import { FcSearch } from "react-icons/fc";
import { FcSms } from "react-icons/fc";
import { FcAdvertising } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import CreatePost from './CreatePost';
const LeftSideBar = () => {
  return (
    <div className="flex h-screen flex-col items-center gap-4 bg-black/85 text-white w-[25%]">
      <div className="flex w-full items-center justify-center mt-28">
        <Listbox aria-label="Listbox Variants">
          <ListboxItem key="home" textValue="Home" className="hover:bg-gray-700 w-[65%] items-center ml-10 rounded-lg transition-colors">
            <div className="flex items-center gap-4 px-3 py-2 text-xl">
              <FcHome size={24} />
              <span>Home</span>
            </div>
          </ListboxItem>

          <ListboxItem key="search" textValue="Search" className="hover:bg-gray-700 w-[65%] items-center ml-10 rounded-lg transition-colors">
            <div className="flex items-center gap-4 px-3 py-2 text-xl">
            <FcSearch size={24} />
              <span>Search</span>
            </div>
          </ListboxItem>

          <ListboxItem key="explore" textValue="Explore" className="hover:bg-gray-700 w-[65%] items-center ml-10 rounded-lg transition-colors">
            <div className="flex items-center gap-4 px-3 py-2 text-xl">
              <FcGlobe size={24} />
              <span>Explore</span>
            </div>
          </ListboxItem>

          <ListboxItem key="reels" textValue="Reels" className="hover:bg-gray-700 w-[65%] items-center ml-10 rounded-lg transition-colors">
            <div className="flex items-center gap-4 px-3 py-2 text-xl">
            <FcFilmReel size={24} />
              <span>Reels</span>
            </div>
          </ListboxItem>

          <ListboxItem key="messages" textValue="Messages" className="hover:bg-gray-700 w-[65%] items-center ml-10 rounded-lg transition-colors">
            <div className="flex items-center gap-4 px-3 py-2 text-xl">
            <FcSms size={24}/>
              <span>Messages</span>
            </div>
          </ListboxItem>

          <ListboxItem key="notifications"  textValue="Notifications" className="hover:bg-gray-700 w-[65%] items-center ml-10 rounded-lg transition-colors">
            <div className="flex items-center gap-4 px-3 py-2 text-xl">
            <FcAdvertising size={24} />

              <span>Notifications</span>
            </div>
          </ListboxItem>

          <ListboxItem key="create" textValue="Create" className="hover:bg-gray-700 w-[65%] items-center ml-10 rounded-lg transition-colors">
          <div className="flex items-center gap-4 px-3 py-2 text-xl">
              {/* <CiSquarePlus size={24} />
              <span>Create</span> */}
             <CreatePost  text="Create" icon={<CiSquarePlus size={24} />}/>

            </div>
          </ListboxItem>

          <ListboxItem key="profile" textValue="Profile" className="hover:bg-gray-700 w-[65%] items-center ml-10 rounded-lg transition-colors">
            <div className="flex items-center gap-4 px-3 py-2 text-xl">
              <FcVoicePresentation size={24} />
              <span>Profile</span>
            </div>
          </ListboxItem>
        </Listbox>
      </div>
    </div>
  );
};

export default LeftSideBar;
