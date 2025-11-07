import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categorizeCourses } from '../utils/courseUtils';

const CoursePopup = ({ isOpen, onClose, course }) => {
    const navigate = useNavigate();
    if (!isOpen) return null;

    if (!course) {
        console.error('CoursePopup: course prop is null or undefined');
        return null;
    }

    const { name, duration, subjects } = course;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto shadow-lg border border-gray-200"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-6">
                    <h2
                        className="text-2xl font-bold text-gray-800 cursor-pointer hover:text-blue-600 transition-colors"
                        onClick={() => {
                            // Find the course division and sub-division to navigate
                            const categorizedCourses = categorizeCourses();
                            for (const [division, subDivisions] of Object.entries(categorizedCourses)) {
                                for (const [subDivision, courses] of Object.entries(subDivisions)) {
                                    if (courses.some(c => c.code === course.code)) {
                                        navigate(`/courses/${encodeURIComponent(division)}/${encodeURIComponent(subDivision)}`);
                                        onClose();
                                        return;
                                    }
                                }
                            }
                        }}
                    >
                        {name}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-3xl leading-none transition-colors"
                    >
                        ×
                    </button>
                </div>
                <p className="text-lg text-gray-700 mb-4">Duration: {duration}</p>
                {course.code.startsWith('CE') && (
                    <div className="mb-4">
                        <button
                            onClick={() => {
                                navigate(`/contact?course=${encodeURIComponent(course.name)}`);
                                onClose();
                            }}
                            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all font-semibold"
                        >
                            Join Now
                        </button>
                    </div>
                )}
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
                            {subjects && subjects.length > 0 ? (
                                subjects.map((subject, index) => (
                                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="px-4 py-3 text-sm text-gray-900">{index + 1}</td>
                                        <td className="px-4 py-3 text-sm font-mono text-blue-600">{subject.code}</td>
                                        <td className="px-4 py-3 text-sm text-gray-900">{subject.name}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3" className="px-4 py-3 text-center text-gray-500">No subjects available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CoursePopup;