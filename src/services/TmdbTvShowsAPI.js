import { fetchData } from "./TmdbAPIUtils";

const API_KEY = process.env.API_KEY;
export async function getShowsByType(type, page = 1) {
  switch (type) {
    case "trending":
      return getTrendingTVShows(page);
    case "top_rated":
      return getTopRatedTVShows(page);
    case "airing_today":
    case "now_playing":
      return getAiringTodayTVShows(page);
    case "popular":
      return getPopularTVShows(page);
    default:
      throw new Error("Invalid show type");
  }
}

export async function getTvShowDetails(showId) {
  const endpoint = `https://api.themoviedb.org/3/tv/${showId}?api_key=${API_KEY}&language=en-US`;
  return fetchData(endpoint);
}

export async function getPopularTVShows(page = 1) {
  const endpoint = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
  return fetchData(endpoint);
}

async function getTrendingTVShows(page = 1) {
  const endpoint = `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}&language=en-US&page=${page}`;
  return fetchData(endpoint);
}

async function getTopRatedTVShows(page = 1) {
  const endpoint = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`;
  return fetchData(endpoint);
}

async function getAiringTodayTVShows(page = 1) {
  const endpoint = `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=${page}`;
  return fetchData(endpoint);
}
