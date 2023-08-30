import Pagination from "@/component/Pagination";
import Results from "@/component/media/Results";
import { getShowsByType } from "@/services/TmdbTvShowsAPI";

const DEFAULT_GENRE = "trending"; // Adjust as needed
const RESULTS_PER_PAGE = 20; // Adjust as needed

async function TvShows({ searchParams: { genre, page } }) {
  const genreParam = genre || DEFAULT_GENRE;
  const data = await getShowsByType(genreParam, page);
  const { results, total_results } = data;
  const totalPages = Math.ceil(total_results / RESULTS_PER_PAGE);
  const path = `/tv?genre=${genreParam}&page=`;

  return (
    <div className="">
      <Results results={results} type={"tv"} />
      <Pagination currentPage={page} totalPages={totalPages} path={path} />
    </div>
  );
}

export default TvShows;
