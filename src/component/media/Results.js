import Card from "./Card";

function Results({ results, type }) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-full mx-auto py-4 px-6">
      {results.map((result) => (
        <Card key={result.id} result={result} type={type} />
      ))}
    </div>
  );
}

export default Results;
