"use client";
import { useEffect } from "react";

function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-10">
      <div className="bg-white p-8 rounded-lg shadow-md text-center px-6">
        <h1 className="text-3xl font-semibold mb-4">
          Oops, something went wrong
        </h1>
        <p className="text-gray-600 mb-6">
          We apologize for the inconvenience. An error occurred while trying to
          process your request.
        </p>
        <p className="text-gray-600 mb-6">Error details: {error.message}</p>
        <button
          className="px-4 py-2 text-white bg-amber-300 rounded hover:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-300 transform transition-all duration-200 hover:scale-105"
          onClick={() => reset()}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

export default Error;
