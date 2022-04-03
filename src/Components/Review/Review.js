import React from "react";

const Review = ({ review }) => {
  const { name, comment, img,ratting } = review;
  return (
    <div className="shadow-lg shadow-gray-500 rounded-2xl  bg-gray-100 p-4">
      <div className="flex gap-4 justify-start items-center">
        <img src={img} alt="" />
        <h1 className="font-serif font-bold text-xl py-3">{name}</h1>
      </div>
      <p className="text-xl font-serif">{comment}</p>
      <p className="mt-2"><small>Ratting: {ratting}</small></p>
    </div>
  );
};

export default Review;
