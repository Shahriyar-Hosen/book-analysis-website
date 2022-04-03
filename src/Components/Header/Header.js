import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div>
      <div className="sticky top-0 bg-blue-100 px-12 py-8 flex justify-center">
        <div className="flex gap-4 text-xl">
          <CustomLink className="font-serif font-bold" to="/home">
            Home
          </CustomLink>
          <CustomLink className="font-serif font-bold" to="/reviews">
            Reviews
          </CustomLink>
          <CustomLink className="font-serif font-bold" to="/dashboard">
            Dashboard
          </CustomLink>
          <CustomLink className="font-serif font-bold" to="/blogs">
            Blogs
          </CustomLink>
          <CustomLink className="font-serif font-bold" to="/about">
            About
          </CustomLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
