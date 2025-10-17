import React, { useState } from 'react';

const SelfAssessment = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const questions = [
        {
            question: "How many years of professional experience do you have?",
            options: ["0-1 year", "2-3 years", "4-6 years", "7+ years"]
        },
        {
            question: "What is your current skill level in your field?",
            options: ["Beginner", "Intermediate", "Advanced", "Expert"]
        },
        {
            question: "How familiar are you with industry-standard tools?",
            options: ["Not familiar", "Somewhat familiar", "Very familiar", "Expert level"]
        },
        {
            question: "Have you completed any professional certifications?",
            options: ["None", "1-2 certifications", "3-5 certifications", "5+ certifications"]
        }
    ];

    const handleAnswer = (answerIndex) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = answerIndex;
        setAnswers(newAnswers);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const calculateLevel = () => {
        const totalScore = answers.reduce((sum, answer) => sum + answer, 0);
        if (totalScore <= 3) return { level: "WSQF Level 1-2", description: "Basic Skills - Start with foundational courses" };
        if (totalScore <= 7) return { level: "WSQF Level 3-4", description: "Intermediate Skills - Build on existing knowledge" };
        if (totalScore <= 11) return { level: "WSQF Level 5-6", description: "Advanced Skills - Specialize in your field" };
        return { level: "WSQF Level 7-8", description: "Expert Skills - Leadership and mastery level" };
    };

    const resetAssessment = () => {
        setCurrentQuestion(0);
        setAnswers([]);
        setShowResult(false);
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Skill Self-Assessment</h2>

                <div className="max-w-2xl mx-auto">
                    {!showResult ? (
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm text-gray-600">Question {currentQuestion + 1} of {questions.length}</span>
                                    <span className="text-sm text-gray-600">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                        style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                                    ></div>
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-6">{questions[currentQuestion].question}</h3>

                            <div className="space-y-3">
                                {questions[currentQuestion].options.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswer(index)}
                                        className="w-full text-left p-3 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition duration-300"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your Assessment Result</h3>
                            <div className="bg-blue-50 p-6 rounded-lg mb-6">
                                <h4 className="text-xl font-bold text-blue-600 mb-2">{calculateLevel().level}</h4>
                                <p className="text-gray-700">{calculateLevel().description}</p>
                            </div>
                            <button
                                onClick={resetAssessment}
                                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                Take Assessment Again
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SelfAssessment;