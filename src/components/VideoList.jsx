import React from "react";
import VideoItem from "./VideoItem";
const VideoList = ({ videos, onVideoSelect }) => {
  const videoItemList = videos.map(video => (
    <VideoItem
      key={video.id.videoId}
      video={video}
      onVideoSelect={onVideoSelect}
    />
  ));

  return <div className="ui relaxed divided list">{videoItemList}</div>;
};

export default VideoList;
