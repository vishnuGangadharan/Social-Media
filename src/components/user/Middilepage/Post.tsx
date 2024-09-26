import React, { useEffect, useState } from 'react';
import { Avatar, divider } from '@nextui-org/react';
import { FcApproval } from 'react-icons/fc';
import { IoMdSend } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { FcComments } from "react-icons/fc";
import Carousels from '../Carousel';
import { postComment, postData } from '@/api/user';
import { PostTypes, commentTypes } from '@/services/interface/post';
import { convertToDateOnly } from '@/services/functions';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Picker from 'emoji-picker-react';
import { BsEmojiSmile } from "react-icons/bs";


const Post = () => {

    const [postedData, setPostData] = React.useState<PostTypes[]>([])
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [comment, setComment] = useState<string>('')
    const [icon, showIcon] = useState<boolean>(false);

    const { userInfo } = useSelector((state: RootState) => state.auth)

    const fetchPostData = async () => {
        try {
            const response = await postData()
            setPostData(response.data)
            console.log('response', response);
        } catch (error) {
            console.log('error', error);

        }
    }
    useEffect(() => {
        fetchPostData()
    }, [])

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const addComment = async (postId: string) => {
        try {
            let data = {
                comment: comment,
                postId: postId,
                userId: userInfo._id
            }
            const response = await postComment(data as commentTypes)
            setComment('')
            showIcon(false)
            console.log(response);

        } catch (error) {

        }
    }
    const showEmojiPicker = () => {
        showIcon(!icon)
    }

    const onEmojiClick = ( emojiObject: any) => {
        setComment(prevComment => prevComment + emojiObject.emoji);
    };
    

    return (
        <div className='h-screen flex justify-center mt-5 '>
            <div className='border border-2 rounded-xl border-gray-500 w-[60%] h-[80vh] overflow-y-auto p-4 scrollbar-hide mb-10 '> 
                {postedData && postData.length >= 0 ? (
                    postedData.map((post, indx) => (
                        <div key={indx} className='mb-4 border-b border-gray-600 pb-4'>
                            <div className='flex items-center'>
                                <Avatar
                                    isBordered
                                    color="success"
                                    className='w-10 h-10'
                                    src={post.userId?.profilePicture}
                                />
                                <div className='ml-4'>
                                    <div className='flex items-center'>
                                        <p className='text-white text-lg font-semibold'>{post.userId?.name}</p>
                                        <FcApproval className='ml-2' />
                                    </div>
                                    <p className='text-gray-400 text-sm'>{convertToDateOnly(post?.createdAt)}</p>
                                </div>
                            </div>
                            <div className='mt-2 flex justify-center'>
                                <Carousels images={post.image} videos={post.video}/>
                            </div>
                            <div className='flex mt-2  '>
                                <FcLike className='mr-3' size={24} />
                                <FcComments size={24} />
                            </div>
                            <div className='flex flex-col items-start mt-1'>
                                <p className='text-sm text-gray-400'>{post.like?.length} Likes</p>
                                <div className='text-gray-500 text-sm mt-1'>

                                    <p className='mb-1'>{isExpanded ? post.content : `${post.content?.slice(0, 85)}....`}</p>
                                    <p onClick={toggleExpand} className='cursor-pointer text-blue-500'>{isExpanded ? 'show less' : post.content && post.content?.length > 20 ? 'show more' : ''}</p>
                                    <p className='text-xs'>100 comments</p>
                                </div>
                                <div className='relative mt-3 w-full pr-4'>
                                    <BsEmojiSmile
                                        onClick={showEmojiPicker}
                                        className='text-white absolute left-3 top-1/2 mt-1.5 transform -translate-y-1/2 cursor-pointer z-10'
                                    />
                                    {icon && (
                                        <div className="absolute bottom-12 left-0 z-20">
                                            <Picker onEmojiClick={onEmojiClick}/>
                                        </div>
                                    )}
                                    <input
                                        value={comment}
                                        type="text"
                                        className='mt-3 pl-8 text-white shadow appearance-none border rounded-xl w-full py-2 px-4 leading-tight focus:outline-none focus:shadow-outline backdrop-blur-sm bg-white/20 placeholder-white 
                                      hover:bg-white/40 hover:border-blue-500 transition duration-200 ease-in-out text-sm'
                                        placeholder='      Add a comment...'
                                        autoComplete="off"
                                        onChange={(e) => setComment(e.target.value)}
                                    />
                                    <IoMdSend
                                        size={20}
                                        className='absolute right-6  top-1/2 mt-2 transform -translate-y-1/2 cursor-pointer hover:bg-black'
                                        onClick={() => post?._id && addComment(post._id)} />
                                </div>
                            </div>


                        </div>
                    ))
                ) : (<div><span className='text-white'>no post found</span></div>)}
            </div>
        </div>
    );
};

export default Post;
