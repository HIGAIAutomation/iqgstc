import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getCourseByCode } from '../utils/courseUtils';

const CourseSubjectDetails = () => {
    const { divisionId, subDivisionId, courseCode } = useParams();
    const navigate = useNavigate();

    // Get course data from JSON
    const courseData = getCourseByCode(courseCode);

    // Prepare subjects data - handle empty arrays
    const subjects = courseData?.subjects || [];

    // For now, display a message if subjects are empty
    const hasSubjects = subjects && subjects.length > 0;

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
                        <Link to={`/courses/${divisionId}/${encodeURIComponent(subDivisionId)}`} className="hover:text-blue-600 transition-colors">{subDivisionId}</Link>
                        <span>/</span>
                        <span className="text-gray-900 font-medium">{courseCode}</span>
                    </nav>
                </motion.div>

                {/* Course Header */}
                <motion.div
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-professional mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        COURSE NAME: {courseData?.name || 'Course Not Found'}
                    </h1>
                    <p className="text-xl text-gray-600 mb-2">
                        COURSE DURATION: {courseData?.duration || 'N/A'}
                    </p>
                    <p className="text-lg text-blue-600 font-semibold">
                        COURSE CODE: {courseCode}
                    </p>
                    {courseCode.startsWith('CE') && (
                        <div className="mt-4">
                            <button
                                onClick={() => {
                                    navigate(`/contact?course=${encodeURIComponent(courseData?.name || courseCode)}`);
                                }}
                                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all font-semibold"
                            >
                                Join Now
                            </button>
                        </div>
                    )}
                </motion.div>

                {/* Subject Details */}
                {courseData && hasSubjects ? (
                    <motion.div
                        className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-professional mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full table-auto">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">SNo</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Subject Code</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Subject</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {subjects.map((subject, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                            <td className="px-4 py-3 text-sm text-gray-900">{index + 1}</td>
                                            <td className="px-4 py-3 text-sm font-mono text-blue-600">{subject.code}</td>
                                            <td className="px-4 py-3 text-sm text-gray-900">{subject.name}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                ) : courseData ? (
                    <motion.div
                        className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-professional text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-gray-500 text-lg">Subject details are currently being populated for this course.</p>
                    </motion.div>
                ) : null}

                {!courseData && (
                    <motion.div
                        className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-professional text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-gray-500 text-lg">Course details not found.</p>
                    </motion.div>
                )}

                {/* Back Button */}
                <motion.div
                    className="text-center mt-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Link
                        to={`/courses/${divisionId}/${encodeURIComponent(subDivisionId)}`}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Course List
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default CourseSubjectDetails;