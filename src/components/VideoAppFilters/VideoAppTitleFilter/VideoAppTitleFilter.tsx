import React from 'react'
import styles from './VideoAppTitleFilter.module.css';

const VideoAppTitleFilter: React.FC<{ label?: string; placeholder: string }> = ({ label, placeholder }) => {
  return (
    <div>
      <form onSubmit={() => {}}>
        <div className={styles['video-filter-input-container']}>
          <label htmlFor='{id}'>{label}</label>
          <input type='text' id='{id}' onChange={() => {}} placeholder={placeholder} value='{value}' />
        </div>
      </form>
    </div>
  );
};

export default VideoAppTitleFilter
