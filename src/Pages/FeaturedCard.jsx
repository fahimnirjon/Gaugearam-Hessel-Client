import React from "react";
import img from "../assets/home/featured.jpg";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import "./Featured/Featured.css";

const FeaturedCard = () => {
  return (
    <div className="featured-item bg-fixed   text-white pt-8 my-20">
      <div>
        <SectionTitle
          heading={"featured items"}
          subHeading={"Check It Out"}
        ></SectionTitle>
      </div>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-16 px-36">
        <div>
          <img src={img} />
        </div>
        <div className="md:ml-8 space-y-2">
          <p>Aug 20, 2029</p>
          <p className="uppercase">where can i get some</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
            consectetur quas enim aliquid obcaecati alias dicta labore dolores
            porro quia.
          </p>
          <button className="btn btn-outline border-b-4 mt-4 text-white">
            View Full Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
