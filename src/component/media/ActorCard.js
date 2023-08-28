const { default: Image } = require("next/image");

const ActorCard = ({ actor }) => {
  const { profile_path, name, character, id } = actor;

  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Image
        src={`https://image.tmdb.org/t/p/original/${profile_path}`}
        width={100}
        height={200}
        layout="responsive"
        alt={`${name} profile`}
        className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
        placeholder="blur"
        blurDataURL="/spinner.svg"
      />
      <div className="p-2">
        <h2 className="truncate font-bold">{name}</h2>
        <p className="line-clamp-2 text-md">{character}</p>
      </div>
    </div>
  );
};
export default ActorCard;
