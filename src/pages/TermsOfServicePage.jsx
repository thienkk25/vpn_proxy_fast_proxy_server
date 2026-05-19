import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const TermsOfServicePage = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ position: 'relative', zIndex: 10 }}>
      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container text-center">
          <h2 className="hero-title">{t('web.terms.title', 'Terms of')} <span className="text-gradient">{t('web.terms.title_gradient', 'Service')}</span></h2>
          <p className="hero-subtitle">{t('web.terms.subtitle', 'Please read these terms carefully before using our VPN service.')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
            <p style={{ marginBottom: '30px', fontWeight: '500' }}>
              {t('web.legal.last_updated', 'Last updated: May 2026')}
            </p>
            
            <p style={{ marginBottom: '40px', color: 'var(--text-muted)' }}>
              {t('web.terms.intro', 'These Terms of Service ("Terms") govern your use of the VPN Proxy: Fast Proxy Server application (the "App") and any related services provided by us. By downloading, accessing, or using the App, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the App.')}
              <br /><br />
              {t('web.terms.intro2', 'By using the application, you represent that you are at least 18 years old, or have valid consent from a parent or legal guardian.')}
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>{t('web.terms.section1_title', '1. Description of Service')}</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              {t('web.terms.section1_desc', 'We provide a Virtual Private Network (VPN) service that encrypts your internet connection and routes it through our secure servers. This service is intended to enhance your online privacy and security. We do not guarantee that the service will be uninterrupted, error-free, or completely secure.')}
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>{t('web.terms.section2_title', '2. Acceptable Use Policy')}</h3>
            <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
              {t('web.terms.section2_desc', 'You agree to use the App only for lawful purposes. You are strictly prohibited from using our service to:')}
            </p>
            <ul style={{ marginBottom: '30px', color: 'var(--text-muted)', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>{t('web.terms.section2_li1', 'Engage in illegal activities, including copyright infringement, distribution of illegal content, or unauthorized access to other systems.')}</li>
              <li style={{ marginBottom: '8px' }}>{t('web.terms.section2_li2', 'Distribute spam, malware, viruses, or other harmful software.')}</li>
              <li style={{ marginBottom: '8px' }}>{t('web.terms.section2_li3', 'Perform denial-of-service (DoS) attacks or any action that imposes an unreasonable load on our infrastructure.')}</li>
              <li style={{ marginBottom: '8px' }}>{t('web.terms.section2_li4', 'Harass, abuse, insult, harm, defame, slander, or disparage others.')}</li>
              <li style={{ marginBottom: '8px' }}>{t('web.terms.section2_li5', 'Resell, redistribute, or sublicense the service without our express written permission.')}</li>
            </ul>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              {t('web.terms.section2_outro', 'Violation of this policy may result in immediate termination of your access to the service without a refund.')}
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>{t('web.terms.section3_title', '3. Subscriptions and Payments')}</h3>
            <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
              {t('web.terms.section3_desc', 'Certain features of the App are available only with a premium subscription.')}
            </p>
            <ul style={{ marginBottom: '30px', color: 'var(--text-muted)', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>{t('web.terms.section3_li1', 'Payment will be charged to your Apple ID or Google Play account at the confirmation of purchase.')}</li>
              <li style={{ marginBottom: '8px' }}>{t('web.terms.section3_li2', 'Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period.')}</li>
              <li style={{ marginBottom: '8px' }}>{t('web.terms.section3_li3', 'Your account will be charged for renewal within 24 hours prior to the end of the current period.')}</li>
              <li style={{ marginBottom: '8px' }}>{t('web.terms.section3_li4', 'You can manage and cancel your subscriptions by going to your account settings after purchase.')}</li>
            </ul>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>{t('web.terms.section4_title', '4. Privacy and Data Collection')}</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              {t('web.terms.section4_desc', 'We maintain a strict No-Logs policy. We do not track or store your browsing activity, traffic destinations, or DNS queries.')} <a href="/privacy-policy" style={{ color: 'var(--primary)' }}>{t('privacy_policy', 'Privacy Policy')}</a>.
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>{t('web.terms.section5_title', '5. Disclaimer of Warranties')}</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              {t('web.terms.section5_desc', 'The service is provided on an "AS IS" and "AS AVAILABLE" basis. We disclaim all warranties of any kind, whether express or implied.')}
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>{t('web.terms.section6_title', '6. Limitation of Liability')}</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              {t('web.terms.section6_desc', 'To the maximum extent permitted by applicable law, in no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages.')}
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>{t('web.terms.section7_title', '7. Intellectual Property')}</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              {t('web.terms.section7_desc', 'All intellectual property rights in the application and related content belong to us or our licensors.')}
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>{t('web.terms.section8_title', '8. Indemnification')}</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              {t('web.terms.section8_desc', 'You agree to indemnify and hold us harmless from any claims, losses, liabilities, damages, and expenses arising from your use of the service or your breach of these Terms.')}
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>{t('web.terms.section9_title', '9. Governing Law')}</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              {t('web.terms.section9_desc', 'These terms are governed by applicable laws in the relevant jurisdiction. Any disputes arising out of or related to these Terms or the service are subject to the exclusive jurisdiction of the competent courts as allowed by law.')}
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>{t('web.terms.section10_title', '10. Changes to Terms')}</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              {t('web.terms.section10_desc', 'We reserve the right to modify these Terms at any time. We will provide notice of any material changes by updating the "Last updated" date at the top of these Terms. Your continued use of the App after any such changes constitutes your acceptance of the new Terms.')}
            </p>

            <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>{t('web.terms.section11_title', '11. Contact Information')}</h3>
            <p style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              {t('web.legal.contact_desc', 'If you have any questions, please contact us at:')}
              <br /><br />
              <strong>{t('email', 'Email')}:</strong> <a href="mailto:support.tn25@gmail.com">support.tn25@gmail.com</a>
            </p>

          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsOfServicePage;
