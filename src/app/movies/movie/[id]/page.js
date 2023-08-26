import MediaDetails from "@/component/MediaDetails";
import { getMovieDetails } from "@/services/TmdbMoviesAPI";

async function Movie({ params }) {
  const movie = await getMovieDetails(params.id);
  return <MediaDetails media={movie} />;
}

export default Movie;
