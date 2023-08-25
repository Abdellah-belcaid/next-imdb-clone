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

export async function searchMovies(query, page = 1) {
  const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${query}&page=${page}`;
  return fetchData(endpoint);
}
