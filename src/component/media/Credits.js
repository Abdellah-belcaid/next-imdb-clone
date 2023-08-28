import ActorCard from "./ActorCard";

function Credits({ actors }) {
  return (
    <>
      <h2 className="text-3xl font-semibold inline-block border-b-2 border-blue-500 ml-6 mt-4">
        Main Actors
      </h2>
      <div className="sm:grid sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 max-w-full mx-auto py-4 px-2">
        {actors.map((actor) => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
      </div>
    </>
  );
}

export default Credits;
