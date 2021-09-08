import VideoAppFilters from '../../components/VideoAppFilters/VideoAppFilters';
import VideoAppHeader from '../../components/VideoAppHeader/VideoAppHeader';
import styles from './VideoApp.module.css';
import VideoAppMediaScreen from '../../components/VideoAppMediaScreen/VideoAppMediaScreen';

const VideoApp = () => {
  return (
    <div className={styles.container}>
      <VideoAppHeader title={'VideoApp'} />
      <div className={styles['main-grid-container']}>
        <VideoAppFilters />
        <VideoAppMediaScreen />
      </div>
    </div>
  );
}

export default VideoApp
