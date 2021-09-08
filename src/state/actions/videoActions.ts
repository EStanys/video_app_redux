import axios, { AxiosResponse } from 'axios';
import { VIDEO_RANDOM_VID_REQUEST, VIDEO_RANDOM_VID_SUCCESS, VIDEO_RANDOM_VID_EMPTY, VIDEO_RANDOM_VID_FAIL, VIDEO_PLAY_NEXT_VIDEO } from '../../constants/videoConstants';
import { Dispatch } from 'redux';
import { IDIspatch, IFetchResponse } from '../../utils/types';

const authKey = process.env.REACT_APP_AUTH_KEY;

export const fetchRandomVideos =
  () =>
  async (dispatch: Dispatch<IDIspatch>): Promise<void> => {
    try {

      dispatch({ type: VIDEO_RANDOM_VID_REQUEST, dispatch: null });

      const result: AxiosResponse = await axios.get('https://api.pexels.com/videos/popular?per_page=4', {
        headers: {
          Authorization: authKey,
        },
      });

      const fetchedData: IFetchResponse = result.data;

      if (fetchedData.total_results > 0) dispatch({ type: VIDEO_RANDOM_VID_SUCCESS, payload: fetchedData });
      if (fetchedData.total_results === 0) dispatch({ type: VIDEO_RANDOM_VID_EMPTY, payload: fetchedData });
    } catch (error: any) {
      dispatch({ type: VIDEO_RANDOM_VID_FAIL, payload: error });
    }
  };

  export const playNextVideo = () => (dispatch: Dispatch<IDIspatch>):void => {
    dispatch({ type: VIDEO_PLAY_NEXT_VIDEO });
  };


