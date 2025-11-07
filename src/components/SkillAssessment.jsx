import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const SkillAssessment = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [showAssessment, setShowAssessment] = useState(false);
    const [contactForm, setContactForm] = useState({ name: '', phone: '' });
    const [showContactForm, setShowContactForm] = useState(false);
    const [assessmentCompleted, setAssessmentCompleted] = useState(false);

    const questions = [
        {
            question: "What is your current skill level in your chosen field?",
            options: ["Beginner", "Intermediate", "Advanced", "Expert"]
        },
        {
            question: "How many years of experience do you have?",
            options: ["0-1 year", "2-3 years", "4-5 years", "6+ years"]
        },
        {
            question: "What type of certification are you interested in?",
            options: ["Basic Certification", "Advanced Certification", "Specialized Training", "Master Certification"]
        },
        {
            question: "What is your primary goal?",
            options: ["Career Advancement", "Skill Development", "Entrepreneurship", "Personal Growth"]
        }
    ];

    const handleAnswer = (answer) => {
        setAnswers({ ...answers, [currentQuestion]: answer });
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowContactForm(true);
        }
    };

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        try {
            await emailjs.send(
                'service_l5lz7lm',
                'template_ultbkye',
                {
                    fullName: contactForm.name,
                    phone: contactForm.phone,
                    email: 'assessment@iqgstc.com', // Placeholder email for assessment
                    message: `Skill Assessment Results:\n${Object.entries(answers).map(([q, a]) => `Q${parseInt(q)+1}: ${a}`).join('\n')}\n\nRecommendation: ${getRecommendation()}`
                },
                'XjZ0cPS7pyiw7nEmZ'
            );
            setShowResult(true);
            setShowContactForm(false);
        } catch (error) {
            console.error('Email send failed:', error);
            alert('Failed to submit assessment. Please try again.');
        }
    };

    const resetAssessment = () => {
        setCurrentQuestion(0);
        setAnswers({});
        setShowResult(false);
        setShowContactForm(false);
        setContactForm({ name: '', phone: '' });
        setAssessmentCompleted(true);
        localStorage.setItem('skillAssessmentCompleted', 'true');
        // Trigger Montessori popup after assessment completion
        setTimeout(() => {
            // This will be handled by the parent component or global state
            window.dispatchEvent(new CustomEvent('assessmentCompleted'));
        }, 1000);
    };

    useEffect(() => {
        // Check if assessment was already shown in this session
        const shown = sessionStorage.getItem('skillAssessmentShown');
        const completed = localStorage.getItem('skillAssessmentCompleted');

        if (!completed && !shown) {
            const timer = setTimeout(() => {
                setShowAssessment(true);
                sessionStorage.setItem('skillAssessmentShown', 'true');
            }, 3000); // 3 seconds for appearance

            return () => {
                clearTimeout(timer);
            };
        }
    }, []);

    const getRecommendation = () => {
        const score = Object.values(answers).reduce((acc, answer, index) => {
            return acc + (answer === "Beginner" || answer === "0-1 year" ? 1 : 2);
        }, 0);

        if (score <= 4) return "We recommend starting with our Basic Certification courses to build a strong foundation.";
        if (score <= 6) return "Our Intermediate programs would be perfect for your current skill level.";
        return "You're ready for our Advanced or Specialized training programs.";
    };

    return (
        <>
            {/* Skill Assessment Popup - Responsive sizing */}
            {showAssessment && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-lg">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold">Quick Skill Assessment</h2>
                                    <p className="text-blue-100 mt-2">Take our 4-question assessment to get personalized course recommendations</p>
                                </div>
                                <button
                                    onClick={() => setShowAssessment(false)}
                                    className="text-white hover:text-gray-200 text-3xl font-light"
                                >
                                    ×
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            {!showResult && !showContactForm ? (
                                <div>
                                    <div className="mb-8">
                                        <div className="flex justify-between items-center mb-6">
                                            <span className="text-lg font-medium text-gray-500">
                                                Question {currentQuestion + 1} of {questions.length}
                                            </span>
                                            <div className="w-full bg-gray-200 rounded-full h-3 ml-6 max-w-xs">
                                                <div
                                                    className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                                                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
                                            {questions[currentQuestion].question}
                                        </h3>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                        {questions[currentQuestion].options.map((option, index) => (
                                            <motion.button
                                                key={index}
                                                onClick={() => handleAnswer(option)}
                                                className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 text-left group"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <span className="text-lg font-medium text-gray-700 group-hover:text-blue-600">
                                                    {option}
                                                </span>
                                            </motion.button>
                                        ))}
                                    </div>
                                </div>
                            ) : showContactForm ? (
                                <motion.div
                                    className="text-center max-w-md mx-auto"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="mb-8">
                                        <svg className="w-20 h-20 text-blue-500 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        <h3 className="text-3xl font-bold text-gray-800 mb-4">Almost Done!</h3>
                                        <p className="text-gray-600 text-lg mb-8">Please provide your contact details to receive your personalized assessment results.</p>
                                    </div>

                                    <form onSubmit={handleContactSubmit} className="space-y-6">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Your Full Name"
                                                value={contactForm.name}
                                                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                                                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="tel"
                                                placeholder="Your Phone Number"
                                                value={contactForm.phone}
                                                onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                                                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                                                required
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold text-lg"
                                        >
                                            Get My Results
                                        </button>
                                    </form>
                                </motion.div>
                            ) : (
                                <motion.div
                                    className="text-center max-w-2xl mx-auto"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="mb-8">
                                        <svg className="w-20 h-20 text-green-500 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <h3 className="text-3xl font-bold text-gray-800 mb-6">Assessment Complete!</h3>
                                        <p className="text-gray-600 text-xl mb-8">{getRecommendation()}</p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                                        <button
                                            onClick={resetAssessment}
                                            className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
                                        >
                                            Take Assessment Again
                                        </button>
                                        <a
                                            href="/courses"
                                            className="inline-block bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition duration-300 font-semibold text-center"
                                        >
                                            View Courses
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default SkillAssessment;