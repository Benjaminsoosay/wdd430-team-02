type StarRatingProps = {
  rating: number;
  reviews?: number;
};

export default function StarRating({
  rating,
  reviews,
}: StarRatingProps) {
  return (
    <div className="flex items-center gap-2">

      {/* Stars */}
      <div className="flex text-yellow-500 text-lg">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star}>
            {star <= rating ? "★" : "☆"}
          </span>
        ))}
      </div>

      {/* Review Count */}
      {reviews !== undefined && (
        <span className="text-sm text-gray-600">
          ({reviews} reviews)
        </span>
      )}
    </div>
  );
}