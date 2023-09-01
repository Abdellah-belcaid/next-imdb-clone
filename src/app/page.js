import Pagination from "@/component/Pagination";
import Results from "@/component/media/Results";
import { getRandomBackdropPathFromResults } from "@/services/TmdbAPIUtils";
import { getMovieDetails, getMoviesByType } from "@/services/TmdbMoviesAPI";
import { getTvShowDetails } from "@/services/TmdbTvShowsAPI";
import Image from "next/image";

const DEFAULT_GENRE = "trending";
const RESULTS_PER_PAGE = 20; // Adjust as needed

export default async function Home({ searchParams: { genre, page } }) {
  const genreParam = genre || DEFAULT_GENRE;
  const data = await getMoviesByType(genreParam, page);
  const { results, total_results } = data;
  const totalPages = Math.ceil(total_results / RESULTS_PER_PAGE);
  const path = `/?genre=${genreParam}&page=`;

  const randomBackdropPath = getRandomBackdropPathFromResults(results);

  return (
    <div className="">
      <div className="bg-gradient-to-tr from-purple-900  to-green-700 h-96 w-full relative">
        <Image
          className="w-full h-full object-cover absolute mix-blend-overlay"
          src={`https://image.tmdb.org/t/p/original/${randomBackdropPath}`}
          width={1260}
          height={750}
          alt="image is not available"
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center p-10">
          <h2 className="text-white text-6xl font-bold mb-4 text-center">
            Welcome.
          </h2>
          <p className="text-white text-lg text-center mb-8">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <a
            href="/movie"
            className="text-white border border-white py-2 px-6 rounded-full transition duration-300 hover:bg-white hover:text-green-700"
          >
            Explore
          </a>
        </div>
      </div>

      <Results results={results} id="#explore" />
      <Pagination currentPage={page} totalPages={totalPages} path={path} />
    </div>
  );
}
