import React, { useState, useEffect } from 'react'
import styles from '../VideoAppSelectTags.module.css';
import { videoPlayTimes } from '../../../../db/videoData';
import { useDispatch } from 'react-redux';
import { changeVideoDuration } from '../../../../state/actions/videoActions';


const VideoAppVideoTimeFilter: React.FC<{ label?: string }> = ({ label }) => {

  const dispatch = useDispatch()

  const [videoDuration, setVideoDuration] = useState(10);

  const videoDurationHandler = (e:React.ChangeEvent<HTMLSelectElement>): void => {
    setVideoDuration(+e.target.value)
  }

  useEffect(() => {

    dispatch(changeVideoDuration(videoDuration));
    }
  , [videoDuration, dispatch])

  return (
    <div>
      <div className={styles['filter-select-tag-container']}>
        <label htmlFor='{id}'>{label}</label>
        <select id='{id}' onChange={videoDurationHandler} value={videoDuration}>
          {videoPlayTimes.map((option) => (
            <option key={option.value} value={option.value}>
              {option.selection}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default VideoAppVideoTimeFilter
