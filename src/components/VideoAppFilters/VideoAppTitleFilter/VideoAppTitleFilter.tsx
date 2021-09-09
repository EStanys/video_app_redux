import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styles from './VideoAppTitleFilter.module.css';
import { fetchSearchedVideos } from '../../../state/actions/videoActions';

const VideoAppTitleFilter: React.FC<{ label?: string; placeholder: string }> = ({ label, placeholder }) => {
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useDispatch();

  const searchValueHandler = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setSearchValue(e.target.value)
  }

  const searchByTitleHandler = (e: React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault()
    dispatch(fetchSearchedVideos(searchValue));
  };


  return (
    <div className={styles['filter-input-container']}>
      <form onSubmit={searchByTitleHandler}>
        <div className={styles['video-filter-input-container']}>
          <label htmlFor='{id}'>{label}</label>
          <input type='text' id='{id}' onChange={searchValueHandler} placeholder={placeholder} value={searchValue} />
        </div>
      </form>
    </div>
  );
};

export default VideoAppTitleFilter
