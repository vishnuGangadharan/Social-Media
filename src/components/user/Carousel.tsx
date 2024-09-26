import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselsProps {
  images: string[] | undefined;  
  videos: string[] | undefined; 
}

const Carousels: React.FC<CarouselsProps> = ({ images, videos }) => {
  return (
    <Carousel>
      <CarouselContent>
        {/* Render Images */}
        {images && images.map((img, indx) => (
          <CarouselItem key={`image-${indx}`}>
            <img
              className="max-w-full h-auto rounded-md w-full flex justify-center items-center"
              src={img}
              alt={`image-${indx}`}
            />
          </CarouselItem>
        ))}

        {videos && videos.map((video, indx) => (
          <CarouselItem key={`video-${indx}`}>
            <video
              className="max-w-full h-auto rounded-md w-full flex justify-center items-center"
              // controls
              autoPlay 
              loop
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10" />
      <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10" />
    </Carousel>
  );
};

export default Carousels;
