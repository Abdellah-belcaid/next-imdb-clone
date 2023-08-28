import MediaDetails from "@/component/media/MediaDetails";
import { getMovieDetails } from "@/services/TmdbMoviesAPI";

async function Movie({ params }) {
  const movie = await getMovieDetails(params.id);
  return <MediaDetails media={movie} type={"movie"} />;
}

export default Movie;
