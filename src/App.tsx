import { useEffect, useMemo, useState } from 'react';
import { LandingPage } from './app/routes/LandingPage';
import PrivacyPolicy from './components/privacy/privacy_policy';

function App() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const route = useMemo(() => {
    const normalized = path.replace(/\/+$/, '') || '/';
    if (normalized === '/privacy') {
      return <PrivacyPolicy />;
    }
    return <LandingPage />;
  }, [path]);

  return route;
}

export default App;
