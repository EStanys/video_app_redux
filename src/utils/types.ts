export interface IVideoReducer {
  videos: any[];
  currentVideoIndex: number;
  currentVideoUrl: string;
  poster: string;
  numOfVideosToPlay: number;
  videoDuration: number;
}

export interface IFetchResponse {
  videos: any[];
  total_results: number;
}

export interface IDIspatch {
      payload?: IFetchResponse | number
      type: string;
    }

// Player onProgress playedSeconds attribute
export interface IVidDurationProps {
  playedSeconds: number;
}