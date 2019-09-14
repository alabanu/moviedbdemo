export interface Movie {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    vote_count: number;
    vote_average: number;
    poster_path: string;
    backdrop_path: string;
    original_language: string;
    original_title: string;
    revenue: number;
    budget?: number;
    spoken_languages?: {
        iso_639_1: string;
        name: string;
    }[];
}