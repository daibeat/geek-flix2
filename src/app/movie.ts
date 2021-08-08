

export interface Movie {
  id: number;
  original_title: string;
  title: string;
  tagline: string;
  overview: string;
  genres: string;
  poster_path: string;
  runtime: number;
  vote_average: number;
}

export interface PagedResults {
  page: number;
  results: MovieV2[];
  total_pages: number;
  total_results: number;
}

export interface MovieV2 {
  adult: boolean;
  backdrop_path?: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}