import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CourseDetails = () => {
    const { divisionId, subDivisionId } = useParams();

    // Course data (same as in Courses.jsx)
    const courseDetails = {
        'ALLIED HEALTH EDUCATION': [
            { code: 'AHE001', name: 'BSS DIPLOMA IN MEDICAL LABORATORY TECHNOLOGY', duration: 'TWO YEARS' },
            { code: 'AHE002', name: 'MEDICAL LABORATORY TECHNICIAN', duration: 'ONE YEAR' },
            { code: 'AHE003', name: 'BSS DIPLOMA IN X-RAY TECHNOLOGY', duration: 'TWO YEARS' },
            { code: 'AHE004', name: 'X-RAY TECHNICIAN', duration: 'ONE YEAR' },
            { code: 'AHE005', name: 'BSS DIPLOMA IN OPERATION THEATRE TECHNOLOGY', duration: 'TWO YEARS' },
            { code: 'AHE006', name: 'OPERATION THEATRE TECHNICIAN', duration: 'ONE YEAR' },
            { code: 'AHE007', name: 'LAB ASSISTANT', duration: 'ONE YEAR' },
            { code: 'AHE008', name: 'E C G TECHNICIAN', duration: 'SIX MONTHS' },
            { code: 'AHE009', name: 'CT SCAN TECHNICIAN', duration: 'ONE YEAR' },
            { code: 'AHE010', name: 'MRI SCAN TECHNICIAN', duration: 'ONE YEAR' },
            { code: 'AHE011', name: 'EYE TECHNICIAN', duration: 'ONE YEAR' },
            { code: 'AHE012', name: 'DENTAL TECHNICIAN', duration: 'ONE YEAR' },
            { code: 'AHE014', name: 'BSS DIPLOMA IN MEDICAL TRANSCRIPTION', duration: 'ONE YEAR' },
            { code: 'AHE016', name: 'BSS DIPLOMA IN OPTOMETRY', duration: 'TWO YEARS' },
            { code: 'AHE017', name: 'CERTIFICATE IN DIABETOLOGY', duration: 'ONE YEAR' },
            { code: 'AHE019', name: 'CERTIFICATE IN OPHTHALMIC ASSISTANT', duration: 'ONE YEAR' },
            { code: 'AHE020', name: 'ORTHO & TRAUMA CARE TECHNICIAN', duration: 'ONE YEAR' },
            { code: 'AHE021', name: 'DENTAL LAB TECHNICIAN', duration: 'ONE YEAR' },
            { code: 'AHE024', name: 'BSS DIPLOMA IN TRAUMA CARE & CASUALTY TECHNOLOGY', duration: 'TWO YEARS' },
            { code: 'AHE025', name: 'BSS DIPLOMA IN DIALYSIS TECHNOLOGY', duration: 'TWO YEARS' },
            { code: 'AHE026', name: 'MEDICAL EQUIPMENT TECHNICIAN', duration: 'ONE YEAR' },
            { code: 'AHE028', name: 'BSS DIPLOMA IN PALLIATIVE CARE THERAPIST', duration: 'ONE YEAR' },
            { code: 'AHE029', name: 'CERTIFICATE IN DIALYSIS TECHNOLOGY', duration: 'ONE YEAR' },
            { code: 'AHE030', name: 'BSS DIPLOMA IN ANESTHESIA TECHNOLOGY', duration: 'TWO YEARS' },
            { code: 'AHE031', name: 'BSS DIPLOMA IN MEDICAL EQUIPMENT TECHNOLOGY', duration: 'TWO YEARS' },
            { code: 'AHE032', name: 'BSS DIPLOMA IN ACCIDENT & EMERGENCY TECHNOLOGY', duration: 'TWO YEARS' },
            { code: 'AHE033', name: 'EMERGENCY PATIENT CARE TECHNICIAN', duration: 'ONE YEAR' },
            { code: 'AHE034', name: 'BSS POST DIPLOMA IN HEALTH CARE MANAGEMENT', duration: 'TWO YEARS' },
            { code: 'AHE035', name: 'PHYSIOTHERAPY TECHNICIAN', duration: 'ONE YEAR' },
            { code: 'AHE040', name: 'BSS DIPLOMA IN PHYSICIAN ASSISTANT', duration: 'TWO YEARS' },
            { code: 'AHE041', name: 'BSS DIPLOMA IN CRITICAL CARE MANAGEMENT', duration: 'TWO YEARS' },
            { code: 'AHE042', name: 'ICU TECHNICIAN', duration: 'ONE YEAR' },
            { code: 'AHE043', name: 'CERTIFICATE IN DIETICIAN', duration: 'ONE YEAR' },
            { code: 'AHE045', name: 'POST DIPLOMA IN OPERATION THEATRE MANAGEMENT', duration: 'ONE YEAR' },
            { code: 'AHE049', name: 'DENTAL HYGIENIST', duration: 'ONE YEAR' },
            { code: 'AHE052', name: 'BSS DIPLOMA IN GENERAL HEALTHCARE & MATERNITY ASSISTANT', duration: 'TWO YEARS' },
            { code: 'AHE053', name: 'AUDIO-METRY TECHNICIAN', duration: 'ONE YEAR' },
            { code: 'AHE055', name: 'BSS DIPLOMA IN LAPROSCOPY ASSISTANT', duration: 'ONE YEAR' },
            { code: 'AHE058', name: 'BSS DIPLOMA IN MEDICAL TRANSCRIPT TECHNICIAN', duration: 'ONE YEAR' },
            { code: 'AHE062', name: 'BSS DIPLOMA IN OPTOMETRY', duration: 'ONE YEAR' },
            { code: 'AHE063', name: 'BSS DIPLOMA IN ANESTHESIA TECHNICIAN', duration: 'ONE YEAR' },
            { code: 'AHE064', name: 'BSS DIPLOMA IN OPHTHALMIC ASSISTANCE', duration: 'ONE YEAR' },
            { code: 'AHE065', name: 'BSS DIPLOMA IN OPHTHALMIC ASSISTANT', duration: 'TWO YEARS' },
            { code: 'AHE066', name: 'BSS DIPLOMA IN MEDICAL RECORD SCIENCES', duration: 'TWO YEARS' },
            { code: 'AHE070', name: 'PHARMACY PROFESSION & COMMUNITY HEALTH', duration: 'SIX MONTHS' },
            { code: 'AHE074', name: 'BSS DIPLOMA IN E C G TECHNICIAN', duration: 'ONE YEAR' },
            { code: 'AHE075', name: 'BSS DIPLOMA IN EEG & EMG TECHNOLOGY', duration: 'TWO YEARS' },
            { code: 'AHE076', name: 'BSS DIPLOMA IN VISION CARE TECHNICIAN', duration: 'ONE YEAR' },
            { code: 'AHE077', name: 'BSS DIPLOMA IN ULTRA SONOGRAPHY TECHNICIAN', duration: 'ONE YEAR' },
            { code: 'AHE078', name: 'BSS DIPLOMA IN X RAY & IMAGING TECHNOLOGY', duration: 'TWO YEARS' },
            { code: 'AHE082', name: 'DIPLOMA IN DENTAL ASSISTANT', duration: 'ONE YEAR' },
            { code: 'AHE083', name: 'CERTIFICATE IN EMERGENCY MEDICAL SERVICES', duration: 'SIX MONTHS' },
            { code: 'AHE085', name: 'BSS DIPLOMA IN RURAL MEDICAL CARE PROVIDER', duration: 'TWO YEARS' },
            { code: 'AHE086', name: 'ADVANCED DIPLOMA IN PHYSICIAN ASSISTANT', duration: 'ONE YEAR' },
            { code: 'AHE087', name: 'BSS DIPLOMA IN OCCUPATIONAL HEALTH', duration: 'ONE YEAR' },
            { code: 'AHE088', name: 'ADVANCED DIPLOMA IN FORENSIC ODONTOLOGY', duration: 'ONE YEAR' },
            { code: 'AHE089', name: 'ADVANCED DIPLOMA IN MEDICAL LABORATORY TECHNOLOGY', duration: 'ONE YEAR' },
            { code: 'AHE090', name: 'BSS ADVANCED DIPLOMA IN GUIDANCE AND COUNSELLING', duration: 'ONE YEAR' },
            { code: 'AHE091', name: 'BSS ADVANCED DIPLOMA IN OPERATION THEATRE TECHNOLOGY', duration: 'ONE YEAR' },
            { code: 'AHE100', name: 'BSS DIPLOMA IN PSYCHOLOGICAL GUIDANCE & COUNSELING', duration: 'ONE YEAR' },
            { code: 'AHE101', name: 'ADVANCED DIPLOMA IN MEDICAL PSYCHOLOGY', duration: 'ONE YEAR' },
            { code: 'AHE102', name: 'BSS ADVANCED DIPLOMA IN CLINICAL LABORATORY TECHNOLOGY', duration: 'TWO YEARS' },
            { code: 'AHE106', name: 'BSS DIPLOMA IN BURNS MANAGEMENT AND SKIN BANKING', duration: 'ONE YEAR' },
            { code: 'AHE109', name: 'BSS ADVANCED DIPLOMA IN COUNSELING PSYCHOLOGY', duration: 'ONE YEAR' },
            { code: 'AHE111', name: 'BSS DIPLOMA IN TRICHOLOGY', duration: 'ONE YEAR' },
            { code: 'AHE112', name: 'CERTIFICATE IN PULMONARY FUNCTION TEST ( PFT ) TECHNICIAN', duration: 'SIX MONTHS' },
            { code: 'AHE113', name: 'BSS ADVANCED DIPLOMA IN DIALYSIS TECHNOLOGY', duration: 'ONE YEAR' },
            { code: 'AHE114', name: 'BSS DIPLOMA IN MID LEVEL OPHTHALMIC PERSONNEL', duration: 'TWO YEARS' },
            { code: 'AHE115', name: 'ADVANCED DIPLOMA IN EMBRYOLOGY LAB TECHNOLOGY', duration: 'ONE YEAR' },
            { code: 'AHE117', name: 'BSS CERTIFICATE IN MEDICAL LABORATORY TECHNICIAN', duration: 'ONE YEAR' },
            { code: 'AHE118', name: 'BSS DIPLOMA IN TRADITIONAL MANUAL BONE SETTING', duration: 'ONE YEAR' },
            { code: 'AHE119', name: 'CERTIFICATE COURSE IN DRUG ABUSE PREVENTION', duration: 'SIX MONTHS' },
            { code: 'AHE120', name: 'BSS DIPLOMA IN HOLISTIC DRUGLESS THERAPY WITH SPIRITUAL COUNSELLING', duration: 'SIX MONTHS' }
        ],
        'AGRICULTURE EDUCATION': [
            { code: 'AE001', name: 'BSS DIPLOMA IN AGRICULTURE AND ALLIED TECHNOLOGY', duration: 'TWO YEARS' },
            { code: 'AE002', name: 'BSS DIPLOMA IN HORTICULTURE', duration: 'TWO YEARS' },
            { code: 'AE003', name: 'BSS DIPLOMA IN COLD STORAGE TECHNOLOGY', duration: 'TWO YEARS' },
            { code: 'AE004', name: 'BEE KEEPING EQUIPMENT MANUFACTURING TECHNIQUES', duration: 'ONE YEAR' },
            { code: 'AE005', name: 'FARM EQUIPMENT MECHANIC', duration: 'ONE YEAR' },
            { code: 'AE006', name: 'BSS DIPLOMA IN PLANT PROTECTION', duration: 'TWO YEARS' },
            { code: 'AE007', name: 'TRACTOR AND POWER TILLER MECHANIC', duration: 'ONE YEAR' },
            { code: 'AE008', name: 'BSS DIPLOMA IN MEDICINAL PLANTS PROCESSING', duration: 'TWO YEARS' },
            { code: 'AE009', name: 'COCONUT- BY PRODUCTS PROCESSING TECHNICIAN', duration: 'SIX MONTHS' },
            { code: 'AE010', name: 'HORTICULTURE SALESMAN', duration: 'SIX MONTHS' },
            { code: 'AE011', name: 'PRESERVATION TECHNICIAN (HORTICULTURAL)', duration: 'SIX MONTHS' },
            { code: 'AE012', name: 'LABORATORY TECHNICIAN (HORTICULTURAL)', duration: 'SIX MONTHS' },
            { code: 'AE013', name: 'FLORICULTURE TECHNICIAN', duration: 'SIX MONTHS' },
            { code: 'AE014', name: 'FLOWERS AND PLANTS PACKAGING TECHNICIAN', duration: 'SIX MONTHS' },
            { code: 'AE015', name: 'LAND SPACING TECHNICIAN', duration: 'SIX MONTHS' },
            { code: 'AE016', name: 'FLORIST SALESMAN', duration: 'SIX MONTHS' },
            { code: 'AE017', name: 'AGRICULTURE SUPERVISOR', duration: 'ONE YEAR' },
            { code: 'AE018', name: 'BSS DIPLOMA IN AGRICULTURE SCIENCE', duration: 'TWO YEARS' },
            { code: 'AE019', name: 'PLANT PROTECTION TECHNICIAN', duration: 'ONE YEAR' },
            { code: 'AE020', name: 'BSS DIPLOMA IN VOCATIONAL INSTRUCTOR (CROP PRODUCTION)', duration: 'ONE YEAR' },
            { code: 'AE021', name: 'BSS DIPLOMA IN AGRICULTURE', duration: 'TWO YEARS' },
            { code: 'AE022', name: 'BSS DIPLOMA IN AGRO-BASED INDUSTRIAL MANAGEMENT', duration: 'TWO YEARS' },
            { code: 'AE023', name: 'PLANT NURSERY MAKING', duration: 'ONE MONTH' },
            { code: 'AE024', name: 'WATER SHED PROTECTION AND MANAGEMENT', duration: 'ONE MONTH' },
            { code: 'AE025', name: 'FODDER CROPS CULTIVATION', duration: 'ONE MONTH' },
            { code: 'AE026', name: 'BSS DIPLOMA IN CROPS PRODUCTION', duration: 'TWO YEARS' },
            { code: 'AE027', name: 'MUSHROOM CULTIVATION AND PROTECTION', duration: 'THREE MONTHS' },
            { code: 'AE028', name: 'HONEY BEE KEEPING TECHNICIAN', duration: 'ONE MONTH' },
            { code: 'AE029', name: 'RAIN WATER HARVESTING TECHNICIAN', duration: 'THREE MONTHS' },
            { code: 'AE030', name: 'SOIL CONSERVATION TECHNICIAN', duration: 'THREE MONTHS' },
            { code: 'AE031', name: 'VERMICULTURE TECHNICIAN', duration: 'SIX MONTHS' },
            { code: 'AE032', name: 'IRRIGATION EQUIPMENT MECHANIC', duration: 'SIX MONTHS' },
            { code: 'AE033', name: 'VANILLA CULTIVATION PLANT PROTECTION', duration: 'ONE MONTH' },
            { code: 'AE034', name: 'BSS DIPLOMA IN MEDICINAL PLANT CULTIVATION TECHNOLOGY', duration: 'TWO YEARS' },
            { code: 'AE035', name: 'HONEY PROCESSING TECHNICIAN', duration: 'ONE MONTH' },
            { code: 'AE036', name: 'AZZOLA CULTIVATION TECHNICIAN', duration: 'ONE MONTH' },
            { code: 'AE037', name: 'BSS DIPLOMA IN FOOD PRESERVATION TECHNOLOGY', duration: 'TWO YEARS' },
            { code: 'AE038', name: 'SEED PRODUCTION TECHNICIAN', duration: 'THREE MONTHS' },
            { code: 'AE039', name: 'BSS DIPLOMA IN FOOD TECHNOLOGY', duration: 'TWO YEARS' },
            { code: 'AE040', name: 'APIARY TECHNICIAN', duration: 'THREE MONTHS' },
            { code: 'AE041', name: 'CERTIFICATE IN AGRICULTURE SCIENCE', duration: 'ONE YEAR' },
            { code: 'AE042', name: 'CERTIFICATE COURSE IN AGRICULTURE CROP PRODUCTION', duration: 'THREE MONTHS' },
            { code: 'AE043', name: 'BSS DIPLOMA IN PLANT PROTECTION AND PESTICIDES MANAGEMENT', duration: 'ONE YEAR' },
            { code: 'AE044', name: 'BSS DIPLOMA IN HORTICULTURE SUPERVISOR TRAINING', duration: 'ONE YEAR' }
        ],
        'AUTOMOBILE EDUCATION': [
            { code: 'AME001', name: 'BSS DIPLOMA IN AUTOMOBILE TECHNOLOGY', duration: 'TWO YEARS' },
            { code: 'AME002', name: 'BSS DIPLOMA IN HEAVY MOTOR VEHICLE MECHANISM', duration: 'ONE YEAR' },
            { code: 'AME003', name: 'FOUR WHEELER MECHANIC (LMV)', duration: 'ONE YEAR' },
            { code: 'AME004', name: 'BSS DIPLOMA IN AUTOMOBILE ELECTRONICS TECHNOLOGY', duration: 'ONE YEAR' },
            { code: 'AME005', name: 'CAR A/C MECHANIC', duration: 'SIX MONTHS' },
            { code: 'AME006', name: 'SPRAY PAINTER', duration: 'SIX MONTHS' },
            { code: 'AME007', name: 'PLANT MAINTENANCE TECHNICIAN', duration: 'SIX MONTHS' },
            { code: 'AME008', name: 'JUNIOR PLANT OPERATOR', duration: 'SIX MONTHS' },
            { code: 'AME009', name: 'TWO WHEELER MECHANIC', duration: 'SIX MONTHS' },
            { code: 'AME010', name: 'BACKHOE LOADER OPERATION & MAINTENANCE', duration: 'SIX MONTHS' },
            { code: 'AME011', name: 'DIESEL FUEL SYSTEM SERVICE MECHANIC', duration: 'SIX MONTHS' },
            { code: 'AME012', name: 'CRANE OPERATION & MAINTENANCE', duration: 'TWO MONTHS' },
            { code: 'AME013', name: 'FORK LIFT OPERATION & MAINTENANCE', duration: 'THREE MONTHS' },
            { code: 'AME014', name: 'BSS DIPLOMA IN INSPECTOR OF AUTO MANUFACTURING INDUSTRY', duration: 'ONE YEAR' },
            { code: 'AME015', name: 'HYDRAULIC EXCAVATOR OPERATION & MAINTENANCE', duration: 'THREE MONTHS' },
            { code: 'AME016', name: 'BSS DIPLOMA IN ADVANCED DIESEL ENGINE TECHNOLOGY', duration: 'ONE YEAR' },
            { code: 'AME017', name: 'VEHICLE SURVEYOR', duration: 'SIX MONTHS' },
            { code: 'AME018', name: 'CERTIFICATE IN AUTOMOBILE ENGINEERING', duration: 'ONE YEAR' },
            { code: 'AME019', name: 'HEAVY CRANE OPERATION & MANAGEMENT', duration: 'THREE MONTHS' },
            { code: 'AME020', name: 'BSS DIPLOMA IN ADVANCED PETROL ENGINE TECHNOLOGY', duration: 'ONE YEAR' },
            { code: 'AME021', name: 'BSS DIPLOMA IN CNC PROGRAMMER', duration: 'ONE YEAR' },
            { code: 'AME022', name: 'GAS WELDER', duration: 'SIX MONTHS' },
            { code: 'AME023', name: 'CNC MACHINE OPERATION (TURNING & MILLING)', duration: 'ONE YEAR' },
            { code: 'AME024', name: 'LIGHT MOTOR VEHICLE MECHANISM', duration: 'ONE YEAR' },
            { code: 'AME025', name: 'DIESEL MECHANISM (STATIONERY & MOBILE ENGINES)', duration: 'ONE YEAR' },
            { code: 'AME026', name: 'FORK LIFT DRIVING CUM MAINTENANCE', duration: 'ONE YEAR' },
            { code: 'AME027', name: 'SHEET METAL WORKS & TINKERING', duration: 'ONE YEAR' },
            { code: 'AME028', name: 'BSS DIPLOMA IN AUTOMOBILE ENGINEERING TECHNIQUES', duration: 'ONE YEAR' },
            { code: 'AME029', name: 'BSS DIPLOMA IN FOUR WHEELER MECHANISM', duration: 'ONE YEAR' },
            { code: 'AME030', name: 'OPERATION & MAINTENANCE OF HYDRAULIC HEAVY MACHINERIES', duration: 'THREE MONTHS' },
            { code: 'AME031', name: 'OPERATION & MAINTENANCE OF HEAVY MACHINERIES (BACK HOE LOADER)', duration: 'THREE MONTHS' },
            { code: 'AME032', name: 'OPERATION & MAINTENANCE OF HEAVY MACHINERIES (HYDRAULIC EXCAVATOR)', duration: 'THREE MONTHS' },
            { code: 'AME033', name: 'OPERATION & MAINTENANCE OF HEAVY MACHINERIES (CRANE)', duration: 'THREE MONTHS' },
            { code: 'AME034', name: 'OPERATION & MAINTENANCE OF HEAVY MACHINERIES (FORK LIFT)', duration: 'THREE MONTHS' },
            { code: 'AME035', name: 'POST DIPLOMA IN AUTOMOBILE ENGINEERING TECHNOLOGY', duration: 'ONE YEAR' },
            { code: 'AME036', name: 'BSS DIPLOMA IN AUTOMOBILE ENGINEERING TECHNOLOGY', duration: 'TWO YEARS' },
            { code: 'AME037', name: 'BSS DIPLOMA IN AUTOMOBILE ENGINEERING', duration: 'TWO YEARS' },
            { code: 'AME038', name: 'CERTIFICATE COURSE IN MECHANICAL FITTER CUM CNC MACHINE OPERATOR', duration: 'TWO YEARS' },
            { code: 'AME039', name: 'BSS DIPLOMA IN HYDRAULIC MECHANICAL ENGINEERING', duration: 'ONE YEAR' },
            { code: 'AME040', name: 'AUTOMOBILE TECHNOLOGY', duration: 'TWO YEARS' }
        ]
    };

    const courses = courseDetails[subDivisionId] || [];

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
                                            <Link
                                                to={`/courses/${divisionId}/${encodeURIComponent(subDivisionId)}/${course.code}`}
                                                className="hover:underline"
                                            >
                                                {course.code}
                                            </Link>
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
        </section>
    );
};

export default CourseDetails;