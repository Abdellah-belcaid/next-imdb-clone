import { fetchData } from "./TmdbAPIUtils";

const API_KEY = process.env.API_KEY;
export async function getMoviesByType(type, page = 1) {
  switch (type) {
    case "trending":
      return getTrendingMovies(page);
    case "top_rated":
      return getTopRatedMovies(page);
    case "now_playing":
      return getNowPlayingMovies(page);
    case "popular":
      return getPopularMovies(page);
    default:
      throw new Error("Invalid movie type");
  }
}

export async function getMovieDetails(movieId) {
  const endpoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  return fetchData(endpoint);
}

async function getTrendingMovies(page = 1) {
  const endpoint = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-US&page=${page}`;
  return fetchData(endpoint);
}
export async function getPopularMovies(page = 1) {
  const endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
  return fetchData(endpoint);
}

async function getTopRatedMovies(page = 1) {
  const endpoint = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=${page}`;
  return fetchData(endpoint);
}

async function getNowPlayingMovies(page = 1) {
  const endpoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=${page}`;
  return fetchData(endpoint);
}
