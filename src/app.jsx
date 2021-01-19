import styles from "./app.module.css";
import VideoList from "./component/video_list/videoList";
import VideoDetail from "./component/video_detail/videoDetail";
import Navbar from "./component/navbar/navbar";
import React, { useCallback, useEffect, useState } from "react";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = useCallback((video) => {
    setSelectedVideo(video);
  }, []);

  useEffect(() => {
    youtube
      .getPopularVideo() //
      .then((response) => [...response.data.items])
      .then((videos) => setVideos(videos));
  }, [youtube]);

  const search = useCallback(
    (query) => {
      youtube
        .videoSearch(query) //
        .then((response) => [...response.data.items])
        .then((videos) => {
          setVideos(videos);
          selectVideo(null);
        });
    },
    [youtube, selectVideo]
  );

  return (
    <div className={styles.app}>
      <Navbar onSearch={search}></Navbar>
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo}></VideoDetail>
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          ></VideoList>
        </div>
      </section>
    </div>
  );
}

export default App;
