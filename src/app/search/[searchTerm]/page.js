import Results from "@/component/Results";
import { searchMovies } from "@/services/TmdbMoviesAPI";

async function SearchPage({ params }) {
  const res = await searchMovies(params.searchTerm, 1);
  const movies = res.results;

  return (
    <div>
      {movies && movies.length === 0 && (
        <div class="flex flex-col items-center justify-center h-screen">
          <div class="text-4xl font-semibold mb-4 animate-bounce">😔</div>
          <h2 class="text-xl font-medium mb-2">No results found</h2>
          <p class="text-gray-600">
            Sorry, we could not find any matching results for{" "}
            <b>{params.searchTerm}</b>.
          </p>
        </div>
      )}

      {movies && <Results results={movies} />}
    </div>
  );
}
export default SearchPage;
