import { useRef, useState, useEffect } from "react";
import { Card } from "@nextui-org/react";
import { IoMdPause } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { Slider } from "@nextui-org/react";
import { CiHeart } from "react-icons/ci";
import { GoComment } from "react-icons/go";
import { allVideos } from "@/api/user";
import { PostTypes } from "@/services/interface/post";


const videos = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/movie.mp4",
    // Add more video URLs as needed
];

const Reels = () => {
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [reelsData, setReelData] = useState<PostTypes[]>([])

    // Function to toggle play and pause
    const togglePlayPause = () => {
        const currentVideo = videoRefs.current[currentVideoIndex];
        if (currentVideo) {
            if (isPlaying) {
                currentVideo.pause();
            } else {
                currentVideo.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Update progress as video plays
    const handleTimeUpdate = (index: number) => {
        const video = videoRefs.current[index];
        if (video) {
            const currentTime = video.currentTime;
            const duration = video.duration;
            setProgress((currentTime / duration) * 100);
        }
    };

    const handleSeek = (value: number | number[]) => {
        const newValue = Array.isArray(value) ? value[0] : value;
        const currentVideo = videoRefs.current[currentVideoIndex];
        if (currentVideo) {
            currentVideo.currentTime = (newValue / 100) * currentVideo.duration;
            setProgress(newValue);
        }
    };

    const handleLoadedMetadata = (index: number) => {
        const video = videoRefs.current[index];
        if (video) {
            setProgress(0);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = Number(entry.target.getAttribute("data-index"));
                    const video = videoRefs.current[index];
    
                    videoRefs.current.forEach((v, i) => {
                        if (v && i !== index) {
                            v.pause();
                        }
                    });
    
                    if (entry.isIntersecting) {
                        setCurrentVideoIndex(index);
                        setIsPlaying(true);
                        if (video) {
                            video.currentTime = 0;
                            video.play();
                        }
                    } else {
                        video?.pause(); 
                    }
                });
            },
            {
                threshold: 0.75, 
            }
        );
    
        videoRefs.current.forEach((video, index) => {
            if (video) {
                observer.observe(video);
            }
        });
    
        const handleVisibilityChange = () => {
            if (document.hidden) {
                videoRefs.current.forEach((video) => {
                    if (video) {
                        video.pause();  
                    }
                });
            }
        };
    
        document.addEventListener("visibilitychange", handleVisibilityChange);
    
        return () => {
            videoRefs.current.forEach((video) => {
                if (video) observer.unobserve(video);
            });
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);
    
    

    const fetchReels = async()=>{
        try{
            const response = await allVideos()
            setReelData(response.data)
            console.log('llllllllllllllll',response.data);
            

        }catch(error){
            console.log(error);
            
        }
    }

    useEffect(()=>{
        fetchReels()
    },[])
console.log('rrrrr',reelsData);

    return (
        <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory overflow-hidden scrollbar-hide">
            {reelsData && reelsData.map((videoSrc, index) => (
                <Card
                    key={index}
                    className="h-screen w-[60%] mx-auto bg-black mt-20 mb-20 relative overflow-hidden snap-center scrollbar-hide"
                >
                    <div className="w-full h-screen">
                        <video
                            ref={(el) => (videoRefs.current[index] = el)}
                            className="w-full h-full object-contain"
                            src={videoSrc.video && videoSrc.video[0]}
                            onTimeUpdate={() => handleTimeUpdate(index)}
                            onLoadedMetadata={() => handleLoadedMetadata(index)}
                            data-index={index}
                            controls={false} 
                            muted={false}
                            autoPlay
                        ></video>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <button
                                onClick={togglePlayPause}
                                className="text-white px-4 py-2 rounded opacity-75 hover:opacity-100 transition"
                            >
                                {isPlaying ? <IoMdPause size={20} /> : <FaPlay size={20} />}
                            </button>
                        </div>
                        <div className="absolute right-4 flex flex-col items-center space-y-4 top-1/2 transform -translate-y-1/2">
                            <CiHeart size={36} className=" text-white cursor-pointer" />

                            <GoComment size={32} className="text-white  cursor-pointer" />
                        </div>

                        <div className="absolute bottom-0 left-0 w-full bg-opacity-50 bg-black">
                            <Slider
                                color="foreground"
                                step={0.1}
                                maxValue={100}
                                minValue={0}
                                value={progress}
                                onChange={handleSeek}
                                aria-label="Video Progress"
                                className="w-full  pr-3 pl-3 "
                            />
                        </div>  
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default Reels;
