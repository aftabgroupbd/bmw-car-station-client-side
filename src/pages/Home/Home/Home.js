import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Slider from '../../Shared/Slider/Slider';
import FeatureProducts from '../FeatureProducts/FeatureProducts';
import Reviews from '../Reviews/Reviews';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <FeatureProducts></FeatureProducts>
            <Reviews></Reviews>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;