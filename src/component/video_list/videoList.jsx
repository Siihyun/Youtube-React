import React from "react";
import VideoItem from "../video_item/videoItem";
import styles from "./video_list.module.css";

const VideoList = ({ videos }) => (
  <ul className={styles.videoList}>
    {videos.map((video) => (
      <VideoItem video={video} key={video.id.videoId || video.id}></VideoItem>
    ))}
  </ul>
);

export default VideoList;
