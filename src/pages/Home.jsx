import React, { useState } from 'react';
import Herosection from '../Herosection';
import PromotionalSlider from '../components/PromotionalSlider';
import WSCAtAGlance from '../components/WSCAtAGlance';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import CoursePopup from '../components/CoursePopup';

const Home = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isCoursePopupOpen, setIsCoursePopupOpen] = useState(false);

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
            <PromotionalSlider />
            <WSCAtAGlance />
            <Testimonials />
            <WhyChooseUs />
            <CoursePopup
                isOpen={isCoursePopupOpen}
                onClose={closeCoursePopup}
                course={selectedCourse}
            />
        </div>
    );
};

export default Home;