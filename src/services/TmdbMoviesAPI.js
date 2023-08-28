const API_KEY = process.env.API_KEY;

async function fetchData(endpoint) {
  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    throw error;
  }
}

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

export async function searchMovies(query, page = 1) {
  const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${query}&page=${page}`;
  return fetchData(endpoint);
}

export async function getReviews(mediaType, mediaId) {
  const endpoint = `https://api.themoviedb.org/3/${mediaType}/${mediaId}/reviews?api_key=${API_KEY}&language=en-US`;
  const response = await fetchData(endpoint);
  return response.results;
}

export async function getMainActors(mediaType, mediaId) {
  const endpoint = `https://api.themoviedb.org/3/${mediaType}/${mediaId}/credits?api_key=${API_KEY}&language=en-US`;
  const response = await fetchData(endpoint);

  // Filter cast members to get only main actors (e.g., actors with prominent roles)
  const mainActors = response.cast.filter((actor) => actor.order < 10); // You can adjust the order as needed
  return mainActors;
}
