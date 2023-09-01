"use client";
import Image from "next/image";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaArrowRight, FaUser } from "react-icons/fa";

function Reviews({ reviews }) {
  const [expandedReviews, setExpandedReviews] = useState([]);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const currentReview = reviews[currentReviewIndex];

  const toggleExpand = (reviewId) => {
    setExpandedReviews((prevExpanded) =>
      prevExpanded.includes(reviewId)
        ? prevExpanded.filter((id) => id !== reviewId)
        : [...prevExpanded, reviewId]
    );
  };

  return (
    <>
      {currentReview && (
        <div className="min-w-fit mt-6 mx-4">
          <div className="flex items-center mb-4 justify-between ">
            <h2 className="text-3xl p-1 font-semibold inline-block border-b-2 border-blue-500 ml-2 mt-4">
              Reviews
              <span class="inline-flex items-center justify-center w-6 h-6 p-2 ml-2 text-xl font-semibold text-blue-800 bg-blue-200 rounded-full ">
                {reviews.length}
              </span>
            </h2>
            <button
              className="text-xl font-semibold hover:text-blue-500 mr-2 mt-6"
              onClick={handleNextReview}
            >
              Next Review <FaArrowRight className="ml-1 inline" />
            </button>
          </div>

          <div className="p-4 bg-gray-100 shadow-md dark:bg-gray-800 rounded-md mb-20 ">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-gray-300 relative">
                {currentReview.author_details.avatar_path &&
                currentReview.author_details.avatar_path !== null ? (
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${currentReview.author_details.avatar_path}`}
                    alt="User Avatar"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center">
                    <FaUser className="h-6 w-6 text-gray-500" />
                  </div>
                )}
              </div>

              <div className="ml-3">
                <h3 className="text-lg font-semibold dark:text-white">
                  {currentReview.author}
                </h3>
                <p className="flex items-center justify-center">
                  {currentReview.author_details.rating && (
                    <div className="px-2.5 py-0.5 bg-gray-950  text-sm dark:bg-cyan-600  text-white rounded-full ml-1 mr-2 flex">
                      {Number(currentReview.author_details.rating).toFixed(1)}
                      <AiFillStar className="text-amber-500 ml-1 text-lg " />
                    </div>
                  )}
                  <span className="text-gray-500 dark:text-gray-400">
                    A currentReview by {currentReview.author}
                  </span>
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Written on {currentReview.created_at}
            </p>
            <p className="text-gray-800 dark:text-white">
              {expandedReviews.includes(currentReview.id)
                ? currentReview.content
                : `${currentReview.content.substring(0, 220)}...`}
              {currentReview.content.length > 100 && (
                <button
                  className="text-blue-500 hover:underline focus:outline-none dark:text-blue-300 ml-1"
                  onClick={() => toggleExpand(currentReview.id)}
                >
                  {expandedReviews.includes(currentReview.id)
                    ? "show less"
                    : "show all"}
                </button>
              )}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Reviews;
