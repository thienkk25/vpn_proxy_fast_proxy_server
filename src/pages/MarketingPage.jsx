import { useEffect } from 'react';

const MarketingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="hero">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
        <div className="container text-center hero-content">
          <span className="badge">#1 Privacy Shield</span>
          <h2 className="hero-title">Browse the Web <br /><span className="text-gradient">Securely & Privately</span></h2>
          <p className="hero-subtitle">Protect your digital footprint, access global content, and enjoy blazing fast speeds with just one tap. Zero logs, total freedom.</p>
          <div className="hero-actions">
            <a href="#download" className="btn btn-primary btn-lg">Get Protected Now</a>
            <p className="hero-guarantee">No credit card required for basic version</p>
          </div>
        </div>
      </section>

      <section id="features" className="section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h3 className="section-title">Why Choose VPN Proxy?</h3>
            <p className="section-desc">We combine military-grade encryption with ultra-fast servers to give you the ultimate browsing experience.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon shield">🛡️</div>
              <h4>Military-Grade Security</h4>
              <p>Your traffic is routed through an encrypted tunnel, keeping your data safe from hackers and snoopers.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon rocket">🚀</div>
              <h4>Blazing Fast Speeds</h4>
              <p>Enjoy seamless streaming, gaming, and browsing with our optimized global server network.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon global">🌍</div>
              <h4>Global Access</h4>
              <p>Bypass geo-restrictions and censorship. Access your favorite content from anywhere in the world.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="section cta-section">
        <div className="container text-center">
          <h3 className="cta-title">Ready to take back your privacy?</h3>
          <p className="cta-desc">Join millions of users who trust VPN Proxy to keep their digital lives secure.</p>
          <a href="#download" className="btn btn-white btn-lg">Download for iOS</a>
        </div>
      </section>
    </main>
  );
};

export default MarketingPage;
