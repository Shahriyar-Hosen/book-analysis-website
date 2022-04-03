import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="sticky top-0 bg-blue-200 px-12 py-8 flex justify-center">
        <div className="flex gap-4 text-xl">
          <Link className="border-b-2 border-blue-900 text-blue-900" to="/home">
            Home
          </Link>
          <Link className="border-b-2 border-blue-900 text-blue-900" to="/reviews">
            Reviews
          </Link>
          <Link className="border-b-2 border-blue-900 text-blue-900" to="/dashboard">
            Dashboard
          </Link>
          <Link className="border-b-2 border-blue-900 text-blue-900" to="/blogs">
            Blogs
          </Link>
          <Link className="border-b-2 border-blue-900 text-blue-900" to="/about">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
