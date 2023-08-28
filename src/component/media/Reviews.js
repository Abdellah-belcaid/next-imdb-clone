"use client";
import Image from "next/image";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

function Reviews({ reviews }) {
  const [expandedReviews, setExpandedReviews] = useState([]);

  const toggleExpand = (reviewId) => {
    setExpandedReviews((prevExpanded) =>
      prevExpanded.includes(reviewId)
        ? prevExpanded.filter((id) => id !== reviewId)
        : [...prevExpanded, reviewId]
    );
  };

  return (
    <div className="min-w-fit mt-6 mx-4">
      <div className="flex items-center mb-4">
        <h2 className="text-3xl font-semibold inline-block border-b-2 border-blue-500 ml-4">
          Reviews
        </h2>
        <div className="px-2 py-1 bg-blue-500 text-white rounded-full ml-2">
          {reviews.length}
        </div>
      </div>
      {reviews.map((review) => (
        <div
          key={review.id}
          className="p-4 bg-white shadow-md dark:bg-gray-800 rounded-md mb-4"
        >
          <div className="flex items-center mb-4">
            <div className="h-10 w-10 rounded-full bg-gray-300 relative">
              {review.author_details.avatar_path &&
              review.author_details.avatar_path !== null ? (
                <Image
                  src={`https://image.tmdb.org/t/p/original/${review.author_details.avatar_path}`}
                  alt="User Avatar"
                  layout="fill"
                  objectFit="cover"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center">
                  <FaUser className="h-6 w-6 text-gray-500" />
                </div>
              )}
            </div>

            <div className="ml-3">
              <h3 className="text-lg font-semibold dark:text-white">
                {review.author}
              </h3>
              <p className="flex items-center justify-center">
                {review.author_details.rating && (
                  <div className="px-2.5 py-0.5 bg-gray-950  text-sm dark:bg-cyan-600  text-white rounded-full ml-1 mr-2 flex">
                    {Number(review.author_details.rating).toFixed(1)}
                    <AiFillStar className="text-amber-500 ml-1 text-lg " />
                  </div>
                )}
                <span className="text-gray-500 dark:text-gray-400">
                  A review by {review.author}
                </span>
              </p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            Written on {review.created_at}
          </p>
          <p className="text-gray-800 dark:text-white">
            {expandedReviews.includes(review.id)
              ? review.content
              : `${review.content.substring(0, 220)}...`}
            {review.content.length > 100 && (
              <button
                className="text-blue-500 hover:underline focus:outline-none dark:text-blue-300 ml-1"
                onClick={() => toggleExpand(review.id)}
              >
                {expandedReviews.includes(review.id) ? "show less" : "show all"}
              </button>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
