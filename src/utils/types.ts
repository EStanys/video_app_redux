export interface IVideoReducer {
  videos: any[];
  currentVideoIndex: number;
  currentVideoUrl: string;
}

export interface IFetchResponse {
  videos: any[];
  total_results: number;
}

export interface IDIspatch {
      payload?: IFetchResponse;
      type: string;
    }