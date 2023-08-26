import MediaDetails from "@/component/MediaDetails";
import { getTvShowDetails } from "@/services/TmdbTvShowsAPI";

async function TvShow({ params }) {
  const tvShow = await getTvShowDetails(params.id);
  return <MediaDetails media={tvShow} />;
}
export default TvShow;
