import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categorizeCourses } from '../utils/courseUtils';
import CoursePopup from '../components/CoursePopup';

const CourseDetails = () => {
    const { divisionId, subDivisionId } = useParams();

    // State for popup
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);

    // Get dynamic course data from JSON
    const categorizedCourses = categorizeCourses();
    const courses = categorizedCourses[divisionId]?.[subDivisionId] || [];

    // Handle course click for CE courses
    const handleCourseClick = (course) => {
        if (course.code.startsWith('CE')) {
            setSelectedCourse(course);
            setIsPopupOpen(true);
        }
    };


    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden min-h-screen">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Breadcrumb */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <nav className="flex items-center space-x-2 text-sm text-gray-600">
                        <Link to="/courses" className="hover:text-blue-600 transition-colors">Courses</Link>
                        <span>/</span>
                        <Link to={`/courses/${divisionId}`} className="hover:text-blue-600 transition-colors">{divisionId}</Link>
                        <span>/</span>
                        <span className="text-gray-900 font-medium">{subDivisionId}</span>
                    </nav>
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {subDivisionId} - Course List
                </motion.h1>

                <motion.p
                    className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Complete list of courses available in {subDivisionId} ({courses.length} courses)
                </motion.p>

                {/* Course Table */}
                <motion.div
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-professional"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">SNo</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Course Code</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Course Name</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map((course, index) => (
                                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="px-4 py-3 text-sm text-gray-900">{index + 1}</td>
                                        <td className="px-4 py-3 text-sm font-mono text-blue-600">
                                            {course.code.startsWith('CE') ? (
                                                <button
                                                    onClick={() => handleCourseClick(course)}
                                                    className="hover:underline cursor-pointer bg-transparent border-none p-0"
                                                >
                                                    {course.code}
                                                </button>
                                            ) : (
                                                <Link
                                                    to={`/courses/${divisionId}/${encodeURIComponent(subDivisionId)}/${course.code}`}
                                                    className="hover:underline"
                                                >
                                                    {course.code}
                                                </Link>
                                            )}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-900">{course.name}</td>
                                        <td className="px-4 py-3 text-sm text-gray-600">{course.duration}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {courses.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">No courses found for this division.</p>
                        </div>
                    )}
                </motion.div>

                {/* Back Button */}
                <motion.div
                    className="text-center mt-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Link
                        to={`/courses/${divisionId}`}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to {divisionId}
                    </Link>
                </motion.div>
            </div>

            {/* Course Popup */}
            <CoursePopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                course={selectedCourse}
            />
        </section>
    );
};

export default CourseDetails;