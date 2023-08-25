import { getMovieDetails } from "@/services/TmdbMoviesAPI";
import Image from "next/image";
  
async function Movie({ params }) {
  const movie = await getMovieDetails(params.id);

  return (
    <div className="w-full ">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6 ">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
          alt="image is not available"
          className=" rounded-lg"
          placeholder="blur"
          blurDataURL="/icon.ico"
        ></Image>
        <div className="p-2 ">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">overview : </span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released :</span>{" "}
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating :</span>{" "}
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
