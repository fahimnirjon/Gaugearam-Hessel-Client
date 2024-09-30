import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import slide5 from "../assets/home/slide5.jpg";
import SectionTitle from "../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="mb-10 mt-10">
      <SectionTitle
        heading={"order online"}
        subHeading={"From 11.00am to 10.00pm"}
      ></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={5}
        autoplay={Boolean}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="relative" src={slide1} />
          <p className="absolute text-3xl uppercase text-center -mt-24 ml-20 text-white opacity-60">
            Salads
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative" src={slide2} />
          <p className="absolute text-3xl uppercase text-center -mt-24 ml-20 text-white opacity-60">
            Pizzas
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative" src={slide3} />
          <p className="absolute text-3xl uppercase text-center -mt-24 ml-20 text-white opacity-60">
            soups
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative" src={slide4} />
          <p className="absolute text-3xl uppercase text-center -mt-24 ml-20 text-white opacity-60">
            desserts
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img className="relative" src={slide5} />
          <p className="absolute text-3xl uppercase text-center -mt-24 ml-20 text-white opacity-60">
            salads
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
