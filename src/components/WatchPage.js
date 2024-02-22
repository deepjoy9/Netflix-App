import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import useWatchVideo from "../hooks/useWatchVideo";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get("v");
  console.log(movieId);
  useWatchVideo(movieId);
  const watchVideo = useSelector((store) => store.movies?.watchVideo);

  return (
    <div className="w-screen h-screen bg-black">
      <iframe
        className="h-[416px] md:h-[calc(100%-0px)] w-full pt-[118px] md:pt-[70px]"
        src={`https://www.youtube.com/embed/${watchVideo?.key}?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
