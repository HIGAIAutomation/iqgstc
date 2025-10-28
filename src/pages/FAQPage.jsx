import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <motion.div
            className="border-b border-gray-200 last:border-b-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <button
                className="w-full text-left py-6 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                onClick={onClick}
            >
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">{question}</h3>
                    <motion.svg
                        className="w-6 h-6 text-blue-600 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                </div>
            </button>
            <motion.div
                className="overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
            >
                <div className="px-4 pb-6">
                    <p className="text-gray-600 leading-relaxed">{answer}</p>
                </div>
            </motion.div>
        </motion.div>
    );
};

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
            question: "What is IQ Global Skills Training Centre?",
            answer: "IQGSTc is a premier educational institution dedicated to providing world-class skill training and certification programs. We are partnered with the World Skill Council (WSC) to offer internationally recognized certifications that open doors to global career opportunities."
        },
        {
            question: "What courses do you offer?",
            answer: "We offer a comprehensive range of skill development courses aligned with World Skills Qualification Framework (WSQF). Our courses cover various domains including IT, healthcare, manufacturing, hospitality, and many more. Each course leads to internationally recognized certifications."
        },
        {
            question: "Are your certifications recognized globally?",
            answer: "Yes, our certifications are issued through partnership with World Skill Council (WSC) and are recognized internationally. These certifications enhance employability and provide alternative routes to qualify at par with higher education."
        },
        {
            question: "How do I enroll in a course?",
            answer: "You can enroll in our courses by visiting our website, selecting your desired course, and following the enrollment process. We offer both online and offline learning options. Contact us at iqgstc@gmail.com or call +91 90038 89990 for enrollment assistance."
        },
        {
            question: "What is the duration of your courses?",
            answer: "Course duration varies depending on the program and learning format. Most certificate courses range from 3-12 months, while diploma programs may take 12-24 months. We also offer short-term skill development workshops."
        },
        {
            question: "Do you provide study materials?",
            answer: "Yes, we provide comprehensive study materials including digital resources, practice tests, video tutorials, and access to our learning management system. Additional study materials are available on our BSSVE partner website."
        },
        {
            question: "What are the payment options?",
            answer: "We accept various payment methods including online payments, bank transfers, UPI, and card payments. Course fees vary depending on the program. Contact us for detailed fee structure and payment plans."
        },
        {
            question: "Do you offer placement assistance?",
            answer: "Yes, we provide career guidance and placement assistance to our students. Our industry partnerships help connect qualified students with employment opportunities. We also offer resume building and interview preparation support."
        },
        {
            question: "Can I access courses online?",
            answer: "Yes, we offer both online and blended learning options. Our online platform provides 24/7 access to course materials, interactive sessions, and assessments. Some practical courses may require in-person attendance."
        },
        {
            question: "What if I need technical support?",
            answer: "Our technical support team is available to help with any platform or course-related issues. You can reach us via email at iqgstc@gmail.com, phone at +91 90038 89990, or through our WhatsApp support. We also offer 24/7 emergency support for critical issues."
        },
        {
            question: "Do you provide certificates after course completion?",
            answer: "Yes, upon successful completion of the course and assessments, you will receive a certificate from IQGSTc and World Skill Council. These certificates are digitally verifiable and recognized internationally."
        },
        {
            question: "What are your business hours?",
            answer: "Our office hours are Monday to Friday, 9:00 AM to 7:00 PM, and Saturday 9:00 AM to 5:00 PM. We provide 24/7 support through WhatsApp and email for urgent queries."
        },
        {
            question: "Where is your training center located?",
            answer: "Our main training center is located at H17, Moon Mahal, opposite Pothigai Nagar, near Jeba Garden, Pothigai Nagar, Tirunelveli, Tamil Nadu 627007. We also offer online training programs accessible from anywhere."
        },
        {
            question: "Do you offer corporate training programs?",
            answer: "Yes, we provide customized corporate training programs for organizations. Our programs can be tailored to meet specific industry requirements and skill development needs. Contact us for corporate training inquiries."
        },
        {
            question: "What makes IQGSTc different from other training centers?",
            answer: "IQGSTc stands out due to our partnership with World Skill Council, internationally recognized certifications, comprehensive curriculum aligned with WSQF, experienced faculty, modern learning platforms, and strong industry connections for placements."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Find answers to common questions about our courses, certifications, and services. If you don't find what you're looking for, feel free to contact us.
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="divide-y divide-gray-200">
                        {faqData.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => toggleFAQ(index)}
                            />
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Still have questions?</h3>
                        <p className="text-gray-600 mb-6">
                            Can't find the answer you're looking for? Our support team is here to help.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:iqgstc@gmail.com"
                                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Email Us
                            </a>
                            <a
                                href="https://wa.me/919003889990"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                </svg>
                                WhatsApp Support
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default FAQPage;