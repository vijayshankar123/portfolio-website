import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from 'react-router-dom';
import Homepage from './pages/Homepage';
// import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { appConfig } from './utils/appConfig';
import Maintenance from './components/Maintainance';
import Header from './components/Header';
import Footer from './components/Footer';
import { useRef } from 'react';

function App() {
  const { isMaintainanceMode } = appConfig;
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const refMapping = {
    about: aboutRef,
    experience: experienceRef,
    contact: contactRef,
  };

  function scrollToSection(section: keyof typeof refMapping) {
    const ref = refMapping[section];
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Router>
        <Header scrollToSection={scrollToSection} />
        <Routes>
          {isMaintainanceMode ? (
            <>
              <Route path="/" element={<Maintenance />} />
              {/* Add other routes here */}

              {/* Catch-all route for 404s */}
              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route
                path="/"
                element={
                  <Homepage
                    scrollToSection={scrollToSection}
                    refMapping={refMapping}
                  />
                }
              />
              {/* Add other routes here */}

              {/* Catch-all route for 404s */}
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
        <Footer />
      </Router>
      {/* enable analytics once dev is done */}
      {/* <Analytics /> */}
      <SpeedInsights />
    </>
  );
}

export default App;
