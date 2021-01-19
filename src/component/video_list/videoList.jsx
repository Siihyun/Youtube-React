import React, { memo } from "react";
import VideoItem from "../video_item/videoItem";
import styles from "./video_list.module.css";

const VideoList = memo(({ videos, onVideoClick, display }) => (
  <ul className={styles.videoList}>
    {videos.map((video) => (
      <VideoItem
        onVideoClick={onVideoClick}
        video={video}
        key={video.id.videoId || video.id}
        display={display}
      ></VideoItem>
    ))}
  </ul>
));

export default VideoList;
