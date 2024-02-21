import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const WatchPage = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="bg-black pb-5 pt-20 md:pt-24">
      <div className="w-fit m-auto">
        <iframe
          className="w-screen md:w-[1200px] h-fit md:h-[500px] border shodow-lg border-gray-500 aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?&autoplay=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default WatchPage;
