"use client";

import { useState } from "react";

export default function ReviewForm() {

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert(`Review Submitted!
Rating: ${rating}
Comment: ${comment}`);

    setRating(5);
    setComment("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border-2 border-gray-300 rounded-2xl p-6 shadow-xl"
    >

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Leave a Review
      </h2>

      {/* Rating */}
      <div className="mb-4">

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Rating
        </label>

        <div className="flex gap-2 text-3xl">

          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className={`cursor-pointer transition-transform duration-200 hover:scale-110 ${
                star <= rating
                  ? "text-yellow-500"
                  : "text-gray-300"
              }`}
            >
              ★
            </button>
          ))}

        </div>

      </div>

      {/* Comment */}
      <div className="mb-4">

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Comment
        </label>

        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          placeholder="Write your review..."
          className="w-full border border-gray-300 rounded-lg p-3"
        />

      </div>

      {/* Button */}
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition-colors duration-300 cursor-pointer"
      >
        Submit Review
      </button>

    </form>
  );
}