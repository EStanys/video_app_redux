import { PayloadAction } from '@reduxjs/toolkit';
import {
  VIDEO_RANDOM_VID_REQUEST,
  VIDEO_RANDOM_VID_SUCCESS,
  VIDEO_RANDOM_VID_EMPTY,
  VIDEO_RANDOM_VID_FAIL,
  VIDEO_PLAY_NEXT_VIDEO,
  VIDEO_SEARCHED_VID_REQUEST,
  VIDEO_SEARCHED_VID_SUCCESS,
  VIDEO_SEARCHED_VID_EMPTY,
  VIDEO_SEARCHED_VID_FAIL,
} from '../../constants/videoConstants';
import { IFetchResponse, IVideoReducer } from '../../utils/types';

export const randomVideoReducer = (
  state: IVideoReducer = {
    videos: [],
    currentVideoIndex: 0,
    currentVideoUrl: '',
    poster: ''
  },
  action: PayloadAction<IFetchResponse>
) => {
  
  const getFetchedVideoArr = ():any[] => {
    return action.payload?.videos;
  }

  const getCurrentVideoUrl = (index: number, fetchedArr: any[]): string => {

    const currVidUrl =
      fetchedArr.length !== 0 && index < fetchedArr.length
        ? fetchedArr[index].video_files[2].link
        : fetchedArr[0].video_files[2].link;
        
    return currVidUrl;
  };

  const getPoster = (index: number, fetchedArr: any[]) => {
    const poster = fetchedArr.length !== 0 && index < fetchedArr.length ? fetchedArr[index].image : fetchedArr[0].image;
    return poster;
  };

  const indexHandler = (index: number, fetchedArr: any[]) => fetchedArr.length - 1 !== index ? ++index : 0;
     
  switch (action.type) {
    case VIDEO_RANDOM_VID_REQUEST:
      return { ...state };
    case VIDEO_RANDOM_VID_SUCCESS:
      return {
        videos: getFetchedVideoArr(),
        currentVideoIndex: 0,
        currentVideoUrl: getCurrentVideoUrl(state.currentVideoIndex, getFetchedVideoArr()),
        poster: getPoster(state.currentVideoIndex, getFetchedVideoArr()),
      };
    case VIDEO_RANDOM_VID_EMPTY:
      return '';
    case VIDEO_RANDOM_VID_FAIL:
      return '';
  };

  if (action.type === VIDEO_PLAY_NEXT_VIDEO) {
    return {
      ...state,
      currentVideoIndex: indexHandler(state.currentVideoIndex, state.videos),
      currentVideoUrl: getCurrentVideoUrl(++state.currentVideoIndex, state.videos),
      poster: getPoster(state.currentVideoIndex, state.videos),
    };
  }

    switch (action.type) {
      case VIDEO_SEARCHED_VID_REQUEST:
        return { ...state };
      case VIDEO_SEARCHED_VID_SUCCESS:
        return {
          videos: getFetchedVideoArr(),
          currentVideoIndex: 0,
          currentVideoUrl: getCurrentVideoUrl(state.currentVideoIndex, getFetchedVideoArr()),
          poster: getPoster(state.currentVideoIndex, getFetchedVideoArr()),
         
        };
      case VIDEO_SEARCHED_VID_EMPTY:
        return '';
      case VIDEO_SEARCHED_VID_FAIL:
        return '';
      default:
        return state;
    }

  
};

