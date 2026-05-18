import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <img src="/logo.png" alt="VPN Proxy Logo" style={{ width: '40px', height: '40px', borderRadius: '10px' }} />
              <h4>{t('vpnProxyTitle', 'VPN Proxy: Fast Proxy Server').replace('\n', ': ')}</h4>
            </div>
            <p>{t('web.footer.tagline', 'Fast, Secure & Private Proxy Server')}</p>
          </div>
          <div className="footer-links">
            <Link to="/support">{t('web.nav.support', 'Support')}</Link>
            <Link to="/terms">{t('web.terms.title', 'Terms of')} {t('web.terms.title_gradient', 'Service')}</Link>
            <Link to="/privacy-policy">{t('privacy_policy', 'Privacy Policy')}</Link>
          </div>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} TN. {t('web.footer.all_rights_reserved', 'All rights reserved.')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
