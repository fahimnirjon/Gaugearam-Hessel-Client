import React from "react";
import "../Pages/Featured/About.css";

const About = () => {
  return (
    <div>
      <div className="hero about">
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center">
          <div className="lg:w-[1000px] md:w-[600px] bg-white m-20 rounded-2xl p-5">
            <h1 className="mb-5 text-5xl font-bold ">Gaogeram Hessel</h1>
            <p className="mb-5 px-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, soluta similique! Ad a eum, impedit id deleniti voluptatibus tempore cum? Odio sint nesciunt omnis distinctio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
