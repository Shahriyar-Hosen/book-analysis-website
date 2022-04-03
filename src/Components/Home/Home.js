import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <section className="px-4 py-2 mx-auto max-w-7xl">
        <div className="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
          <div>
            <h1 className="mb-4 text-3xl font-serif font-extrabold leading-tight tracking-tight text-left text-[#060144] md:text-3xl">
              <span>Review of Grit: The Power of</span>
              <br />
              <span>Passion and Perseverance</span>
            </h1>
            <p className="mb-5 text-base text-left text-gray-800 md:text-xl">
              In this must-read book for anyone striving to succeed, pioneering
              psychologist Angela Duckworth shows parents, educators, students,
              and business people both seasoned and new that the secret to
              outstanding achievement is not talent but a focused persistence
              called grit.
            </p>
            <div className="mt-14">
              <Link
                to="/contact"
                className="w-full mb-2 py-2 px-16  text-[#060144] text-xl mt-3 bg-cyan-200 hover:bg-cyan-400 hover:text-white  rounded-md sm:w-auto sm:mb-0"
              >
                Reviews
              </Link>
            </div>
          </div>
          <div>
            <div className="w-full h-full bg-gray-200 rounded-lg">
              <img
                src="https://i.pinimg.com/originals/6a/03/93/6a03930c7cdf234d2e5ae5d05578076d.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
