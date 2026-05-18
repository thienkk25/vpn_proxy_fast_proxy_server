import { useEffect } from 'react';

const TermsOfServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ position: 'relative', zIndex: 10 }}>
      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container text-center">
          <h2 className="hero-title">Terms of <span className="text-gradient">Service</span></h2>
          <p className="hero-subtitle">Please read these terms carefully before using our VPN service.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
            <p style={{ marginBottom: '30px', fontWeight: '500' }}>
              Last updated: May 2026
            </p>
            
            <p style={{ marginBottom: '40px', color: 'var(--text-muted)' }}>
              These Terms of Service ("Terms") govern your use of the VPN Proxy: Fast Proxy Server application (the "App") and any related services provided by us. By downloading, accessing, or using the App, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the App.
              <br /><br />
              By using the application, you represent that you are at least 18 years old, or have valid consent from a parent or legal guardian.
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>1. Description of Service</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              We provide a Virtual Private Network (VPN) service that encrypts your internet connection and routes it through our secure servers. This service is intended to enhance your online privacy and security. We do not guarantee that the service will be uninterrupted, error-free, or completely secure.
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>2. Acceptable Use Policy</h3>
            <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
              You agree to use the App only for lawful purposes. You are strictly prohibited from using our service to:
            </p>
            <ul style={{ marginBottom: '30px', color: 'var(--text-muted)', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>Engage in illegal activities, including copyright infringement, distribution of illegal content, or unauthorized access to other systems.</li>
              <li style={{ marginBottom: '8px' }}>Distribute spam, malware, viruses, or other harmful software.</li>
              <li style={{ marginBottom: '8px' }}>Perform denial-of-service (DoS) attacks or any action that imposes an unreasonable load on our infrastructure.</li>
              <li style={{ marginBottom: '8px' }}>Harass, abuse, insult, harm, defame, slander, or disparage others.</li>
              <li style={{ marginBottom: '8px' }}>Resell, redistribute, or sublicense the service without our express written permission.</li>
            </ul>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              Violation of this policy may result in immediate termination of your access to the service without a refund.
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>3. Subscriptions and Payments</h3>
            <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
              Certain features of the App are available only with a premium subscription.
            </p>
            <ul style={{ marginBottom: '30px', color: 'var(--text-muted)', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>Payment will be charged to your Apple ID or Google Play account at the confirmation of purchase.</li>
              <li style={{ marginBottom: '8px' }}>Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period.</li>
              <li style={{ marginBottom: '8px' }}>Your account will be charged for renewal within 24 hours prior to the end of the current period.</li>
              <li style={{ marginBottom: '8px' }}>You can manage and cancel your subscriptions by going to your account settings on the App Store or Google Play after purchase.</li>
            </ul>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>4. Privacy and Data Collection</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              We maintain a strict No-Logs policy. We do not track or store your browsing activity, traffic destinations, or DNS queries. For detailed information on how we handle your data, please review our <a href="/privacy-policy" style={{ color: 'var(--primary)' }}>Privacy Policy</a>.
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>5. Disclaimer of Warranties</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              The service is provided on an "AS IS" and "AS AVAILABLE" basis. We disclaim all warranties of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We make no warranty that the service will meet your requirements or be available on an uninterrupted, secure, or error-free basis.
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>6. Limitation of Liability</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              To the maximum extent permitted by applicable law, in no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the service; or (b) any unauthorized access, use, or alteration of your transmissions or content. Our total liability is limited to the amounts paid by you for the service, where applicable law permits.
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>7. Intellectual Property</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              All intellectual property rights in the application and related content belong to us or our licensors. You receive a limited, non-exclusive, non-transferable license for personal use in accordance with these terms. You may not modify, copy, distribute, reverse engineer, decompile, or create derivative works without our written permission.
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>8. Indemnification</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              You agree to indemnify and hold us harmless from any claims, losses, liabilities, damages, and expenses (including legal fees) arising from your use of the service or your breach of these Terms.
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>9. Governing Law</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              These terms are governed by applicable laws in the relevant jurisdiction. Any disputes arising out of or related to these Terms or the service are subject to the exclusive jurisdiction of the competent courts as allowed by law.
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>10. Changes to Terms</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              We reserve the right to modify these Terms at any time. We will provide notice of any material changes by updating the "Last updated" date at the top of these Terms. Your continued use of the App after any such changes constitutes your acceptance of the new Terms.
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>11. Contact Information</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              If you have any questions about these Terms, please contact us at:
              <br /><br />
              <strong>Email:</strong> <a href="mailto:thien789987@gmail.com">thien789987@gmail.com</a>
            </p>

          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsOfServicePage;
