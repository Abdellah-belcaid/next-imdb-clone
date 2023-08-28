import ActorCard from "./ActorCard";

function Credits({ actors }) {
  return (
    <div className="px-6 py-4">
      <h2 className="text-3xl p-1 font-semibold inline-block border-b-2 border-blue-500 ml-2 mt-4">
        Main Actors
      </h2>
      <div className="relative z-0 grid  auto-cols-[15rem] grid-flow-col gap-1 overflow-x-auto pt-2  overscroll-x-contain  no-scrollbar">
        {actors.map((actor) => (
          <div key={actor.id} className="  ">
            <ActorCard actor={actor} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Credits;
