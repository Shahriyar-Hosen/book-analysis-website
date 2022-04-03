import React from "react";
import useReviews from "../../hook/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews] = useReviews();
  return (
    <section className="mt-10 mb-10 px-4 py-2 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 my-10">
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
