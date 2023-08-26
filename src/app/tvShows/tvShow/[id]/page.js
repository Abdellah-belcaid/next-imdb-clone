import { getShowDetails } from "@/services/TmdbTvShowsAPI";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";

async function TvShow({ params }) {
  const show = await getShowDetails(params.id); // Update the function to fetch TV show details

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            show.backdrop_path || show.poster_path
          }`}
          width={500}
          height={300}
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
          alt="image is not available"
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="/icon.ico"
        ></Image>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {show.name || show.original_name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">overview : </span>
            {show.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">First Air Date :</span>{" "}
            {show.first_air_date}
          </p>
          <p className="mb-3 flex">
            <span className="font-semibold mr-1">Votes :</span>{" "}
            {show.vote_count}
          </p>
          <p className="mb-3 flex items-center">
            <span className="font-semibold mr-1">Rating :</span>{" "}
            {show.vote_average}{" "}
            <AiOutlineStar className="ml-3 text-amber-700 font-bold" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default TvShow;
