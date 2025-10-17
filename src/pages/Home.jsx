import React from 'react';
import Herosection from '../Herosection';
import WSCAtAGlance from '../components/WSCAtAGlance';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Herosection />
            <WSCAtAGlance />
            <Testimonials />
            <WhyChooseUs />
        </div>
    );
};

export default Home;