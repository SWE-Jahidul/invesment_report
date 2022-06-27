import React from "react";
import Footer from "../Sheard/Footer";
import Menu from "../Sheard/Menu";
import TopHeader from "../Sheard/TopHeader";

const Search = () => {
  return (
    <div>
      <TopHeader></TopHeader>
      <Menu></Menu>
      <span className="text-white"> i am Search </span> <Footer></Footer>
    </div>
  );
};

export default Search;
