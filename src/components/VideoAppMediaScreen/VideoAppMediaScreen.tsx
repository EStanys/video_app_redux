import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomVideos, playNextVideo } from '../../state/actions/videoActions';
import styles from './VideoAppMediaScreen.module.css';
import { State } from '../../state/store'
import { IVideoReducer } from '../../utils/types';

const VideoAppMediaScreen: React.FC = () => {
  const { videos, currentVideoUrl } = useSelector<State, IVideoReducer>(
    (state) => state.randomVideos
  );

  const dispath = useDispatch();

  useEffect(() => {
    dispath(fetchRandomVideos());
  }, [dispath]);

  const videoEndHandler = () => {
    videos.length > 1 && dispath(playNextVideo());
  }

  
  return (
    <>
      <div className={styles['video-container']}>
        <video src={currentVideoUrl} autoPlay={true} muted={true} controls onEnded={videoEndHandler}/>
      </div>
    </>
  );
}

export default VideoAppMediaScreen
