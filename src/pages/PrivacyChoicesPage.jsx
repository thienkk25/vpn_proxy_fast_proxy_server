import { useEffect } from 'react';

const PrivacyChoicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="hero support-hero">
        <div className="hero-bg-shapes">
          <div className="shape shape-2"></div>
        </div>
        <div className="container text-center hero-content">
          <h2 className="hero-title">User Privacy <span className="text-gradient">Choices</span></h2>
          <p className="hero-subtitle">Manage your data and control your privacy preferences.</p>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="contact-card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
            <p style={{ marginBottom: '30px', fontWeight: '500' }}>
              Last updated: May 2026
            </p>
            
            <p style={{ marginBottom: '40px', color: 'var(--text-muted)' }}>
              At VPN Proxy: Fast Proxy Server, we believe that your data is yours. We operate under a strict no-logs policy, meaning we do not track, collect, or sell your browsing activity. This page outlines your rights regarding any minimal account or diagnostic data we may hold, and how you can exercise those rights under applicable privacy laws (such as GDPR, CCPA, etc.).
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>1. Your Right to Access and Deletion</h3>
            <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
              You have the right to request access to any personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. 
            </p>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              To easily delete your account and all associated data, you can navigate to the <strong>Settings</strong> menu within the VPN Proxy app and select <strong>"Delete Account"</strong>.
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>2. "Do Not Sell or Share My Personal Information"</h3>
            <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
              We <strong>do not sell</strong> your personal information to third parties. We do not monetize your data for targeted advertising. Because we do not sell your data, there is no need to actively "opt-out" of data selling.
            </p>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              If you wish to opt-out of anonymous diagnostic and crash reporting (which helps us fix bugs), you can toggle this off in the app settings under <strong>Privacy & Security</strong>.
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>3. Managing Subscriptions</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              Your premium subscription is managed entirely by Apple (App Store) or Google (Play Store). We do not store your payment methods. To cancel a subscription, please visit your Apple ID settings or Google Play account settings.
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>4. Submit a Privacy Request</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              If you have a specific privacy request, wish to exercise your rights under GDPR or CCPA, or need assistance managing your privacy choices, please submit a request directly to our Data Protection Officer at:
              <br /><br />
              <strong>Email:</strong> <a href="mailto:thien789987@gmail.com">thien789987@gmail.com</a>
              <br />
              <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Please include "Privacy Request" in the subject line. We will respond to your request within 30 days.</span>
            </p>

          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyChoicesPage;
