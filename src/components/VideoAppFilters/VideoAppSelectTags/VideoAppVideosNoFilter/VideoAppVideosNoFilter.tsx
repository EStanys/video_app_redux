import React, { useState, useEffect } from 'react';
import styles from '../VideoAppSelectTags.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../../../state/store';
import { IVideoReducer } from '../../../../utils/types';
import { changeNumOfVidToPlay } from '../../../../state/actions/videoActions';

const VideoAppVideosNoFilter: React.FC<{ label?: string }> = ({ label }) => {
  
  const { videos } = useSelector<State, IVideoReducer>((state) => state.randomVideos);

  const [selectValue, setSelectValue] = useState(10);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeNumOfVidToPlay(selectValue));
  }, [selectValue, dispatch]);

  const selectValueChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectValue(+e.target.value)
  }

  return (
    <div>
      <div className={styles['filter-select-tag-container']}>
        <label htmlFor='no-of-vid'>{label}</label>
        <select id='no-of-vid' onChange={selectValueChangeHandler} value={selectValue}>
          {videos.map((vid, i) => (
            <option key={i + Math.random()} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default VideoAppVideosNoFilter
