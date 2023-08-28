import { fetchData } from "./TmdbAPIUtils";

const API_KEY = process.env.API_KEY;

export async function getShowsByType(type, page = 1) {
  if (type === "fetchTrending") {
    return getTrendingShows(page);
  } else if (type === "fetchTopRated") {
    return getTopRatedShows(page);
  } else if (type === "fetchAiringToday" || type === "fetchNowPlaying") {
    return getAiringTodayShows(page);
  } else {
    throw new Error("Invalid show type");
  }
}

export async function getTvShowDetails(showId) {
  const endpoint = `https://api.themoviedb.org/3/tv/${showId}?api_key=${API_KEY}&language=en-US`;
  return fetchData(endpoint);
}

async function getTrendingShows(page = 1) {
  const endpoint = `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}&language=en-US&page=${page}`;
  return fetchData(endpoint);
}

async function getTopRatedShows(page = 1) {
  const endpoint = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`;
  return fetchData(endpoint);
}

async function getAiringTodayShows(page = 1) {
  const endpoint = `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=${page}`;
  return fetchData(endpoint);
}
