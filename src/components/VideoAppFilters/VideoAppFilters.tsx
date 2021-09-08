import React from 'react'
import styles from './VideoAppFilters.module.css';
import VideoAppTitleFilter from './VideoAppTitleFilter/VideoAppTitleFilter';
import VideoAppVideosNoFilter from './VideoAppSelectTags/VideoAppVideosNoFilter/VideoAppVideosNoFilter';
import VideoAppVideoTimeFilter from './VideoAppSelectTags/VideoAppVideoTimeFilter/VideoAppVideoTimeFilter';

const VideoAppFilters = () => {
  return (
    <div className={styles['filters-container']}>
      <VideoAppTitleFilter placeholder='Video Title' />
      <VideoAppVideosNoFilter label='Number of Videos to play' />
      <VideoAppVideoTimeFilter label='Each video plays for up to' />
    </div>
  );
}

export default VideoAppFilters
