import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
<<<<<<< HEAD
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
=======
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;
>>>>>>> 401972057bad319c0137ae439f007d2983ba2daf
