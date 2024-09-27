import React from 'react';
import { Card, CardBody, Image } from "@nextui-org/react";
import { PostTypes } from '@/services/interface/post';

interface postProps {
  post: PostTypes[] | undefined
}

const UserPosts: React.FC<postProps> = ({ post }) => {

  const handleVideoPlay = (event: React.MouseEvent<HTMLVideoElement>) => {
    event.currentTarget.play();
  };

  const handleVideoPause = (event: React.MouseEvent<HTMLVideoElement>) => {
    event.currentTarget.pause();
    event.currentTarget.currentTime = 0;  // Reset video to the start
  };

  return (
    <div className="flex gap-2">
      {post && post.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")} className="overflow-hidden">
          <CardBody className="overflow-hidden p-0">
            {item.image && item.image?.length > 0 ? (
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt="img"
                className="w-28 object-cover h-[140px] transition-transform duration-300 ease-in-out transform hover:scale-105"
                src={item.image[0]} // Show only the first image
              />
            ) : (
             item.video&& item.video?.length > 0 && (
                <video
                  className="w-28 h-[140px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                  src={item.video[0]} // Show only the first video
                  muted
                  onMouseEnter={handleVideoPlay}
                  onMouseLeave={handleVideoPause}
                  loop
                />
              )
            )}
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default UserPosts;
