"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { RiUserLine } from "react-icons/ri";
import { fadeIn } from "../../../variants";

const ActorCard = ({ actor, index }) => {
  const { profile_path, name, character, id } = actor;

  return (
    <motion.div
      variants={fadeIn("right", 0.2 * index)}
      initial="hidden"
      animate="show"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group"
    >
      {profile_path ? (
        <Image
          src={`https://image.tmdb.org/t/p/original/${profile_path}`}
          width={400}
          height={200}          
          alt={`${name} profile`}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200 object-contain"
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />
      ) : (
        <div className="aspect-w-2 aspect-h-3 sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200 flex items-center justify-center bg-gray-200">
          <RiUserLine className="min-h-[296px] w-16 text-gray-400" />{" "}
        </div>
      )}

      <div className="p-2">
        <h2 className="truncate font-bold">{name}</h2>
        <p className="line-clamp-1 text-sm ">{character}</p>
      </div>
    </motion.div>
  );
};
export default ActorCard;
