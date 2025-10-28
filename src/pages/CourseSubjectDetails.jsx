import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CourseSubjectDetails = () => {
    const { divisionId, subDivisionId, courseCode } = useParams();

    // Course subject data
    const courseSubjects = {
        'AHE001': {
            name: 'BSS DIPLOMA IN MEDICAL LABORATORY TECHNOLOGY',
            duration: 'TWO YEARS',
            subjects: [
                { year: 'I YEAR', subjects: [
                    { sno: 1, code: 'AHE001-01', name: 'COMMUNICATIVE ENGLISH AND COMPUTER FUNDAMENTALS' },
                    { sno: 2, code: 'AHE001-02', name: 'CLINICAL BIO CHEMISTRY - I' },
                    { sno: 3, code: 'AHE001-03', name: 'CLINICAL MICRO BIOLOGY - I & PARASITOLOGY' },
                    { sno: 4, code: 'AHE001-04', name: 'HAEMATOLOGY,BLOOD BANKING & HISTOPATHOLOGY - I' },
                    { sno: 5, code: 'AHE001-05', name: 'PRACTICAL - I' },
                    { sno: 6, code: 'AHE001-06', name: 'PRACTICAL - II' },
                    { sno: 7, code: 'AHE001-07', name: 'PRACTICAL - III' },
                    { sno: 8, code: 'AHE001-08', name: 'PRACTICAL - IV' }
                ]},
                { year: 'II YEAR', subjects: [
                    { sno: 9, code: 'AHE001-09', name: 'CLINICAL BIO CHEMISTRY - II' },
                    { sno: 10, code: 'AHE001-10', name: 'CLINICAL MICRO BIOLOGY - II' },
                    { sno: 11, code: 'AHE001-11', name: 'HAEMATOLOGY,BLOOD BANKING & HISTOPATHOLOGY-II' },
                    { sno: 12, code: 'AHE001-12', name: 'PRACTICAL - V' },
                    { sno: 13, code: 'AHE001-13', name: 'PRACTICAL - VI' },
                    { sno: 14, code: 'AHE001-14', name: 'PRACTICAL - VII' }
                ]}
            ]
        },
        'AE002': {
            name: 'BSS DIPLOMA IN HORTICULTURE',
            duration: 'TWO YEARS',
            subjects: [
                { year: 'I YEAR', subjects: [
                    { sno: 1, code: 'AE002-01', name: 'COMMUNICATIVE ENGLISH AND COMPUTER FUNDAMENTALS' },
                    { sno: 2, code: 'AE002-02', name: 'FUNDAMENTALS OF HORTICULTURE' },
                    { sno: 3, code: 'AE002-03', name: 'SOILS AND WATER MANAGEMENT' },
                    { sno: 4, code: 'AE002-04', name: 'FERTILIZERS & MANURES MANAGEMENT' },
                    { sno: 5, code: 'AE002-05', name: 'PRACTICAL - I' },
                    { sno: 6, code: 'AE002-06', name: 'PRACTICAL - II' },
                    { sno: 7, code: 'AE002-07', name: 'PRACTICAL - III' },
                    { sno: 8, code: 'AE002-08', name: 'PRACTICAL - IV' }
                ]},
                { year: 'II YEAR', subjects: [
                    { sno: 9, code: 'AE002-09', name: 'AGRO-METEOROLOGY & FARM POWER' },
                    { sno: 10, code: 'AE002-10', name: 'PRESERVATION' },
                    { sno: 11, code: 'AE002-11', name: 'CULTIVATION OF VEGETABLES & SPICES' },
                    { sno: 12, code: 'AE002-12', name: 'PRACTICAL - V' },
                    { sno: 13, code: 'AE002-13', name: 'PRACTICAL - VI' },
                    { sno: 14, code: 'AE002-14', name: 'PRACTICAL - VII' }
                ]}
            ]
        },
        'AHE002': {
            name: 'MEDICAL LABORATORY TECHNICIAN',
            duration: 'ONE YEAR',
            subjects: [
                { year: 'ONE YEAR', subjects: [
                    { sno: 1, code: 'AHE002-01', name: 'COMMUNICATIVE ENGLISH AND COMPUTER FUNDAMENTALS' },
                    { sno: 2, code: 'AHE002-02', name: 'CLINICAL BIO CHEMISTRY' },
                    { sno: 3, code: 'AHE002-03', name: 'CLINICAL MICRO BIOLOGY & PARASITOLOGY' },
                    { sno: 4, code: 'AHE002-04', name: 'HAEMATOLOGY,BLOOD BANKING & HISTOPATHOLOGY' },
                    { sno: 5, code: 'AHE002-05', name: 'PRACTICAL - I' },
                    { sno: 6, code: 'AHE002-06', name: 'PRACTICAL - II' },
                    { sno: 7, code: 'AHE002-07', name: 'PRACTICAL - III' },
                    { sno: 8, code: 'AHE002-08', name: 'PRACTICAL - IV' }
                ]}
            ]
        },
        'AHE003': {
            name: 'BSS DIPLOMA IN X-RAY TECHNOLOGY',
            duration: 'TWO YEARS',
            subjects: [
                { year: 'I YEAR', subjects: [
                    { sno: 1, code: 'AHE003-01', name: 'COMMUNICATIVE ENGLISH AND COMPUTER FUNDAMENTALS' },
                    { sno: 2, code: 'AHE003-02', name: 'ANATOMY & PHYSIOLOGY' },
                    { sno: 3, code: 'AHE003-03', name: 'ELECTRICITY PHYSICS' },
                    { sno: 4, code: 'AHE003-04', name: 'RADIOLOGY PHYSICS' },
                    { sno: 5, code: 'AHE003-05', name: 'POSITIONING IN RADIOGRAPHY' },
                    { sno: 6, code: 'AHE003-06', name: 'DARK ROOM TECHNIQUES' },
                    { sno: 7, code: 'AHE003-07', name: 'PRACTICAL - I' },
                    { sno: 8, code: 'AHE003-08', name: 'PRACTICAL - II' },
                    { sno: 9, code: 'AHE003-09', name: 'PRACTICAL - III' },
                    { sno: 10, code: 'AHE003-10', name: 'PRACTICAL - IV' },
                    { sno: 11, code: 'AHE003-11', name: 'PRACTICAL - V' },
                    { sno: 12, code: 'AHE003-12', name: 'PRACTICAL - VI' }
                ]},
                { year: 'II YEAR', subjects: [
                    { sno: 13, code: 'AHE003-13', name: 'SPECIAL INVESTIGATION' },
                    { sno: 14, code: 'AHE003-14', name: 'RADIATION HAZARDS & SAFETY MEASURE' },
                    { sno: 15, code: 'AHE003-15', name: 'HOSPITAL PRACTICE & PATIENT CARE' },
                    { sno: 16, code: 'AHE003-16', name: 'RADIOGRAPHIC PHYSICS' },
                    { sno: 17, code: 'AHE003-17', name: 'ECG & IMAGING SERVICE' },
                    { sno: 18, code: 'AHE003-18', name: 'PRACTICAL - VII' },
                    { sno: 19, code: 'AHE003-19', name: 'PRACTICAL - VIII' },
                    { sno: 20, code: 'AHE003-20', name: 'PRACTICAL - IX' },
                    { sno: 21, code: 'AHE003-21', name: 'PRACTICAL - X' },
                    { sno: 22, code: 'AHE003-22', name: 'PRACTICAL - XI' }
                ]}
            ]
        },
        'AHE004': {
            name: 'X-RAY TECHNICIAN',
            duration: 'ONE YEAR',
            subjects: [
                { year: 'ONE YEAR', subjects: [
                    { sno: 1, code: 'AHE004-01', name: 'COMMUNICATIVE ENGLISH AND COMPUTER FUNDAMENTALS' },
                    { sno: 2, code: 'AHE004-02', name: 'ANATOMY & PHYSIOLOGY' },
                    { sno: 3, code: 'AHE004-03', name: 'ELECTRICITY PHYSICS' },
                    { sno: 4, code: 'AHE004-04', name: 'RADIOLOGY PHYSICS' },
                    { sno: 5, code: 'AHE004-05', name: 'POSITIONING IN RADIOGRAPHY' },
                    { sno: 6, code: 'AHE004-06', name: 'DARK ROOM TECHNIQUES' },
                    { sno: 7, code: 'AHE004-07', name: 'PRACTICAL - I' },
                    { sno: 8, code: 'AHE004-08', name: 'PRACTICAL - II' },
                    { sno: 9, code: 'AHE004-09', name: 'PRACTICAL - III' },
                    { sno: 10, code: 'AHE004-10', name: 'PRACTICAL - IV' },
                    { sno: 11, code: 'AHE004-11', name: 'PRACTICAL - V' },
                    { sno: 12, code: 'AHE004-12', name: 'PRACTICAL - VI' }
                ]}
            ]
        },
        'AHE005': {
            name: 'BSS DIPLOMA IN OPERATION THEATRE TECHNOLOGY',
            duration: 'TWO YEARS',
            subjects: [
                { year: 'I YEAR', subjects: [
                    { sno: 1, code: 'AHE005-01', name: 'COMMUNICATIVE ENGLISH AND COMPUTER FUNDAMENTALS' },
                    { sno: 2, code: 'AHE005-02', name: 'ANATOMY & PHYSIOLOGY' },
                    { sno: 3, code: 'AHE005-03', name: 'ANAESTHESIA DRUGS,EQUIPMENT & SPECIAL OPERATION THEATRE TRAY SET UP' },
                    { sno: 4, code: 'AHE005-04', name: 'SURGICAL PROCEDURES (DISINFECTION ON STERILIZATION) CARE OF PATIENT IN EMERGENCIES' },
                    { sno: 5, code: 'AHE005-05', name: 'OPERATION THEATRE TECHNIQUES' },
                    { sno: 6, code: 'AHE005-06', name: 'PRACTICAL - I' },
                    { sno: 7, code: 'AHE005-07', name: 'PRACTICAL - II' },
                    { sno: 8, code: 'AHE005-08', name: 'PRACTICAL - III' },
                    { sno: 9, code: 'AHE005-09', name: 'PRACTICAL - IV' },
                    { sno: 10, code: 'AHE005-10', name: 'PRACTICAL - V' }
                ]},
                { year: 'II YEAR', subjects: [
                    { sno: 11, code: 'AHE005-11', name: 'CARE OF PATIENT UNDERGOING SURGERY (PRE AND INTRA OPERATIVE) AFTER CARE OF EQUIPMENT' },
                    { sno: 12, code: 'AHE005-12', name: 'SURGICAL PROCEDURES AND MONITORING OPERATION THEATRE ETHICS,SAFETY FOR OPERATION ROOM' },
                    { sno: 13, code: 'AHE005-13', name: 'INFECTION CONTROL IN OPERATION THEATRE ROLE OF THE THEATRE ASSISTANT' },
                    { sno: 14, code: 'AHE005-14', name: 'PRACTICAL - VI' },
                    { sno: 15, code: 'AHE005-15', name: 'PRACTICAL - VII' },
                    { sno: 16, code: 'AHE005-16', name: 'PRACTICAL - VIII' }
                ]}
            ]
        },
        'AHE007': {
            name: 'LAB ASSISTANT',
            duration: 'ONE YEAR',
            subjects: [
                { year: 'ONE YEAR', subjects: [
                    { sno: 1, code: 'AHE007-01', name: 'COMMUNICATIVE ENGLISH AND COMPUTER FUNDAMENTALS' },
                    { sno: 2, code: 'AHE007-02', name: 'CLINICAL BIOCHEMISTRY' },
                    { sno: 3, code: 'AHE007-03', name: 'CLINICAL MICROBIOLOGY & PARASITOLOGY' },
                    { sno: 4, code: 'AHE007-04', name: 'HAEMATOLGOY BLOOD BANKING & HISTOPATHOLOGY' },
                    { sno: 5, code: 'AHE007-05', name: 'PRACTICAL - I' },
                    { sno: 6, code: 'AHE007-06', name: 'PRACTICAL - II' },
                    { sno: 7, code: 'AHE007-07', name: 'PRACTICAL - III' },
                    { sno: 8, code: 'AHE007-08', name: 'PRACTICAL - IV' }
                ]}
            ]
        },
        'AHE008': {
            name: 'E C G TECHNICIAN',
            duration: 'SIX MONTHS',
            subjects: [
                { year: 'SIX MONTHS', subjects: [
                    { sno: 1, code: 'AHE008-01', name: 'COMMUNICATIVE ENGLISH AND COMPUTER FUNDAMENTALS' },
                    { sno: 2, code: 'AHE008-02', name: 'ELECTRO CARDIO GRAM' },
                    { sno: 3, code: 'AHE008-03', name: 'PRACTICAL - I' },
                    { sno: 4, code: 'AHE008-04', name: 'PRACTICAL - II' }
                ]}
            ]
        },
        'AHE009': {
            name: 'CT SCAN TECHNICIAN',
            duration: 'ONE YEAR',
            subjects: [
                { year: 'ONE YEAR', subjects: [
                    { sno: 1, code: 'AHE009-01', name: 'COMMUNICATIVE ENGLISH AND COMPUTER FUNDAMENTALS' },
                    { sno: 2, code: 'AHE009-02', name: 'ANATOMY AND PHYSIOLOGY' },
                    { sno: 3, code: 'AHE009-03', name: 'PHYSICS OF RADIODIAGNOSIS AND EQUIPMENT' },
                    { sno: 4, code: 'AHE009-04', name: 'CT SCAN TECHNOLOGY AND PATIENT MANAGEMENT' },
                    { sno: 5, code: 'AHE009-05', name: 'PRACTICAL - I' },
                    { sno: 6, code: 'AHE009-06', name: 'PRACTICAL - II' },
                    { sno: 7, code: 'AHE009-07', name: 'PRACTICAL - III' },
                    { sno: 8, code: 'AHE009-08', name: 'PRACTICAL - IV' }
                ]}
            ]
        },
        'AHE010': {
            name: 'MRI SCAN TECHNICIAN',
            duration: 'ONE YEAR',
            subjects: [
                { year: 'ONE YEAR', subjects: [
                    { sno: 1, code: 'AHE010-01', name: 'COMMUNICATIVE ENGLISH AND COMPUTER FUNDAMENTALS' },
                    { sno: 2, code: 'AHE010-02', name: 'ANATOMY & PHYSIOLOGY' },
                    { sno: 3, code: 'AHE010-03', name: 'GENERAL RADIOGRAPHY' },
                    { sno: 4, code: 'AHE010-04', name: 'MRI SCAN TECHNOLOGY' },
                    { sno: 5, code: 'AHE010-05', name: 'PRACTICAL - I' },
                    { sno: 6, code: 'AHE010-06', name: 'PRACTICAL - II' },
                    { sno: 7, code: 'AHE010-07', name: 'PRACTICAL - III' },
                    { sno: 8, code: 'AHE010-08', name: 'PRACTICAL - IV' }
                ]}
            ]
        },
        'AHE011': {
            name: 'EYE TECHNICIAN',
            duration: 'ONE YEAR',
            subjects: [
                { year: 'ONE YEAR', subjects: [
                    { sno: 1, code: 'AHE011-01', name: 'COMMUNICATIVE ENGLISH AND COMPUTER FUNDAMENTALS' },
                    { sno: 2, code: 'AHE011-02', name: 'ANATOMY & PHYSIOLOGY OF EYE' },
                    { sno: 3, code: 'AHE011-03', name: 'PHARMACOLOGY & MICROBIOLOGY' },
                    { sno: 4, code: 'AHE011-04', name: 'OPTOMETRIC INSTRUMENTS' },
                    { sno: 5, code: 'AHE011-05', name: 'CLINICAL OPTHALMOLOGY-EYE DISEASES' },
                    { sno: 6, code: 'AHE011-06', name: 'V-OPD' },
                    { sno: 7, code: 'AHE011-07', name: 'PRACTICAL - I' },
                    { sno: 8, code: 'AHE011-08', name: 'PRACTICAL - II' },
                    { sno: 9, code: 'AHE011-09', name: 'PRACTICAL - III' },
                    { sno: 10, code: 'AHE011-10', name: 'PRACTICAL - IV' },
                    { sno: 11, code: 'AHE011-11', name: 'PRACTICAL - V' },
                    { sno: 12, code: 'AHE011-12', name: 'PRACTICAL - VI' }
                ]}
            ]
        },
        'AHE012': {
            name: 'DENTAL TECHNICIAN',
            duration: 'ONE YEAR',
            subjects: [
                { year: 'ONE YEAR', subjects: [
                    { sno: 1, code: 'AHE012-01', name: 'COMMUNICATIVE ENGLISH AND COMPUTER FUNDAMENTALS' },
                    { sno: 2, code: 'AHE012-02', name: 'DENTAL TECHNOLOGY' },
                    { sno: 3, code: 'AHE012-03', name: 'PRACTICAL - I' },
                    { sno: 4, code: 'AHE012-04', name: 'PRACTICAL - II' }
                ]}
            ]
        },
        'AHE014': {
            name: 'BSS DIPLOMA IN MEDICAL TRANSCRIPTION',
            duration: 'ONE YEAR',
            subjects: [
                { year: 'ONE YEAR', subjects: [
                    { sno: 1, code: 'AHE014-01', name: 'COMMUNICATIVE ENGLISH AND COMPUTER FUNDAMENTALS' },
                    { sno: 2, code: 'AHE014-02', name: 'ANATOMY & PHYSIOLOGY' },
                    { sno: 3, code: 'AHE014-03', name: 'BASIC WORD STRUCTURE' },
                    { sno: 4, code: 'AHE014-04', name: 'PHARMACOLOGY' },
                    { sno: 5, code: 'AHE014-05', name: 'RADIOLOGY,NUCLEAR MEDICINE & RADIATION THERAPY' },
                    { sno: 6, code: 'AHE014-06', name: 'BIOCHEMISTRY AND CLINICAL PATHOLOGY' },
                    { sno: 7, code: 'AHE014-07', name: 'PRACTICAL - I' },
                    { sno: 8, code: 'AHE014-08', name: 'PRACTICAL - II' },
                    { sno: 9, code: 'AHE014-09', name: 'PRACTICAL - III' },
                    { sno: 10, code: 'AHE014-10', name: 'PRACTICAL - IV' },
                    { sno: 11, code: 'AHE014-11', name: 'PRACTICAL - V' },
                    { sno: 12, code: 'AHE014-12', name: 'PRACTICAL - VI' }
                ]}
            ]
        },
        'AHE016': {
            name: 'BSS DIPLOMA IN OPTOMETRY',
            duration: 'TWO YEARS',
            subjects: [
                { year: 'I YEAR', subjects: [
                    { sno: 1, code: 'AHE016-01', name: 'COMMUNICATIVE ENGLISH AND COMPUTER FUNDAMENTALS' },
                    { sno: 2, code: 'AHE016-02', name: 'ANATOMY & PHYSIOLOGY OF EYE' },
                    { sno: 3, code: 'AHE016-03', name: 'BASIC MICROBIOLOGY & PHARMACOLOGY & CLINICAL PATHOLOGY' },
                    { sno: 4, code: 'AHE016-04', name: 'PHYSIOLOGICAL OPTICS & PRINCIPLES OF REFRACTION' },
                    { sno: 5, code: 'AHE016-05', name: 'OPTOMETRIC INSTRUMENTS' },
                    { sno: 6, code: 'AHE016-06', name: 'PRACTICAL - I' },
                    { sno: 7, code: 'AHE016-07', name: 'PRACTICAL - II' },
                    { sno: 8, code: 'AHE016-08', name: 'PRACTICAL - III' },
                    { sno: 9, code: 'AHE016-09', name: 'PRACTICAL - IV' },
                    { sno: 10, code: 'AHE016-10', name: 'PRACTICAL - V' }
                ]},
                { year: 'II YEAR', subjects: [
                    { sno: 11, code: 'AHE016-11', name: 'CLINICAL OPTHALMOLOGY' },
                    { sno: 12, code: 'AHE016-12', name: 'PRACTICE OF REFRACTION' },
                    { sno: 13, code: 'AHE016-13', name: 'OPTOMETRY WORKSHOP' },
                    { sno: 14, code: 'AHE016-14', name: 'COMMUNITY OPTOMETRY' },
                    { sno: 15, code: 'AHE016-15', name: 'OPTOMETRY NURSING' },
                    { sno: 16, code: 'AHE016-16', name: 'PRACTICAL - VI' },
                    { sno: 17, code: 'AHE016-17', name: 'PRACTICAL - VII' },
                    { sno: 18, code: 'AHE016-18', name: 'PRACTICAL - VIII' },
                    { sno: 19, code: 'AHE016-19', name: 'PRACTICAL - IX' },
                    { sno: 20, code: 'AHE016-20', name: 'PRACTICAL - X' }
                ]}
            ]
        },
        'AHE017': {
            name: 'CERTIFICATE IN DIABETOLOGY',
            duration: 'ONE YEAR',
            subjects: [
                { year: 'ONE YEAR', subjects: [
                    { sno: 1, code: 'AHE017-01', name: 'COMMUNICATIVE ENGLISH AND COMPUTER FUNDAMENTALS' },
                    { sno: 2, code: 'AHE017-02', name: 'DIABETOLOGY' },
                    { sno: 3, code: 'AHE017-03', name: 'PRACTICAL - I' },
                    { sno: 4, code: 'AHE017-04', name: 'PRACTICAL - II' }
                ]}
            ]
        }
    };

    const courseData = courseSubjects[courseCode];

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
                </motion.div>

                {/* Subject Details */}
                {courseData && courseData.subjects.map((yearData, yearIndex) => (
                    <motion.div
                        key={yearIndex}
                        className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-professional mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: yearIndex * 0.1 }}
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">{yearData.year}</h2>

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
                                    {yearData.subjects.map((subject, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                            <td className="px-4 py-3 text-sm text-gray-900">{subject.sno}</td>
                                            <td className="px-4 py-3 text-sm font-mono text-blue-600">{subject.code}</td>
                                            <td className="px-4 py-3 text-sm text-gray-900">{subject.name}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                ))}

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