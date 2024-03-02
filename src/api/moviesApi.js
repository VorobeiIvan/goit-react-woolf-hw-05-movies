import axios from 'axios';

const API_KEY = 'a41b0bf43de0436a2e6cf714302bb167';
const BASE_URL = 'https://api.themoviedb.org/3';

const ENDPOINTS = {
  BEST_MOVIES: '/trending/all/day',
  SEARCH_MOVIES: '/search/movie',
  MOVIE_DETAILS: '/movie',
  MOVIE_CREDITS: '/credits',
  MOVIE_REVIEWS: '/reviews',
};

export function getBestMoviesApi() {
  return axios.get(`${BASE_URL}${ENDPOINTS.BEST_MOVIES}?api_key=${API_KEY}`);
}

export function getSearchMoviesApi(searchQuery) {
  return axios.get(
    `${BASE_URL}${ENDPOINTS.SEARCH_MOVIES}?api_key=${API_KEY}&query=${searchQuery}`
  );
}

export function getMovieDetailsApi(movieId) {
  return axios.get(
    `${BASE_URL}${ENDPOINTS.MOVIE_DETAILS}/${movieId}?api_key=${API_KEY}&language=en-US`
  );
}

export function getMovieCreditsApi(movieId) {
  return axios.get(
    `${BASE_URL}${ENDPOINTS.MOVIE_DETAILS}/${movieId}${ENDPOINTS.MOVIE_CREDITS}?api_key=${API_KEY}&language=en-US`
  );
}

export function getMovieReviewsApi(movieId) {
  return axios.get(
    `${BASE_URL}${ENDPOINTS.MOVIE_DETAILS}/${movieId}${ENDPOINTS.MOVIE_REVIEWS}?api_key=${API_KEY}&language=en-US&page=1`
  );
}
