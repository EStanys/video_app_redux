import React from 'react'
import styles from './VideoAppMediaScreen.module.css';

const VideoAppMediaScreen: React.FC = () => {
  return (
    <div className={styles['video-container']}>
      <video>
        <source src='' type='video/mp4' />
      </video>
    </div>
  );
}

export default VideoAppMediaScreen
