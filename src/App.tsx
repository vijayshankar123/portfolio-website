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

function App() {
  const { isMaintainanceMode } = appConfig;
  return (
    <>
      <Router>
        <Header />
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
              <Route path="/" element={<Homepage />} />
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
