import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Courses = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDivision, setSelectedDivision] = useState('All');
    const [selectedSubDivision, setSelectedSubDivision] = useState('All');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);

    const mainDivisions = [
        'CATEGORY COURSES',
        'SCHOOL COURSES',
        'SPECIALISED COURSES'
    ];

    const divisionsData = {
        'CATEGORY COURSES': {
            'ALLIED HEALTH EDUCATION': 73,
            'AGRICULTURE EDUCATION': 44,
            'AUTOMOBILE EDUCATION': 40,
            'CHILD EDUCATION': 38,
            'CIVIL & ARCHITECTURAL EDUCATION': 24,
            'COMMUNICATIVE & SOFT SKILLS EDUCATION': 8,
            'DAIRY EDUCATION': 7,
            'ELECTRICAL & ELECTRONICS EDUCATION': 48,
            'FISHERIES EDUCATION': 17,
            'HOME & INDUSTRY MAINTENANCE EDUCATION': 12,
            'HOME BUSINESS EDUCATION': 30,
            'INTERIOR & EXTERIOR EDUCATION': 29,
            'OFFICE MANAGEMENT EDUCATION': 19,
            'POULTRY EDUCATION': 14,
            'VETERINARY EDUCATION': 7
        },
        'SCHOOL COURSES': {
            'ACUPUNCTURE SCHOOL': 54,
            'AYURVEDA SCHOOL': 49,
            'BEAUTY SCHOOL': 16,
            'COMPUTER COLLEGE & SCHOOL': 88,
            'FIRE & SAFETY SCHOOL': 56,
            'FOREST & ENVIRONMENTAL SCHOOL': 11,
            'GEMS & JEWELLERY SCHOOL': 15,
            'GEO SCHOOL': 5,
            'HOMEOPATHY SCHOOL': 19,
            'HOTEL MANAGEMENT & TOURISM SCHOOL': 57,
            'LANGUAGE SCHOOL': 16,
            'MUSIC SCHOOL': 14,
            'SIDDHA SCHOOL': 23,
            'SPORTS SCHOOL': 10,
            'TECHNICAL TRAINING SCHOOL': 59,
            'TEXTILE SCHOOL': 6,
            'UNANI SCHOOL': 10,
            'YOGA AND NATUROPATHY SCHOOL': 64
        },
        'SPECIALISED COURSES': {
            'ALLIED HEALTH COURSES': 83,
            'AVIATION COURSES': 18,
            'BIO-TECHNOLOGY COURSES': 6,
            'BUSINESS COURSES': 121,
            'FASHION COURSES': 37,
            'MEDIA COURSES': 37,
            'SHIPPING COURSES': 32,
            'SOLAR COURSES': 18
        }
    };

    const feeStructure = {
        'CATEGORY COURSES': {
            fee: 'Demand Draft Rs. 60,000/- (Rs. 25,000/- World skill council PSI Fee in favour of WORLD SKILL COUNCIL payable at New Delhi and Rs. 35,000/- in favour of BHARAT SEVAK SAMAJ payable at Chennai (or) BHARAT SEVAK SAMAJ payable at New Delhi). DD can be taken from any Nationalized Bank. For other countries, Demand Draft for 750 USD. Fee can be paid by online also.',
            additional: 'For Category Courses, the correspondent can select 9 courses from a single category. If the correspondent wants to conduct more than 9 courses in same category, additional Rs. 5,000/- (Rupees Five Thousand only) (or) 100 USD should be paid for each courses. If the management wants to run courses from more than one category, another Rs. 60,000/- or 750 USD should be paid. For each category, separate application should be used.'
        },
        'SCHOOL COURSES': {
            fee: 'Demand Draft Rs. 75,000/- (Rs. 25,000/- World skill council PSI Fee in favour of WORLD SKILL COUNCIL payable at New Delhi and Rs. 50,000/- in favour of BHARAT SEVAK SAMAJ payable at Chennai (or) BHARAT SEVAK SAMAJ payable at New Delhi). DD can be taken from any Nationalized Bank. For other countries, Demand Draft for 1000 USD. Fee can be paid by online also.',
            additional: 'School Courses are package courses. The Correspondent can run all courses which are available in the particular school. If the correspondent wants to conduct more than one school courses, another Rs. 75,000/- (or) 1000 USD should be paid for each courses. For each school, separate application should be used.'
        },
        'SPECIALISED COURSES': {
            fee: 'Demand Draft Rs. 95,000/- (Rs. 25,000/- World skill council PSI Fee in favour of WORLD SKILL COUNCIL payable at New Delhi and Rs. 70,000/- in favour of BHARAT SEVAK SAMAJ payable at Chennai (or) BHARAT SEVAK SAMAJ payable at New Delhi). DD can be taken from any Nationalized Bank. For other countries, Demand Draft for 1250 USD. Fee can be paid by online also.',
            additional: 'If the correspondent wants to conduct more than one specialised courses another Rs. 95,000/- (or) 1250 USD should be paid for each courses, For each specialised courses separate application should be used. If any additional courses from Specialised course or School course Rs. 10,000/- to be paid per course.'
        }
    };

    // Sample course data for detailed view
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

    // Sample data for suggestions
    const allSuggestions = [
        ...mainDivisions,
        ...Object.keys(divisionsData['CATEGORY COURSES']),
        ...Object.keys(divisionsData['SCHOOL COURSES']),
        ...Object.keys(divisionsData['SPECIALISED COURSES']),
        // Add course codes for direct search
        ...Object.values(courseDetails).flat().map(course => course.code)
    ];

    const filteredDivisions = Object.keys(divisionsData[selectedDivision] || divisionsData).filter(division =>
        division.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle search input changes
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.length > 0) {
            const filtered = allSuggestions.filter(item =>
                item.toLowerCase().includes(value.toLowerCase())
            ).slice(0, 8); // Limit to 8 suggestions
            setFilteredSuggestions(filtered);
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion);
        setShowSuggestions(false);

        // If the suggestion is a main division, set it as selected division
        if (mainDivisions.includes(suggestion)) {
            setSelectedDivision(suggestion);
            setSelectedSubDivision('All');
        }
        // If the suggestion is a course code, navigate directly to course details
        else if (suggestion.match(/^[A-Z]{3,4}\d{3}$/)) {
            // Find which division and sub-division this course belongs to
            for (const [division, subDivisions] of Object.entries(divisionsData)) {
                for (const [subDivision, count] of Object.entries(subDivisions)) {
                    if (courseDetails[subDivision]?.some(course => course.code === suggestion)) {
                        window.location.href = `/courses/${division}/${encodeURIComponent(subDivision)}/${suggestion}`;
                        return;
                    }
                }
            }
        }
    };

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Our Professional Courses
                </motion.h2>

                <motion.p
                    className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Discover world-class skill training programs designed to elevate your career prospects
                </motion.p>

                {/* Search and Filter */}
                <motion.div
                    className="mb-12 flex flex-col md:flex-row gap-6 justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search courses, divisions..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            onFocus={() => searchTerm && setShowSuggestions(true)}
                            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                            className="w-full md:w-80 px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
                        />
                        <svg className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>

                        {/* Suggestions Dropdown */}
                        {showSuggestions && filteredSuggestions.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute top-full left-0 right-0 mt-1 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl shadow-xl z-50 max-h-64 overflow-y-auto"
                            >
                                {filteredSuggestions.map((suggestion, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        onClick={() => handleSuggestionClick(suggestion)}
                                        className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-200"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                            <span className="text-gray-700 font-medium">{suggestion}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </div>
                    <select
                        value={selectedDivision}
                        onChange={(e) => {
                            setSelectedDivision(e.target.value);
                            setSelectedSubDivision('All');
                        }}
                        className="px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
                    >
                        <option value="All">All Divisions</option>
                        {mainDivisions.map(division => (
                            <option key={division} value={division}>{division}</option>
                        ))}
                    </select>
                </motion.div>

                {/* Main Divisions */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {mainDivisions
                        .filter(division =>
                            selectedDivision === 'All' ||
                            division === selectedDivision ||
                            (searchTerm && division.toLowerCase().includes(searchTerm.toLowerCase()))
                        )
                        .map((division, index) => (
                        <motion.div
                            key={division}
                            onClick={() => setSelectedDivision(division)}
                            className="glass-effect p-6 rounded-2xl cursor-pointer hover:bg-white/20 transition-all duration-300 card-3d shadow-professional hover:shadow-professional-lg group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-blue-600">{Object.keys(divisionsData[division]).length}</div>
                                    <div className="text-xs text-gray-500">Divisions</div>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{division}</h3>
                            <p className="text-gray-600 text-sm">Explore various sub-divisions and courses</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Sub-Divisions */}
                {selectedDivision !== 'All' && (
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {filteredDivisions.map((subDivision, index) => (
                            <motion.div
                                key={subDivision}
                                onClick={() => window.location.href = `/courses/${selectedDivision}/${encodeURIComponent(subDivision)}`}
                                className={`glass-effect p-6 rounded-2xl cursor-pointer transition-all duration-300 card-3d shadow-professional hover:shadow-professional-lg group ${
                                    selectedSubDivision === subDivision ? 'bg-blue-50 border-2 border-blue-300' : 'hover:bg-white/20'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-green-600">{divisionsData[selectedDivision][subDivision]}</div>
                                        <div className="text-xs text-gray-500">Courses</div>
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">{subDivision}</h3>
                                <p className="text-gray-600 text-sm">View detailed course list</p>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {/* Fee Structure Section */}
                {selectedDivision !== 'All' && feeStructure[selectedDivision] && (
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-professional">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">{selectedDivision} - Fee Structure</h3>

                            <div className="space-y-6">
                                <div className="bg-blue-50 p-6 rounded-xl">
                                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Fee Information</h4>
                                    <p className="text-gray-700">{feeStructure[selectedDivision].fee}</p>
                                </div>

                                <div className="bg-green-50 p-6 rounded-xl">
                                    <h4 className="text-lg font-semibold text-green-800 mb-3">Additional Information</h4>
                                    <p className="text-gray-700">{feeStructure[selectedDivision].additional}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Course Details Section */}
                {selectedSubDivision !== 'All' && courseDetails[selectedSubDivision] && (
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-professional">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">{selectedSubDivision} - Course List</h3>

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
                                        {courseDetails[selectedSubDivision].map((course, index) => (
                                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                                <td className="px-4 py-3 text-sm text-gray-900">{index + 1}</td>
                                                <td className="px-4 py-3 text-sm font-mono text-blue-600">{course.code}</td>
                                                <td className="px-4 py-3 text-sm text-gray-900">{course.name}</td>
                                                <td className="px-4 py-3 text-sm text-gray-600">{course.duration}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </motion.div>
                )}

            </div>
        </section>
    );
};

export default Courses;