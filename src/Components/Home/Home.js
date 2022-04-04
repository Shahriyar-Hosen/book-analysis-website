import { Link } from "react-router-dom";
import useReviews from "../../hook/useReviews";
import Review from "../Review/Review";

const Home = () => {
  const [reviews] = useReviews()

  return (
    <main>
      <section className="px-4 py-5 mx-auto max-w-7xl">
        <div className="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
          <div className="order-2 md:order-1">
            <h1 className="mb-4 text-3xl font-serif font-extrabold leading-tight tracking-tight text-left text-[#060144] md:text-3xl">
              <span>Review of Grit: The Power of</span>
              <br />
              <span>Passion and Perseverance</span>
            </h1>
            <p className="mb-5 text-base text-left text-gray-800 md:text-xl font-serif">
              In this must-read book for anyone striving to succeed, pioneering
              psychologist Angela Duckworth shows parents, educators, students,
              and business people both seasoned and new that the secret to
              outstanding achievement is not talent but a focused persistence
              called grit.
            </p>
            <div className="mt-10 mb-5 md:mt-24 flex justify-center md:justify-start items-center">
              <Link
                to="/reviews"
                className="py-2 px-16  text-[#060144] text-xl bg-cyan-200 hover:bg-cyan-400 hover:text-white  rounded-md sm:w-auto sm:mb-0 font-serif "
              >
                Reviews
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="w-full h-full bg-gray-200 rounded-lg">
              <img
                src="https://i.pinimg.com/originals/6a/03/93/6a03930c7cdf234d2e5ae5d05578076d.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-40 mb-32 px-4 py-2 mx-auto max-w-7xl">
        <h1 className="mb-4 text-3xl font-serif font-extrabold leading-tight tracking-tight text-center text-[#100b58] md:text-5xl">
          Customer Reviews
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 my-10">
          {reviews.slice(0, 3).map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Link
            to="/reviews"
            className=" mb-2 py-1 px-20 rounded-lg font-bold font-serif mt-3 sm:w-auto sm:mb-0 text-[#060144] text-xl bg-cyan-200 hover:bg-cyan-400 hover:text-white"
          >
            See All Reviews
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
