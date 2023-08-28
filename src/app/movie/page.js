import Pagination from "@/component/Pagination";
import Results from "@/component/media/Results";
import { getMoviesByType } from "@/services/TmdbMoviesAPI";

const DEFAULT_GENRE = "fetchTrending";
const RESULTS_PER_PAGE = 20; // Adjust as needed

async function Movies({ searchParams: { genre, page } }) {
  const genreParam = genre || DEFAULT_GENRE;

  const data = await getMoviesByType(genreParam, page);

  const { results, total_results } = data;
  const totalPages = Math.ceil(total_results / RESULTS_PER_PAGE);
  const path = `/movie?genre=${genreParam}&page=`;

  return (
    <div className="">
      <Results results={results} type={"movie"} />
      <Pagination currentPage={page} totalPages={totalPages} path={path} />
    </div>
  );
}

export default Movies;
