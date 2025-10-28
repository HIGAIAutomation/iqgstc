import coursesData from '../assets/bssve_courses.json';

// Function to categorize courses based on their prefixes
export const categorizeCourses = () => {
  const categories = {
    'CATEGORY COURSES': {
      'ALLIED HEALTH EDUCATION': [],
      'AGRICULTURE EDUCATION': [],
      'AUTOMOBILE EDUCATION': [],
      'CHILD EDUCATION': [],
      'CIVIL & ARCHITECTURAL EDUCATION': [],
      'COMMUNICATIVE & SOFT SKILLS EDUCATION': [],
      'DAIRY EDUCATION': [],
      'ELECTRICAL & ELECTRONICS EDUCATION': [],
      'FISHERIES EDUCATION': [],
      'HOME & INDUSTRY MAINTENANCE EDUCATION': [],
      'HOME BUSINESS EDUCATION': [],
      'INTERIOR & EXTERIOR EDUCATION': [],
      'OFFICE MANAGEMENT EDUCATION': [],
      'POULTRY EDUCATION': [],
      'VETERINARY EDUCATION': []
    },
    'SCHOOL COURSES': {
      'ACUPUNCTURE SCHOOL': [],
      'AYURVEDA SCHOOL': [],
      'BEAUTY SCHOOL': [],
      'COMPUTER COLLEGE & SCHOOL': [],
      'FIRE & SAFETY SCHOOL': [],
      'FOREST & ENVIRONMENTAL SCHOOL': [],
      'GEMS & JEWELLERY SCHOOL': [],
      'GEO SCHOOL': [],
      'HOMEOPATHY SCHOOL': [],
      'HOTEL MANAGEMENT & TOURISM SCHOOL': [],
      'LANGUAGE SCHOOL': [],
      'MUSIC SCHOOL': [],
      'SIDDHA SCHOOL': [],
      'SPORTS SCHOOL': [],
      'TECHNICAL TRAINING SCHOOL': [],
      'TEXTILE SCHOOL': [],
      'UNANI SCHOOL': [],
      'YOGA AND NATUROPATHY SCHOOL': []
    },
    'SPECIALISED COURSES': {
      'ALLIED HEALTH COURSES': [],
      'AVIATION COURSES': [],
      'BIO-TECHNOLOGY COURSES': [],
      'BUSINESS COURSES': [],
      'FASHION COURSES': [],
      'MEDIA COURSES': [],
      'SHIPPING COURSES': [],
      'SOLAR COURSES': []
    }
  };

  // Prefix mapping to categories
  const prefixMapping = {
    'AHE': 'ALLIED HEALTH EDUCATION',
    'AHS': 'ALLIED HEALTH COURSES',
    'AE': 'AGRICULTURE EDUCATION',
    'AME': 'AUTOMOBILE EDUCATION',
    'CE': 'CHILD EDUCATION',
    'CAE': 'CIVIL & ARCHITECTURAL EDUCATION',
    'CSSE': 'COMMUNICATIVE & SOFT SKILLS EDUCATION',
    'DE': 'DAIRY EDUCATION',
    'EEE': 'ELECTRICAL & ELECTRONICS EDUCATION',
    'FE': 'FISHERIES EDUCATION',
    'HME': 'HOME & INDUSTRY MAINTENANCE EDUCATION',
    'HBE': 'HOME BUSINESS EDUCATION',
    'IEE': 'INTERIOR & EXTERIOR EDUCATION',
    'OME': 'OFFICE MANAGEMENT EDUCATION',
    'PE': 'POULTRY EDUCATION',
    'VE': 'VETERINARY EDUCATION',
    'ACS': 'ACUPUNCTURE SCHOOL',
    'AYS': 'AYURVEDA SCHOOL',
    'BS': 'BEAUTY SCHOOL',
    'CCS': 'COMPUTER COLLEGE & SCHOOL',
    'FSS': 'FIRE & SAFETY SCHOOL',
    'FES': 'FOREST & ENVIRONMENTAL SCHOOL',
    'GJS': 'GEMS & JEWELLERY SCHOOL',
    'GS': 'GEO SCHOOL',
    'HS': 'HOMEOPATHY SCHOOL',
    'HMTS': 'HOTEL MANAGEMENT & TOURISM SCHOOL',
    'LS': 'LANGUAGE SCHOOL',
    'MS': 'MUSIC SCHOOL',
    'SIS': 'SIDDHA SCHOOL',
    'SSS': 'SPORTS SCHOOL',
    'TTS': 'TECHNICAL TRAINING SCHOOL',
    'TS': 'TEXTILE SCHOOL',
    'US': 'UNANI SCHOOL',
    'YNS': 'YOGA AND NATUROPATHY SCHOOL',
    'BUS': 'BUSINESS COURSES',
    'AS': 'AVIATION COURSES',
    'BTS': 'BIO-TECHNOLOGY COURSES',
    'FS': 'FASHION COURSES',
    'MSS': 'MEDIA COURSES',
    'SS': 'SHIPPING COURSES',
    'SLR': 'SOLAR COURSES'
  };

  // Max courses for limited categories
  const maxCourses = {
    'ALLIED HEALTH EDUCATION': 73,
    'ALLIED HEALTH COURSES': 83
  };
  const counters = {};

  // Process each course
  Object.entries(coursesData).forEach(([code, course]) => {
    const prefix = code.substring(0, code.length - 3); // Remove last 3 digits
    const category = prefixMapping[prefix];

    if (category) {
      if (!counters[category]) counters[category] = 0;
      if (maxCourses[category] === undefined || counters[category] < maxCourses[category]) {
        // Find which main division this category belongs to
        for (const [mainDivision, subDivisions] of Object.entries(categories)) {
          if (subDivisions[category]) {
            subDivisions[category].push({
              code,
              name: course.name,
              duration: course.duration,
              subjects: course.subjects
            });
            counters[category]++;
            break;
          }
        }
      }
    }
  });

  return categories;
};

// Function to get all courses for search
export const getAllCourses = () => {
  const categories = categorizeCourses();
  const allCourses = [];

  Object.values(categories).forEach(division => {
    Object.values(division).forEach(courses => {
      allCourses.push(...courses);
    });
  });

  return allCourses;
};

// Function to get course counts
export const getCourseCounts = () => {
  const categories = categorizeCourses();
  const counts = {};

  Object.entries(categories).forEach(([division, subDivisions]) => {
    counts[division] = {};
    Object.entries(subDivisions).forEach(([subDivision, courses]) => {
      counts[division][subDivision] = courses.length;
    });
  });

  return counts;
};

// Function to get course by code
export const getCourseByCode = (code) => {
  return coursesData[code] || null;
};