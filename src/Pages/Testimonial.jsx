import React, { useEffect, useState } from "react";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import ico from '../assets/icon/quote-left 1.png'

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://restaurant-server-two.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-20">
      <SectionTitle
        subHeading={"What Our Client Says"}
        heading={"testimonials"}
      ></SectionTitle>
      <Swiper autoplay={true} navigation={true} modules={[Navigation]} className="mySwiper">
        {/* <SwiperSlide></SwiperSlide> */}
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-24 my-10 space-y-6">
              <Rating className="mb-5" style={{ maxWidth: 180 }} value={review.rating}  readOnly/>
              <img className="" src={ico} alt="" />
              <p className="text-xl">{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
