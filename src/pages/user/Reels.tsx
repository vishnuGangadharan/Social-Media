import { useRef, useState, useEffect } from "react";
import { Card } from "@nextui-org/react";
import { IoMdPause } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { Slider } from "@nextui-org/react";
import { allVideos } from "@/api/user";

const Reels = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // Function to toggle play and pause
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Update progress as video plays
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setProgress((currentTime / duration) * 100);
    }
  };

  const handleSeek = (value: number | number[]) => {
    const newValue = Array.isArray(value) ? value[0] : value; // Handle both number and array
    if (videoRef.current) {
      videoRef.current.currentTime = (newValue / 100) * videoRef.current.duration;
      setProgress(newValue); // Update the progress state to reflect the new position
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("timeupdate", handleTimeUpdate);
      return () => {
        videoRef.current?.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);


  const fetchVideos= async ()=>{
    try {
        const response  = await allVideos()
    } catch (error) {
        console.log(error);
        
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="h-screen w-[60%] bg-white mt-20 mb-20 relative overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          onLoadedMetadata={handleLoadedMetadata}
        ></video>

        {/* Centered Play/Pause Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={togglePlayPause}
            className="text-white px-4 py-2 rounded opacity-75 hover:opacity-100 transition"
          >
            {isPlaying ? <IoMdPause size={20} /> : <FaPlay size={20} />}
          </button>
        </div>

        {/* Progress Bar at the Bottom */}
        <div className="absolute bottom-0 left-0 w-full bg-opacity-50 bg-white">
          <Slider
            color="secondary"
            step={0.1}
            maxValue={100}
            minValue={0}
            value={progress}
            onChange={handleSeek} // Pass the current value to handleSeek
            aria-label="Video Progress"
            className="w-full pr-3 pl-3"
          />
        </div>
      </Card>
    </div>
  );
};

export default Reels;
