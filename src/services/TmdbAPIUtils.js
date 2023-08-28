const API_KEY = process.env.API_KEY;

export async function fetchData(endpoint) {
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
export async function getReviews(mediaType, mediaId) {
  const endpoint = `https://api.themoviedb.org/3/${mediaType}/${mediaId}/reviews?api_key=${API_KEY}&language=en-US`;
  const response = await fetchData(endpoint);
  return response.results;
}

export async function getMainActors(mediaType, mediaId) {
  const endpoint = `https://api.themoviedb.org/3/${mediaType}/${mediaId}/credits?api_key=${API_KEY}&language=en-US`;
  const response = await fetchData(endpoint);

  // Filter cast members to get only main actors (e.g., actors with prominent roles)
  const mainActors = response.cast.filter((actor) => actor.order < 20); // You can adjust the order as needed
  return mainActors;
}
export async function searchMedia(type, query, page = 1) {
  const endpoint = `https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`;
  return fetchData(endpoint);
}
