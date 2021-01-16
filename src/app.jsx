import styles from "./app.module.css";
import VideoList from "./component/video_list/videoList";
import Navbar from "./component/navbar/navbar";
import axios from "axios";
import React, { useEffect, useState } from "react";
function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const videoSearch = async (url) => {
    try {
      const response = await axios.get(url);
      setVideos((videos) => [...response.data.items]);
    } catch (error) {
      console.error(error);
    }
  };
  const baseUrl = "https://www.googleapis.com/youtube/v3/";
  const key = "key=AIzaSyBz0OPKsnb9XzSoJ0HJXrotlHndFYydGXo&";

  useEffect(() => {
    const url =
      baseUrl +
      "videos?" +
      key +
      "part=snippet&chart=mostPopular&maxResults=25";
    youtube
      .videoSearch(url) //
      .then((videos) => setVideos(videos));
  }, []);

  const search = (query) => {
    const url =
      baseUrl +
      "search?" +
      key +
      `part=snippet&maxResults=25&q=${query}&type=video`;
    // const response = youtube.videoSearch(url);
    // setVideos((videos) => [...response.data.items]);
  };

  return (
    <div className={styles.app}>
      <Navbar onSearch={search}></Navbar>
      <VideoList videos={videos}></VideoList>
    </div>
  );
}

export default App;
