import { Review } from "@/types/review";
import StarRating from "./StarRating";

type ReviewCardProps = {
  review: Review;
};

export default function ReviewCard({
  review,
}: ReviewCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between mb-3">

        <div>
          <h3 className="font-semibold text-gray-900">
            {review.userName}
          </h3>

          <p className="text-sm text-gray-500">
            {new Date(review.createdAt).toLocaleDateString()}
          </p>
        </div>

        <StarRating rating={review.rating} />
      </div>

      {/* Comment */}
      <p className="text-gray-700 leading-relaxed">
        {review.comment}
      </p>
    </div>
  );
}