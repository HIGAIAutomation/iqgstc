import React, { useState, useEffect } from 'react';
import Herosection from '../Herosection';
import WSCAtAGlance from '../components/WSCAtAGlance';
import SkillAssessment from '../components/SkillAssessment';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import MontessoriOfferPopup from '../components/MontessoriOfferPopup';
import CoursePopup from '../components/CoursePopup';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isCoursePopupOpen, setIsCoursePopupOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Montessori popup removed from home page
        // Listen for assessment completion event (no longer triggers popup)
        const handleAssessmentCompleted = () => {
            // Assessment completed, but no popup triggered
        };

        window.addEventListener('assessmentCompleted', handleAssessmentCompleted);

        return () => {
            window.removeEventListener('assessmentCompleted', handleAssessmentCompleted);
        };
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
            <SkillAssessment />
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