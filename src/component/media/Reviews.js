import { getReviews } from "@/services/TmdbMoviesAPI";
import Image from "next/image";
import { FaUser } from "react-icons/fa";

async function Reviews({ id, type }) {
  const reviewsData = await getReviews(type, id);
  const reviews = reviewsData.results;

  console.log(reviewsData);
  return (
    <div className="min-w-fit mt-6 mx-4">
      <div className="flex items-center mb-4">
        <h2 className="text-3xl font-semibold inline-block border-b-2 border-blue-500 ml-6">
          Reviews
        </h2>
        <div className="px-2 py-1 bg-blue-500 text-white rounded-full ml-2">
          {reviews.length}
        </div>
      </div>
      {reviews.map((review) => (
        <div key={review.id} className="p-4 bg-white shadow-md rounded-md mb-4">
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
              <h3 className="text-lg font-semibold">{review.author}</h3>
              <p className="text-gray-500">A review by {review.author}</p>
            </div>
          </div>
          <p className="text-gray-600 mb-2">Written on {review.created_at}</p>
          <p className="text-gray-800">{review.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
