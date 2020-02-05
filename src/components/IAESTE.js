import React from 'react';
import axios from 'axios';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navigation from './container/Navigation';
import ImageSlider from './container/ImageSlider';
import Counter from './container/Counter';
import Feature from './container/Feature';
import Info from './container/Info';
import Announcement from './container/Announcement';
import Footer from './container/Footer';

const IAESTE = () => (

    <ParallaxProvider>
        <Navigation />
        <ImageSlider />


        <Feature />
        <Info />
        <Announcement />

        <Counter />
        <Footer />
    </ParallaxProvider>
);

export default IAESTE;