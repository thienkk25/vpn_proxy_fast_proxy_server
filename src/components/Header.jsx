import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isMarketing = location.pathname === '/' || location.pathname === '/marketing';

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="VPN Proxy Logo" style={{ width: '40px', height: '40px', borderRadius: '10px' }} />
          <h1>VPN Proxy: Fast Proxy Server</h1>
        </Link>
        <nav>
          {isMarketing ? (
            <>
              <a href="#features">Features</a>
              <a href="#servers">Servers</a>
              <a href="#pricing">Premium</a>
            </>
          ) : (
            <>
              <Link to="/">Home</Link>
              <Link to="/support">Support</Link>
              <Link to="/privacy-policy">Privacy</Link>
            </>
          )}
        </nav>
        {isMarketing ? (
          <a href="#download" className="btn btn-outline">Download App</a>
        ) : (
          <Link to="/" className="btn btn-outline">Get App</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
