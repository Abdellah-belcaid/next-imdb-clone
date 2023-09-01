const API_KEY = process.env.API_KEY;

export async function fetchData(endpoint) {
  try {
    const response = await fetch(endpoint, { next: { revalidate: 3600 } });

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

export function getRandomBackdropPathFromResults(results) {
  // Extracting backdrop_path values from results
  const backdropPaths = results.map((show) => show.backdrop_path);

  // Generating a random index for selecting a backdrop_path
  const index1 = Math.floor(Math.random() * backdropPaths.length);
  const index2 = Math.floor(Math.random() * backdropPaths.length);

  // Get the randomly selected backdrop_path
  const BPath1 = backdropPaths[index1];
  const BPath2 = backdropPaths[index2];

  return { BPath1, BPath2 };
}

export async function getVideos(mediaType, mediaId) {
  const endpoint = `https://api.themoviedb.org/3/${mediaType}/${mediaId}/videos?api_key=${API_KEY}&language=en-US`;
  const response = await fetchData(endpoint);
  const trailers = response.results.filter((video) => video.type === "Trailer");
  const otherVideos = response.results.filter(
    (video) => video.type !== "Trailer"
  );

  return { trailers, otherVideos };
}
