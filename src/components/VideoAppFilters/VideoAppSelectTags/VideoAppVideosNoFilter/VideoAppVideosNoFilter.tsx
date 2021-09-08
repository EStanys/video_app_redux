import React from 'react'
import styles from '../VideoAppSelectTags.module.css';

const VideoAppVideosNoFilter: React.FC<{ label?: string }> = ({ label }) => {
  return (
    <div>
      <div className={styles['filter-select-tag-container']}>
        <label htmlFor='{id}'>{label}</label>
        <select id='{id}' onChange={() => {}} value='{value}'>
          {/* {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.selection}
            </option>
          ))} */}
        </select>
      </div>
    </div>
  );
};

export default VideoAppVideosNoFilter