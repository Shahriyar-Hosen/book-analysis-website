import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="px-4 py-32 mx-auto max-w-7xl">
      <div className="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
        <div className="order-2 md:order-1">
          <p className="mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase">
            Error 404
          </p>
          <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl">
            Oops! The page you're looking for isn't here.
          </h1>
          <p className="mb-5 text-base text-left text-gray-800 md:text-xl">
            You might have the wrong address, or the page may have moved.
          </p>
          <Link
            to="/home"
            className="w-full mb-2 py-2 px-3 text-white mt-3 bg-cyan-400 rounded-md sm:w-auto sm:mb-0"
          >
            Back to homepage
          </Link>
        </div>
        <div className="order-1 md:order-2">
          <div className="w-full h-full bg-gray-200 rounded-lg">
            <img
              src="https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-134036857.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
