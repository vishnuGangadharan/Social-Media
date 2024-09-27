import React, { useState } from 'react'
import Picker from 'emoji-picker-react';
import { BsEmojiSmile } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import { postComment } from '@/api/user';
import { commentTypes } from '@/services/interface/post';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface commentProps {
    postId: string | undefined;
}

const Comment: React.FC<commentProps> = ({ postId }) => {

    const [comment, setComment] = useState<string>('')
    const [icon, showIcon] = useState<boolean>(false);
    const { userInfo } = useSelector((state: RootState) => state.auth);

    const addComment = async (postId: string) => {
        
        try {
          let data = {
            comment,
            postId,
            userId: userInfo._id
          };
          const response = await postComment(data as commentTypes);
          setComment('');
          showIcon(false);
        } catch (error) {
          console.error(error);
        }
      };


  const showEmojiPicker = () => {
    showIcon(!icon);
  };

  const onEmojiClick = (emojiObject: any) => {
    setComment(prevComment => prevComment + emojiObject.emoji);
  };


  return (
    <div className='relative mt-3 w-full pr-4'>
    <div  onClick={showEmojiPicker} className='text-white absolute left-3 top-1/2 mt-1.5 transform -translate-y-1/2 cursor-pointer z-10'>😊</div> 
    {icon && (
      <div className="absolute bottom-12 left-0 z-20">
        <Picker onEmojiClick={onEmojiClick} />
      </div>
    )}
    <input value={comment} type="text" className='mt-3 pl-8 text-white w-full bg-transparent rounded-xl border-2 border-gray-500 focus:outline-none p-2 text-sm' placeholder='Write a comment...' onChange={(e) => setComment(e.target.value)} />
    <IoMdSend onClick={() => postId && addComment(postId)} className='text-white cursor-pointer absolute right-5 top-4 mt-3.5 mr-2 transform -translate-y-1/2' size={24}/>
  </div>
  )
}

export default Comment
