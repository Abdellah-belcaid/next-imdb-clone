import { getMainActors, getReviews } from "@/services/TmdbMoviesAPI";
import Credits from "./Credits";
import Overview from "./Overview";
import Reviews from "./Reviews";

async function MediaDetails({ media, type }) {
  const reviews = await getReviews(type, media.id);
  const casts = await getMainActors(type, media.id);
  return (
    <div>
      <Overview media={media}></Overview>
      <Credits actors={casts}></Credits>
      <Reviews reviews={reviews}></Reviews>
    </div>
  );
}

export default MediaDetails;
