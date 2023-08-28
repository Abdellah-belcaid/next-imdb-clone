import MediaDetails from "@/component/media/MediaDetails";
import { getTvShowDetails } from "@/services/TmdbTvShowsAPI";

async function TvShow({ params }) {
  const tvShow = await getTvShowDetails(params.id);
  return <MediaDetails media={tvShow} type={"tv"} />;
}
export default TvShow;
