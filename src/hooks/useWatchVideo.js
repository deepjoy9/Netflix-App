import { useEffect } from "react";
import { API_OPTIONS, TRAILER_VIDEO_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addWatchVideo } from "../utils/moviesSlice";

const useWatchVideo = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieVideos();
  }, []);

  const getMovieVideos = async () => {
    const data = await fetch(
      TRAILER_VIDEO_API + movieId + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterdata = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterdata.length ? filterdata[0] : json.results[0];
    dispatch(addWatchVideo(trailer));
  };
};

export default useWatchVideo;
