interface PersonListModel {
  adult: boolean;
  gender: number;
  id: number;
  known_for: {
    adult: boolean;
    genre_ids: number[];
    id: number;
    media_type: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string | null;
}

export default PersonListModel;
