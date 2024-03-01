import ContactUs from './components/Routes/ContactUs';
import HomePage from './components/Routes/HomePage';
import Handluj from './components/Routes/Handluj';
import About from './components/Routes/About';
import Uslugi from './components/Routes/Uslugi';

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path = "/Harvium-LandingPage/" element={<HomePage />}></Route>
        <Route exact path = "/Harvium-LandingPage/Handluj" element={<Handluj />}></Route>
        <Route exact path = "/Harvium-LandingPage/Uslugi" element={<Uslugi />}></Route>
        <Route exact path = "/Harvium-LandingPage/About" element={<About />}></Route>
        <Route exact path = "/Harvium-LandingPage/Contact" element={<ContactUs />}></Route>
      </Routes>
    </Router>
  )
}

export default App
