import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
<<<<<<< HEAD
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
=======
    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
    });
    
    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    );
};

export default VideoList;
>>>>>>> 401972057bad319c0137ae439f007d2983ba2daf
