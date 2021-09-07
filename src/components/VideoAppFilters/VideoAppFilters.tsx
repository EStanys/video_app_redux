import React from 'react'
import styles from './VideoAppFilters.module.css';
import VideoAppTitleFilter from './VideoAppTitleFilter/VideoAppTitleFilter';
import VideoAppVideosNoFilter from './VideoAppVideosNoFilter/VideoAppVideosNoFilter';
import VideoAppVideoTimeFilter from './VideoAppVideoTimeFilter/VideoAppVideoTimeFilter';

const VideoAppFilters = () => {
  return (
    <div className={styles.container}>
      <VideoAppTitleFilter placeholder='Video Title' />
      <VideoAppVideosNoFilter label='Number of Videos to play' />
      <VideoAppVideoTimeFilter label='Each video plays for up to' />
    </div>
  );
}

export default VideoAppFilters
