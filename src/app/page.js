import Pagination from "@/component/Pagination";
import Results from "@/component/Results";
import { getMoviesByType } from "@/services/TmdbMoviesAPI";

const DEFAULT_GENRE = "fetchTrending";
const RESULTS_PER_PAGE = 20; // Adjust as needed

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || DEFAULT_GENRE;
  const data = await getMoviesByType(genre, searchParams.page);
  const results = data.results;
  const total_results = data.total_results;
  const totalPages = Math.ceil(total_results / RESULTS_PER_PAGE);

  return (
    <div className="">
      <Results results={results} />
      <Pagination
        currentPage={searchParams.page}
        totalPages={totalPages}
        genre={searchParams.genre}
      />
    </div>
  );
}
