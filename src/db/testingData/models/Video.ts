interface IVideosObj {
  width: number;
  height: number;
  image: string;
  user: {
    name: string;
  };
  video_files: [
    {
      link: string;
    },
    {
      link: string;
    },
    {
      link: string;
    }
  ];
}

export interface IVideo {
  total_results: number;
  videos: IVideosObj[];
}
