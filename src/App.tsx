import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import Homepage from "./Homepage";
// import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* Add other routes here */}

          {/* Catch-all route for 404s */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
      {/* enable analytics once dev is done */}
      {/* <Analytics /> */}
      <SpeedInsights />
    </>
  );
}

export default App;
