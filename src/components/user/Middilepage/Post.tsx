import { useEffect, useState } from 'react';
import { Avatar } from '@nextui-org/react';
import { FcApproval, FcLike, FcComments } from 'react-icons/fc';
import Carousels from '../Carousel';
import {  postData } from '@/api/user';
import { PostTypes } from '@/services/interface/post';
import { convertToDateOnly } from '@/services/functions';
import Comment from './Comment';

const Post = () => {

  const [postedData, setPostData] = useState<PostTypes[]>([])
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [allPostsSeen, setAllPostsSeen] = useState<boolean>(false);


  const fetchPostData = async () => {
    try {
      const response = await postData();
      setPostData(response.data);
    } catch (error) {
      console.error('error', error);
    }
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

 

  useEffect(() => {
    const handleScroll = (event: any) => {
      const element = event.target;
      if (element.scrollHeight - element.scrollTop === element.clientHeight) {
        if (postedData.length > 0 && postedData.length < 10) {
          setAllPostsSeen(true);
        } else {
          setAllPostsSeen(false);
        }
      }
    };

    const postContainer = document.getElementById('post-container');
    postContainer?.addEventListener('scroll', handleScroll);

    return () => {
      postContainer?.removeEventListener('scroll', handleScroll);
    };
  }, [postedData]);

  return (
    <div className='h-screen flex justify-center'>
      <div id="post-container" className='border border-2 rounded-xl border-gray-500 w-[50%] h-[80vh] overflow-y-auto p-4 scrollbar-hide mb-10'>
        {postedData && postedData.length > 0 ? (
          postedData.map((post, indx) => (
            <div key={indx} className='mb-4 border-b border-gray-600 pb-4'>
              <div className='flex items-center'>
                <Avatar isBordered color="success" className='w-10 h-10' src={post.userId?.profilePicture} />
                <div className='ml-4'>
                  <div className='flex items-center'>
                    <p className='text-white text-lg font-semibold'>{post.userId?.name}</p>
                    <FcApproval className='ml-2' />
                  </div>
                  <p className='text-gray-400 text-sm'>{convertToDateOnly(post?.createdAt)}</p>
                </div>
              </div>
              <div className='mt-2 flex justify-center'>
                <Carousels images={post.image} videos={post.video} />
              </div>
              <div className='flex mt-2'>
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
               
                <Comment postId={post._id} />
              </div>
            </div>
          ))
        ) : (
          <div><span className="text-white">no post found</span></div>
        )}
        {allPostsSeen && (
          <div className='text-center text-white mt-4'>
            You have seen all the posts
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
