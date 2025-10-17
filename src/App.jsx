import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CoursesPage from './pages/CoursesPage';
import AboutPage from './pages/AboutPage';
import WSCPage from './pages/WSCPage';
import ContactPage from './pages/ContactPage';
import BusinessDivisions from './pages/BusinessDivisions';
import CertificateDetails from './pages/CertificateDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/business-divisions" element={<BusinessDivisions />} />
          <Route path="/certificate/:certificateId" element={<CertificateDetails />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/wsc" element={<WSCPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
