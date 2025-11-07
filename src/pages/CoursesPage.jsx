import React, { useState, useEffect } from 'react';
import Courses from '../components/Courses';
import Educators from '../components/Educators';
import CoursePopup from '../components/CoursePopup';
import MontessoriOfferPopup from '../components/MontessoriOfferPopup';

const CoursesPage = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isMontessoriPopupOpen, setIsMontessoriPopupOpen] = useState(false);

    useEffect(() => {
        // Show Montessori popup when user visits courses page
        setIsMontessoriPopupOpen(true);
    }, []);

    const handleCourseSelect = (course) => {
        setSelectedCourse(course);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setSelectedCourse(null);
    };

    const closeMontessoriPopup = () => {
        setIsMontessoriPopupOpen(false);
    };

    return (
        <div>
            <Courses onCourseSelect={handleCourseSelect} />
            <Educators />
            <CoursePopup
                isOpen={isPopupOpen}
                onClose={closePopup}
                course={selectedCourse}
            />
            <MontessoriOfferPopup
                isOpen={isMontessoriPopupOpen}
                onClose={closeMontessoriPopup}
            />
        </div>
    );
};

export default CoursesPage;