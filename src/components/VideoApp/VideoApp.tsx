import VideoAppFilters from '../VideoAppFilters/VideoAppFilters';
import VideoAppHeader from '../VideoAppHeader/VideoAppHeader';
import styles from './VideoApp.module.css';
import VideoAppMediaScreen from '../VideoAppMediaScreen/VideoAppMediaScreen';

const VideoApp = () => {
  return (
    <div className={styles.container}>
      <VideoAppHeader title={"VideoApp"}/>
      <VideoAppFilters/>
      <VideoAppMediaScreen/>
    </div>
  )
}

export default VideoApp
