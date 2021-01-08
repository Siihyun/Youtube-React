import "./app.css";
import VideoList from "./component/video_list/videoList";
import axios from "axios";
import React, { useEffect, useState } from "react";
function App() {
  const url =
    "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBz0OPKsnb9XzSoJ0HJXrotlHndFYydGXo&part=snippet&chart=mostPopular&maxResults=25";
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideoList = async () => {
      try {
        const response = await axios.get(url);
        setVideos((videos) => [...response.data.items]);
      } catch (error) {
        console.error(error);
      }
    };
    getVideoList();
  }, []);

  return <VideoList videos={videos}></VideoList>;
}

export default App;
