import Results from "@/component/Results";

const API_KEY = process.env.API_KEY;
const DEFAULT_GENRE = "fetchTrending";

async function fetchData(searchParams) {
  try {
    const genre = searchParams.genre || DEFAULT_GENRE;
    const response = await fetch(
      `https://api.themoviedb.org/3/${
        genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
      }?api_key=${API_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    throw error;
  }
}

export default async function Home({ searchParams }) {
  const data = await fetchData(searchParams);
  const results = data.results;

  return (
    <div className="flex">
      <Results results={results} />
    </div>
  );
}
