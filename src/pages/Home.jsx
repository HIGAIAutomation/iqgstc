import React, { useState, useEffect } from 'react';
import Herosection from '../Herosection';
import WSCAtAGlance from '../components/WSCAtAGlance';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import MontessoriOfferPopup from '../components/MontessoriOfferPopup';
import CoursePopup from '../components/CoursePopup';

const Home = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isCoursePopupOpen, setIsCoursePopupOpen] = useState(false);

    useEffect(() => {
        setIsPopupOpen(true);
    }, []);

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleCourseSelect = (course) => {
        setSelectedCourse(course);
        setIsCoursePopupOpen(true);
    };

    const closeCoursePopup = () => {
        setIsCoursePopupOpen(false);
        setSelectedCourse(null);
    };

    return (
        <div>
            <Herosection onCourseSelect={handleCourseSelect} />
            <WSCAtAGlance />
            <Testimonials />
            <WhyChooseUs />
            <MontessoriOfferPopup isOpen={isPopupOpen} onClose={closePopup} />
            <CoursePopup
                isOpen={isCoursePopupOpen}
                onClose={closeCoursePopup}
                course={selectedCourse}
            />
        </div>
    );
};

export default Home;