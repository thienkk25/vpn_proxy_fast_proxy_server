import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MarketingPage from './pages/MarketingPage';
import SupportPage from './pages/SupportPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CyberGlobe from './components/CyberGlobe';
import './index.css';

// Component to handle external redirects
const ExternalRedirect = ({ url }) => {
  useEffect(() => {
    window.location.replace(url);
  }, [url]);
  return <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>Redirecting...</div>;
};

function App() {
  return (
    <BrowserRouter>
      <CyberGlobe />
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<MarketingPage />} />
          <Route path="/marketing" element={<MarketingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
