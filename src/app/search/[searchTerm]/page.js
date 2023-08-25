import Results from "@/component/Results";

async function getSearchItems(searchTerm) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const jsonData = await response.json();
    const movies = jsonData.results;
    return movies;
  } catch (error) {
    throw error;
  }
}

async function SearchPage({ params }) {
  const movies = await getSearchItems(params.searchTerm);

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
