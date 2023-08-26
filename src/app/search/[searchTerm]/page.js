import Pagination from "@/component/Pagination";
import Results from "@/component/Results";
import { searchMovies } from "@/services/TmdbMoviesAPI";
import { searchShows } from "@/services/TmdbTvShowsAPI";

const RESULTS_PER_PAGE = 20; // Adjust as needed

async function getDataByType(type, searchTerm, page) {
  if (type === "movies") {
    return searchMovies(searchTerm, page);
  } else if (type === "tvShows") {
    return searchShows(searchTerm, page);
  } else {
    throw new Error("Invalid type");
  }
}

async function SearchPage({ params, searchParams }) {
  const data = await getDataByType(
    searchParams.type,
    params.searchTerm,
    searchParams.page
  );
  const results = data.results;
  const totalPages = Math.ceil(data.total_results / RESULTS_PER_PAGE);
  const path = `/search/${params.searchTerm}?type=${searchParams.type}&page=`;

  return (
    <div>
      {results && results.length === 0 && (
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="text-4xl font-semibold mb-4 animate-bounce">😔</div>
          <h2 className="text-xl font-medium mb-2">No results found</h2>
          <p className="text-gray-600">
            Sorry, we could not find any matching results for{" "}
            <b>{params.searchTerm}</b>.
          </p>
        </div>
      )}

      {results && (
        <div className="">
          <Results results={results} />
          <Pagination
            currentPage={searchParams.page}
            totalPages={totalPages}
            path={path}
          />
        </div>
      )}
    </div>
  );
}

export default SearchPage;
