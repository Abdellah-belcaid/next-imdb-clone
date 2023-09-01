import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { BiFilm, BiTimeFive } from "react-icons/bi";
import { BsCurrencyDollar } from "react-icons/bs";
import { RiPlayCircleFill, RiTvFill } from "react-icons/ri";
function Overview({ media, trailers }) {
  const {
    id,
    title,
    tagline,
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
    genres,
  } = media;
  return (
    <div className="w-full ml-4 mr-4 rounded-xl  bg-gradient-to-tr from-purple-900 via-blue-900 to-green-900 relative">
      <Image
        className="w-full h-full object-cover absolute mix-blend-overlay  rounded-xl "
        src={`https://image.tmdb.org/t/p/original/${
          backdrop_path || poster_path
        }`}
        width={1260}
        height={750}
        alt="image is not available"
        placeholder="blur"
        blurDataURL="/spinner.svg"
      />

      <div className="text-white p-6 md:pt-8 flex flex-col md:flex-row items-center content-center  mx-auto md:space-x-6  rounded-xl">
        <Image
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          width={400}
          height={650}
          alt="image is not available"
          className="rounded-lg min-h-full cursor-pointer z-10"
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />
        <div className="p-2 z-10">
          <h2 className="text-4xl mb-3 font-extrabold">
            {title || name} ({release_date.substring(0, 4)})
          </h2>
          {trailers.length !== 0 && (
            <Link
              href={`https://www.youtube.com/watch?v=${trailers[0].key}`}
              target="_blank"
              className="z-30 text-lg text-white flex items-center mb-2 cursor-pointer  transition duration-300 transform  hover:text-blue-500 "
            >
              <RiPlayCircleFill className="mr-2" />
              Watch Trailer
            </Link>
          )}

          <p className="text-lg mb-2">{tagline}</p>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview : </span>
            {overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released :</span>
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
          <div className="flex space-x-2 ">
            {genres &&
              genres.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-gray-100 text-gray-900 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-white dark:text-dark hover:text-red-500"
                >
                  {genre.name}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
