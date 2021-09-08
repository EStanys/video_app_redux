import styles from './VideoAppHeader.module.css';
import React from 'react';

const VideoAppHeader: React.FC<{title: string}> = ({ title }) => {
  return (
    <div>
      <h1 className={styles['main-heading']}>{title}</h1>
    </div>
  )
}

export default VideoAppHeader
