import axios from 'axios';

const API_KEY = 'a41b0bf43de0436a2e6cf714302bb167';
const BASE_URL = 'https://api.themoviedb.org/3';

const ENDPOINTS_BEST_MOVIES = '/trending/all/day'; //список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
const ENDPOINTS_SEARCH_MOVIES = '/search/movie'; //пошук фільму за ключовим словом на сторінці фільмів.
const ENDPOINTS_MOVIE_DETAILS = '/movie'; //запит повної інформації про фільм для сторінки кінофільму.
const ENDPOINTS_MOVIE_CREDITS = '/movie/credits'; //запит інформації про акторський склад для сторінки кінофільму.
const ENDPOINTS_MOVIE_REVIEWS = '/movie/reviews'; //запит оглядів для сторінки кінофільму.

export function getBestMoviesApi() {
  return axios.get(`${BASE_URL}${ENDPOINTS_BEST_MOVIES}?api_key=${API_KEY}`);
}
export function getSearchMoviesApi(searchQuery) {
  return axios.get(
    `${BASE_URL}${ENDPOINTS_SEARCH_MOVIES}?api_key=${API_KEY}&query=${searchQuery}`
  );
}
export function getMovieDetailsApi(movieId) {
  return axios.get(
    `${BASE_URL}${ENDPOINTS_MOVIE_DETAILS}?api_key=${API_KEY}&movie_id=${movieId}`
  );
}
export function getMovieCreditsApi(movieId) {
  return axios.get(
    `${BASE_URL}${ENDPOINTS_MOVIE_CREDITS}?api_key=${API_KEY}&movie_id=${movieId}`
  );
}
export function getMovieReviewsApi(movieId) {
  return axios.get(
    `${BASE_URL}${ENDPOINTS_MOVIE_REVIEWS}?api_key=${API_KEY}&movie_id=${movieId}`
  );
}
