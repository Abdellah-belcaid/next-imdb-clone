"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { FiThumbsUp } from "react-icons/fi";
import { fadeIn } from "../../../variants";

const Card = ({ result, type = "movie", index }) => {
  const {
    backdrop_path,
    poster_path,
    overview,
    id,
    title,
    name,
    release_date,
    first_air_date,
    vote_count,
    vote_average,
  } = result;

  return (
    <motion.div
      variants={fadeIn("right", 0.2 * index)}
      initial="hidden"
      animate="show"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className=" cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border  sm:border-slate-400 sm:m-2 transition-shadow duration-200 group ">
        <Link href={`/${type}/${id}`}>
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              backdrop_path || poster_path
            }`}
            width={500}
            height={300}
            layout="responsive"
            alt="image is not available"
            className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200 h-52"
            placeholder="blur"
            blurDataURL="/spinner.svg"
          />
        </Link>
        <div className="p-2">
          <p className="line-clamp-2 text-md">{overview}</p>
          <h2 className="truncate font-bold">{title || name}</h2>
          <p className="flex items-center">
            {release_date || first_air_date}{" "}
            <FiThumbsUp className="text-blue-500 h-5 mr-1 ml-3" />
            {vote_count}
            <AiFillStar className="text-amber-500 mr-1 text-xl h-5 ml-3" />
            {Number(vote_average).toFixed(1)}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
