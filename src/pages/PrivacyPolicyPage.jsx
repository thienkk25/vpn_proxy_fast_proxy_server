import { useEffect } from 'react';

const PrivacyPolicyPage = () => {
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
          <h2 className="hero-title">Privacy <span className="text-gradient">Policy</span></h2>
          <p className="hero-subtitle">Your privacy is our top priority. Learn how we handle your data.</p>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="contact-card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
            <p style={{ marginBottom: '30px', fontWeight: '500' }}>
              Last updated: May 2026
            </p>
            
            <p style={{ marginBottom: '40px', color: 'var(--text-muted)' }}>
              Welcome to VPN Proxy: Fast Proxy Server ("we", "our", "us"). Your privacy is our top priority. This Privacy Policy explains how we collect, use, and protect your information when you use our VPN application.
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>1. STRICT NO-LOGS POLICY (Important)</h3>
            <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
              We are firmly committed to your digital privacy. When you connect to our VPN service, we DO NOT collect, log, or store:
            </p>
            <ul style={{ marginBottom: '30px', color: 'var(--text-muted)', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>Your browsing history</li>
              <li style={{ marginBottom: '8px' }}>Your traffic destinations or metadata</li>
              <li style={{ marginBottom: '8px' }}>Your DNS queries</li>
              <li style={{ marginBottom: '8px' }}>Your original IP address or the VPN IP address assigned to you</li>
            </ul>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>2. Information We Collect</h3>
            <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
              To provide, maintain, and improve our service, we only collect the absolute minimum data necessary:
            </p>
            <ul style={{ marginBottom: '30px', color: 'var(--text-muted)', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}><strong>Account Information:</strong> Email address and basic profile information (only if you voluntarily choose to create an account).</li>
              <li style={{ marginBottom: '8px' }}><strong>Payment Information:</strong> Subscriptions and payments are securely handled by third-party platforms (Apple App Store, Google Play Store) and our subscription management provider (RevenueCat). We do not collect or have access to your credit card details.</li>
              <li style={{ marginBottom: '8px' }}><strong>Diagnostic & Usage Data:</strong> We may collect non-identifying, anonymized data such as device type, OS version, and crash logs (e.g., via Firebase) solely to improve app performance and stability.</li>
            </ul>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>3. How We Use Your Information</h3>
            <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
              We use the limited information we collect to:
            </p>
            <ul style={{ marginBottom: '30px', color: 'var(--text-muted)', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>Provide, operate, and troubleshoot the VPN service.</li>
              <li style={{ marginBottom: '8px' }}>Process premium subscriptions and unlock features.</li>
              <li style={{ marginBottom: '8px' }}>Provide customer support and respond to your inquiries. We do not and will never sell your personal data to any third parties for advertising or any other purposes.</li>
            </ul>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>4. Third-Party Services</h3>
            <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
              We utilize trusted third-party services to help operate our app, including:
            </p>
            <ul style={{ marginBottom: '30px', color: 'var(--text-muted)', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>Payment and subscription processors (Apple, Google, RevenueCat).</li>
              <li style={{ marginBottom: '8px' }}>Analytics and crash reporting tools (e.g., Firebase). These services are bound by their own strict privacy policies and data protection standards.</li>
            </ul>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>5. Data Security</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              We implement industry-standard security measures, including strong encryption protocols and secure server infrastructure, to protect your data and network traffic. However, please be aware that no system or transmission over the internet can be guaranteed to be 100% secure.
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>6. Data Retention and Deletion</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              We retain personal data only for as long as your account is active or as needed to provide you the service. You have the right to request the deletion of your account and all associated data at any time. You can do this directly within the app settings or by contacting our support team.
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>7. Children’s Privacy</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              Our service is not intended for or directed at children under the age of 13 (or the applicable age of digital consent in your jurisdiction). We do not knowingly collect personal information from children.
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>8. Changes to This Policy</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this page periodically. Your continued use of the app after any changes constitutes your acceptance of the updated policy.
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>9. Contact Us</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              If you have any questions, concerns, or wish to exercise your data rights (including account deletion), please contact us at:
              <br /><br />
              <strong>Email:</strong> <a href="mailto:thien789987@gmail.com">thien789987@gmail.com</a>
            </p>

          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;
