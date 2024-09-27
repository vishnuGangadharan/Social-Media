import React from 'react';
import { Listbox, ListboxItem } from "@nextui-org/react";
import { CiSquarePlus } from "react-icons/ci";
import { FcFilmReel, FcSearch, FcSms, FcAdvertising, FcHome, FcVoicePresentation, FcGlobe } from "react-icons/fc";
import CreatePost from './CreatePost';

const LeftSideBar = () => {
  return (
    <div className="flex flex-col h-full items-center gap-4 bg-black/85 text-white w-[25%]">
      <div className="flex w-full items-center justify-center mt-28">
        <Listbox aria-label="Listbox Variants" className="w-full">
          <ListboxItem key="home" className="hover:bg-gray-700 w-[80%] items-center mx-auto rounded-lg transition-colors">
            <div className="flex items-center gap-4 px-3 py-2 text-xl">
              <FcHome size={24} />
              <span>Home</span>
            </div>
          </ListboxItem>

          <ListboxItem key="search" className="hover:bg-gray-700 w-[80%] items-center mx-auto rounded-lg transition-colors">
            <div className="flex items-center gap-4 px-3 py-2 text-xl">
              <FcSearch size={24} />
              <span>Search</span>
            </div>
          </ListboxItem>

          <ListboxItem key="explore" className="hover:bg-gray-700 w-[80%] items-center mx-auto rounded-lg transition-colors">
            <div className="flex items-center gap-4 px-3 py-2 text-xl">
              <FcGlobe size={24} />
              <span>Explore</span>
            </div>
          </ListboxItem>

          <ListboxItem key="reels" className="hover:bg-gray-700 w-[80%] items-center mx-auto rounded-lg transition-colors">
            <div className="flex items-center gap-4 px-3 py-2 text-xl">
              <FcFilmReel size={24} />
              <span>Reels</span>
            </div>
          </ListboxItem>

          <ListboxItem key="messages" className="hover:bg-gray-700 w-[80%] items-center mx-auto rounded-lg transition-colors">
            <div className="flex items-center gap-4 px-3 py-2 text-xl">
              <FcSms size={24}/>
              <span>Messages</span>
            </div>
          </ListboxItem>

          <ListboxItem key="notifications" className="hover:bg-gray-700 w-[80%] items-center mx-auto rounded-lg transition-colors">
            <div className="flex items-center gap-4 px-3 py-2 text-xl">
              <FcAdvertising size={24} />
              <span>Notifications</span>
            </div>
          </ListboxItem>

          <ListboxItem key="create" className="hover:bg-gray-700 w-[80%] items-center mx-auto rounded-lg transition-colors">
            <div className="flex items-center gap-4 px-3 py-2 text-xl">
              <CreatePost text="Create" icon={<CiSquarePlus size={24} />} />
            </div>
          </ListboxItem>

          <ListboxItem key="profile" className="hover:bg-gray-700 w-[80%] items-center mx-auto rounded-lg transition-colors">
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
