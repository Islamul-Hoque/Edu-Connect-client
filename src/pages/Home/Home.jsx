import React from 'react';
import Hero from './Hero/Hero';
import TuitionPosts from './TuitionPosts/TuitionPosts';
import Tutors from './Tutors/Tutors';
import HowItWorks from './HowItWorks/HowItWorks';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import Faq from './WhyChooseUs/FAQ/Faq';
import PlatformStats from './PlatformStats/PlatformStats';
import CallToAction from './CallToAction/CallToAction';
import PlatformBenefits from './PlatformBenefits/PlatformBenefits';

const Home = () => {
    return (
        <div className=''>
            <Hero/>
            {/* <PlatformStats />

            <TuitionPosts/>
            <Tutors/>

            <HowItWorks/>
            <WhyChooseUs/>

            <Faq/> */}
            <PlatformBenefits />
            <CallToAction />
        </div>
    );
};

export default Home;