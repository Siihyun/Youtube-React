import React from "react";
import VideoItem from "../video_item/videoItem";

const VideoList = ({ videos }) => (
  <ul>
    {videos.map((video) => (
      <VideoItem video={video} key={video.id}></VideoItem>
    ))}
  </ul>
);

export default VideoList;
