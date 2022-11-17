import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import GetStarted from './GetStarted';
import InfoCards from './InfoCards';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-2 md:px-10'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <GetStarted></GetStarted>
            <MakeAppoinment></MakeAppoinment>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;