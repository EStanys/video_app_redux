import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomVideos, playNextVideo } from '../../state/actions/videoActions';
import styles from './VideoAppMediaScreen.module.css';
import { State } from '../../state/store'
import { IVideoReducer } from '../../utils/types';


const VideoAppMediaScreen: React.FC = () => {
  const [loop, setLoop] = useState(false)
  const { videos, currentVideoUrl, poster } = useSelector<State, IVideoReducer>((state) => state.randomVideos);

  const dispath = useDispatch();

  const vidRef = useRef(null);

  useEffect(() => {
    dispath(fetchRandomVideos());
  }, [dispath]);

  useEffect(() => {
    videos.length === 1 ? setLoop(true) : setLoop(false);
  }, [videos]); 

  const videoEndHandler = () => {
    videos.length > 1 && dispath(playNextVideo());
  }

  let timer: ReturnType<typeof setTimeout>;

  const playNextVideoHandler = () => {
    
    clearTimeout(timer);

    timer = setTimeout(() => {
      dispath(playNextVideo());
    }, 5500);
  };

  
  
  
    
    
  return (
    <>
      <div className={styles['video-container']}>
        <video
          ref={vidRef}
          src={currentVideoUrl}
          autoPlay={true}
          muted={true}
          controls
          onEnded={videoEndHandler}
          onPlaying={playNextVideoHandler}
          poster={poster}
          loop={loop}
        />
      </div>
    </>
  );
}

export default VideoAppMediaScreen
