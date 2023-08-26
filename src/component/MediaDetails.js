import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { BiFilm, BiTimeFive } from "react-icons/bi";
import { BsCurrencyDollar } from "react-icons/bs";
import { RiTvFill } from "react-icons/ri";

const MediaDetails = ({ media }) => {
  const {
    title,
    name,
    overview,
    release_date,
    first_air_date,
    vote_count,
    vote_average,
    revenue,
    runtime,
    backdrop_path,
    poster_path,
    number_of_episodes,
    number_of_seasons,
  } = media;
  
  return (
    <div className="w-full ">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6 ">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            backdrop_path || poster_path
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
          <h2 className="text-lg mb-3 font-bold">{title || name}</h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">overview : </span>
            {overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released :</span>{" "}
            {release_date || first_air_date}
          </p>
          <p className="mb-3 flex">
            <span className="font-semibold mr-1">Votes :</span> {vote_count}
          </p>
          <div className="flex items-center mt-2 flex-wrap">
            <p className="flex items-center mr-8 mb-2">
              <AiFillStar className="text-amber-500 mr-1 text-xl" />
              {Number(vote_average).toFixed(1)}
            </p>
            {revenue && (
              <p className="mr-8 flex items-center mb-2">
                <BsCurrencyDollar className="mr-1 text-xl text-green-500" />
                {revenue.toLocaleString("en-US")}
              </p>
            )}
            {runtime && (
              <p className="mr-8 flex items-center mb-2">
                <BiTimeFive className="mr-1 text-xl text-cyan-500" />
                {runtime} Minutes
              </p>
            )}
            {number_of_episodes && (
              <p className="mr-8 flex items-center mb-2">
                <BiFilm className="mr-1 text-xl text-cyan-500" />
                {number_of_episodes} Episodes
              </p>
            )}
            {number_of_seasons && (
              <p className="mr-8 flex items-center mb-2">
                <RiTvFill className="mr-1 text-xl text-cyan-500" />
                {number_of_seasons} Seasons
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaDetails;
