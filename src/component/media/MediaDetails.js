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
      <div className="flex justify-center mb-2">
        <hr className="w-2/4 border-t-2 border-gray-400 dark:border-gray-600 mr-2 flex justify-center mb-4" />
      </div>
      <Reviews reviews={reviews}></Reviews>
    </div>
  );
}

export default MediaDetails;
