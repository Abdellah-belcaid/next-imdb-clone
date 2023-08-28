import { fetchData } from "./TmdbAPIUtils";

const API_KEY = process.env.API_KEY;

export async function getMoviesByType(type, page = 1) {
  if (type === "fetchTrending") {
    return getTrendingMovies(page);
  } else if (type === "fetchTopRated") {
    return getTopRatedMovies(page);
  } else if (type === "fetchNowPlaying") {
    return getNowPlayingMovies(page);
  } else {
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

async function getTopRatedMovies(page = 1) {
  const endpoint = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=${page}`;
  return fetchData(endpoint);
}

async function getNowPlayingMovies(page = 1) {
  const endpoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=${page}`;
  return fetchData(endpoint);
}
