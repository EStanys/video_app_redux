export interface IVideoReducer {
  videos: any[];
  currentVideoIndex: number;
  currentVideoUrl: string;
  poster: string;
}

export interface IFetchResponse {
  videos: any[];
  total_results: number;
}

export interface IDIspatch {
      payload?: IFetchResponse;
      type: string;
    }

// Player onProgress playedSeconds attribute
export interface IVidDurationProps {
  playedSeconds: number;
}