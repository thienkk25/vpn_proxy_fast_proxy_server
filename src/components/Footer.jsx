import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <img src="/logo.png" alt="VPN Proxy Logo" style={{ width: '40px', height: '40px', borderRadius: '10px' }} />
              <h4>VPN Proxy: Fast Proxy Server</h4>
            </div>
            <p>Fast, Secure & Private Proxy Server</p>
          </div>
          <div className="footer-links">
            <Link to="/support">Support</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/privacy-choices">Privacy Choices</Link>
          </div>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} TN. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
