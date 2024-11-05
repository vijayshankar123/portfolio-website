
import './App.css'
import { BrowserRouter as Router, Route, Navigate, Routes, } from 'react-router-dom';
import Homepage from './Homepage';

function App() {

  return (
    <>
       <Router>
        <Routes>

        <Route  path="/" element={<Homepage />} />
        {/* Add other routes here */}

        {/* Catch-all route for 404s */}
        <Route path="*" element={<Navigate to="/" />} />
        </Routes>

    </Router>
    </>
  )
}

export default App
