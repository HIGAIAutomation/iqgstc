import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CoursesPage from './pages/CoursesPage';
import CourseDetails from './pages/CourseDetails';
import CourseSubjectDetails from './pages/CourseSubjectDetails';
import AboutPage from './pages/AboutPage';
import WSCPage from './pages/WSCPage';
import ContactPage from './pages/ContactPage';
import BusinessDivisions from './pages/BusinessDivisions';
import DivisionDetails from './pages/DivisionDetails';
import CertificateDetails from './pages/CertificateDetails';
import FAQPage from './pages/FAQPage';
import TermsPage from './pages/TermsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/courses" element={<CoursesPage />} />
           <Route path="/courses/:divisionId/:subDivisionId" element={<CourseDetails />} />
           <Route path="/courses/:divisionId" element={<CoursesPage />} />
           <Route path="/courses/:divisionId/:subDivisionId/:courseCode" element={<CourseSubjectDetails />} />
           <Route path="/business-divisions" element={<BusinessDivisions />} />
           <Route path="/division/:divisionId" element={<DivisionDetails />} />
           <Route path="/certificate/:certificateId" element={<CertificateDetails />} />
           <Route path="/about" element={<AboutPage />} />
           <Route path="/wsc" element={<WSCPage />} />
           <Route path="/contact" element={<ContactPage />} />
           <Route path="/faq" element={<FAQPage />} />
           <Route path="/terms" element={<TermsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
