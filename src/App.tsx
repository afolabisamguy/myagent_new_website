import { useEffect, useMemo, useState } from "react";
import { LandingPage } from "./app/routes/LandingPage";
import PrivacyPolicy from "./components/privacy/privacy_policy";

function App() {
  const [path, setPath] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const p = params.get("p");
    return p ?? window.location.pathname;
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const p = params.get("p");

    if (p) {
      window.history.replaceState({}, "", p);
      setPath(p);
    }

    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const route = useMemo(() => {
    const normalized = path.replace(/\/+$/, "") || "/";
    if (normalized === "/privacy") return <PrivacyPolicy />;
    return <LandingPage />;
  }, [path]);

  return route;
}

export default App;
