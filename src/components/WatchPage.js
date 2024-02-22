import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get("v");
  console.log(movieId);
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className="bg-black pb-5 pt-20 md:pt-24">
      <div className="w-fit m-auto">
        <iframe
          className="w-screen md:w-[1200px] h-fit md:h-[500px] border shodow-lg border-gray-500 aspect-video"
          src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default WatchPage;
