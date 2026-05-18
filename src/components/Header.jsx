import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isMarketing = location.pathname === '/' || location.pathname === '/marketing';

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="VPN Proxy Logo" style={{ width: '40px', height: '40px', borderRadius: '10px' }} />
          <h1>{t('vpnProxyTitle', 'VPN Proxy: Fast Proxy Server').replace('\n', ': ')}</h1>
        </Link>
        <nav>
          {isMarketing ? (
            <>
              <a href="#features">{t('web.nav.features', 'Features')}</a>
              <a href="#servers">{t('web.nav.servers', 'Servers')}</a>
              <a href="#pricing">{t('premium', 'Premium')}</a>
            </>
          ) : (
            <>
              <Link to="/">{t('home', 'Home')}</Link>
              <Link to="/support">{t('web.nav.support', 'Support')}</Link>
              <Link to="/privacy-policy">{t('privacy_policy', 'Privacy Policy')}</Link>
            </>
          )}
        </nav>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <LanguageSwitcher />
          {isMarketing ? (
            <a href="#download" className="btn btn-outline">{t('download', 'Download App')}</a>
          ) : (
            <Link to="/" className="btn btn-outline">{t('download', 'Get App')}</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
