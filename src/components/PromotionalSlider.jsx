import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Phone, MapPin, CheckCircle, Award } from 'lucide-react';

const PromotionalSlider = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const slides = [
        {
            id: 1,
            type: 'montessori',
            title: 'International Montessori Teacher Training',
            subtitle: 'IQ Kids Montessori PreSchool Global Skills Training Centre',
            eligibility: '10th | +2 | Any Degree',
            duration: '6 Months',
            outcome: 'Become a Certified Montessori Teacher',
            outcomeDetail: 'with strong practical and classroom skills.',
            discount: '₹10,000',
            discountNote: 'Flat Discount',
            limitedOffer: 'Only for First 25 Candidates',
            careerAdvantages: [
                'Montessori Schools',
                'Playschools',
                'Early Childhood Centres',
                'Own Preschool Setup Support'
            ],
            contact: '900 388 9990',
            address: 'H17, Moon Mahal (Opp), Pothigai Nagar, Near Jeba Garden, Palayamkottai, Tirunelveli - 627007'
        },
        {
            id: 2,
            type: 'maths',
            title: 'CBSE 10th Std MATHS',
            subtitle: 'TUITION CENTRE',
            features: [
                'Concept-Based Teaching',
                'Exam-Oriented Approach',
                'Individual Attention'
            ],
            whyChoose: [
                '15+ Years Teaching Experience',
                'Regular Tests & Discussion',
                'Performance Tracking',
                'Easy Problem-Solving Techniques'
            ],
            idealFor: [
                'CBSE Class 10 Students',
                'Students needing strong fundamentals',
                'Exam confidence building'
            ],
            offer: 'FREE DEMO CLASS',
            offerDetail: '1 Week Trial Available',
            contact: '900 388 9990',
            name: 'IQ Kids Montessori Preschool Global Skills Training Centre',
            address: 'H17, Moon Mahal (Opp), Pothigai Nagar, Near Jeba Garden, Palayamkottai, Tirunelveli - 627007'
        }
    ];

    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, [slides.length, isPaused]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    const goToSlide = (index) => setCurrentSlide(index);

    return (
        <section className="bg-gray-50 relative overflow-hidden border-b border-gray-200">
            <div className="w-full">
                <div
                    className="relative group h-full"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <AnimatePresence mode="wait">
                        {currentSlide === 0 ? (
                            // Montessori Training Card
                            <motion.div
                                key="montessori"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
                                <div className="max-w-[1600px] mx-auto px-4 py-8 md:py-10">
                                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                                        {/* Header Title Section - Col 4 */}
                                        <div className="lg:col-span-4 text-center lg:text-left lg:border-r border-gray-100 lg:pr-8">
                                            <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-md font-semibold text-xs uppercase tracking-wider mb-4">
                                                Certification Program
                                            </span>
                                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                                                International Montessori Teacher Training
                                            </h2>
                                            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto lg:mx-0">
                                                IQ Kids Montessori PreSchool Global Skills Training Centre
                                            </p>

                                            <button
                                                onClick={() => navigate('/contact')}
                                                className="hidden lg:inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white rounded-md px-8 py-3.5 transition-colors duration-200 font-medium text-sm w-full md:w-auto"
                                            >
                                                <Phone className="w-4 h-4 mr-2" />
                                                Contact Us
                                            </button>
                                        </div>

                                        {/* Content Grid - Col 8 */}
                                        <div className="lg:col-span-8">
                                            <div className="grid md:grid-cols-3 gap-6">
                                                {/* Features */}
                                                <div className="space-y-4">
                                                    <div className="bg-blue-50/50 p-5 rounded-lg border border-blue-100 hover:shadow-sm transition-shadow">
                                                        <h4 className="text-blue-900 font-semibold mb-2 text-sm flex items-center uppercase tracking-wide">
                                                            <CheckCircle className="w-4 h-4 mr-2 text-blue-600" /> Eligibility
                                                        </h4>
                                                        <p className="text-gray-900 font-medium ml-6">{slides[0].eligibility}</p>
                                                    </div>
                                                    <div className="bg-blue-50/50 p-5 rounded-lg border border-blue-100 hover:shadow-sm transition-shadow">
                                                        <h4 className="text-blue-900 font-semibold mb-2 text-sm flex items-center uppercase tracking-wide">
                                                            <CheckCircle className="w-4 h-4 mr-2 text-blue-600" /> Duration
                                                        </h4>
                                                        <p className="text-gray-900 font-medium ml-6">{slides[0].duration}</p>
                                                    </div>
                                                </div>

                                                {/* Advantages */}
                                                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 h-full hover:shadow-sm transition-shadow">
                                                    <h3 className="font-semibold text-gray-900 text-sm mb-4 uppercase tracking-wider border-b border-gray-200 pb-2">Career Advantage</h3>
                                                    <div className="space-y-3">
                                                        {slides[0].careerAdvantages.map((item, idx) => (
                                                            <div key={idx} className="flex items-start gap-2.5">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 flex-shrink-0"></div>
                                                                <span className="text-sm text-gray-700 leading-snug font-medium">{item}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Offer & Outcome */}
                                                <div className="space-y-4">
                                                    <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-100 text-center relative overflow-hidden hover:shadow-sm transition-shadow group">
                                                        <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:opacity-10 transition-opacity">
                                                            <Award className="w-12 h-12 text-yellow-600" />
                                                        </div>
                                                        <div className="text-2xl font-bold text-gray-900 mb-1">{slides[0].discount} OFF</div>
                                                        <div className="text-xs font-bold text-yellow-800 uppercase tracking-wide">{slides[0].limitedOffer}</div>
                                                    </div>

                                                    <div className="p-4 border border-gray-100 rounded-lg bg-white hover:shadow-sm transition-shadow">
                                                        <div className="flex items-start gap-3">
                                                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                            <div className="text-sm">
                                                                <span className="block font-bold text-gray-900 text-xs uppercase mb-1">Outcome</span>
                                                                <span className="text-gray-600 text-xs leading-relaxed block font-medium">{slides[0].outcome}</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-2 text-gray-400 text-xs justify-center md:justify-start pt-2">
                                                        <MapPin className="w-3 h-3 flex-shrink-0" />
                                                        <span className="truncate max-w-full">Palayamkottai, Tirunelveli</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => navigate('/contact')}
                                                className="lg:hidden w-full mt-8 items-center justify-center bg-gray-900 hover:bg-gray-800 text-white rounded-md px-6 py-3.5 transition-colors duration-200 font-medium text-sm flex shadow-lg shadow-gray-200"
                                            >
                                                <Phone className="w-4 h-4 mr-2" />
                                                Contact Us
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            // Maths Tuition Card
                            <motion.div
                                key="maths"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
                                <div className="max-w-[1600px] mx-auto px-4 py-8 md:py-10">
                                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                                        {/* Header Title Section - Col 4 */}
                                        <div className="lg:col-span-4 text-center lg:text-left lg:border-r border-gray-100 lg:pr-8">
                                            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-md font-semibold text-xs uppercase tracking-wider mb-4">
                                                Tuition Centre
                                            </span>
                                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                                                CBSE 10th Std MATHS
                                            </h2>
                                            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto lg:mx-0">
                                                Expert guidance for board exam success with concept-based methodologies
                                            </p>

                                            <button
                                                onClick={() => navigate('/contact')}
                                                className="hidden lg:inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white rounded-md px-8 py-3.5 transition-colors duration-200 font-medium text-sm w-full md:w-auto"
                                            >
                                                <Phone className="w-4 h-4 mr-2" />
                                                Contact Us
                                            </button>
                                        </div>

                                        {/* Content Grid - Col 8 */}
                                        <div className="lg:col-span-8">
                                            <div className="grid md:grid-cols-3 gap-6">
                                                {/* Features */}
                                                <div className="space-y-4 bg-blue-50/50 p-5 rounded-lg border border-blue-100 h-full hover:shadow-sm transition-shadow">
                                                    <h4 className="text-blue-900 font-semibold mb-3 text-sm uppercase tracking-wide border-b border-blue-200 pb-2">
                                                        Key Features
                                                    </h4>
                                                    <div className="space-y-3">
                                                        {slides[1].features.map((feature, idx) => (
                                                            <div key={idx} className="flex items-start gap-2.5">
                                                                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                                                <span className="text-gray-800 text-sm font-medium leading-snug">{feature}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Why Choose Us */}
                                                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 h-full hover:shadow-sm transition-shadow">
                                                    <h3 className="font-semibold text-gray-900 text-sm mb-4 uppercase tracking-wider border-b border-gray-200 pb-2">Why Choose Us?</h3>
                                                    <div className="space-y-3">
                                                        {slides[1].whyChoose.map((item, idx) => (
                                                            <div key={idx} className="flex items-start gap-2.5">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0"></div>
                                                                <span className="text-sm text-gray-700 leading-snug font-medium">{item}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Offer & Ideal For */}
                                                <div className="space-y-4">
                                                    <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-100 text-center relative overflow-hidden hover:shadow-sm transition-shadow">
                                                        <div className="text-2xl font-bold text-gray-900 mb-1">{slides[1].offer}</div>
                                                        <div className="text-xs font-bold text-yellow-800 uppercase tracking-wide">{slides[1].offerDetail}</div>
                                                    </div>

                                                    <div className="p-4 border border-gray-100 rounded-lg bg-white hover:shadow-sm transition-shadow">
                                                        <span className="block font-bold text-gray-900 text-xs uppercase mb-3">Ideal For</span>
                                                        <div className="space-y-2.5">
                                                            {slides[1].idealFor.slice(0, 3).map((item, idx) => (
                                                                <div key={idx} className="flex items-center gap-2">
                                                                    <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                                                                    <span className="text-gray-600 text-xs font-medium">{item}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-2 text-gray-400 text-xs justify-center md:justify-start pt-2">
                                                        <MapPin className="w-3 h-3 flex-shrink-0" />
                                                        <span className="truncate max-w-full">Palayamkottai, Tirunelveli</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => navigate('/contact')}
                                                className="lg:hidden w-full mt-8 items-center justify-center bg-gray-900 hover:bg-gray-800 text-white rounded-md px-6 py-3.5 transition-colors duration-200 font-medium text-sm flex shadow-lg shadow-gray-200"
                                            >
                                                <Phone className="w-4 h-4 mr-2" />
                                                Contact Us
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Minimal Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 lg:left-8 top-1/2 -translate-y-1/2 bg-white text-gray-400 hover:text-gray-900 p-3 rounded-full transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 shadow-md border border-gray-100 transform -translate-x-4 group-hover:translate-x-0"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-2 lg:right-8 top-1/2 -translate-y-1/2 bg-white text-gray-400 hover:text-gray-900 p-3 rounded-full transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 shadow-md border border-gray-100 transform translate-x-4 group-hover:translate-x-0"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Slide Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${index === currentSlide
                                    ? 'bg-gray-900 w-6 h-1.5'
                                    : 'bg-gray-300 w-1.5 h-1.5 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromotionalSlider;
