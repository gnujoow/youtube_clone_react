import React from 'react';

const VideoListItem = ({video}) => {
  // {video}는 const video = props.video 와 같다.
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" />
        </div>

        <div className="media-body">
          <div className="media-heading"></div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
