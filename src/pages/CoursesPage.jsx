import React, { useState } from 'react';
import FeaturedMontessori from '../components/FeaturedMontessori';
import Courses from '../components/Courses';
import Educators from '../components/Educators';
import CoursePopup from '../components/CoursePopup';

const CoursesPage = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleCourseSelect = (course) => {
        setSelectedCourse(course);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setSelectedCourse(null);
    };

    return (
        <div>
            <FeaturedMontessori />
            <Courses onCourseSelect={handleCourseSelect} />
            <Educators />
            <CoursePopup
                isOpen={isPopupOpen}
                onClose={closePopup}
                course={selectedCourse}
            />
        </div>
    );
};

export default CoursesPage;