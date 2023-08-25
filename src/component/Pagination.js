import Link from "next/link";

function Pagination({ currentPage, totalPages, genre }) {
  const page = parseInt(currentPage, 10);

  return (
    <div className="flex justify-center items-center space-x-4 mt-6 mb-20">
      {currentPage > 1 ? (
        <Link href={`/?genre=${genre}&page=${page - 1}`}>
          <span className="px-3 py-2 rounded-md bg-blue-500 text-white">
            Previous
          </span>
        </Link>
      ) : (
        <span className="px-3 py-2 rounded-md bg-gray-300 text-white cursor-not-allowed">
          Previous
        </span>
      )}
      <span className="text-gray-600">
        Page {currentPage} of {totalPages}
      </span>
      {currentPage < totalPages ? (
        <Link href={`/?genre=${genre}&page=${page + 1}`}>
          <span className="px-3 py-2 rounded-md bg-blue-500 text-white">
            Next
          </span>
        </Link>
      ) : (
        <span className="px-3 py-2 rounded-md bg-gray-300 text-white cursor-not-allowed">
          Next
        </span>
      )}
    </div>
  );
}

export default Pagination;
