import React from 'react';
import Banner from './Banner';
import Category from './Category';
import PopularMenu from './PopularMenu';
import FeaturedCard from './FeaturedCard';
import Testimonial from './Testimonial';
import Phone from './Phone';
import About from './About';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>গাঁওগেরাম হেঁশেল | HOME</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <PopularMenu></PopularMenu>
            <Phone></Phone>
            <FeaturedCard></FeaturedCard>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;