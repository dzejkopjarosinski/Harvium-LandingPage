import ContactPage from './components/Routes/ContactPage';
import HomePage from './components/Routes/HomePage';
import About from './components/Routes/About';
import Services from './components/Routes/services/services';
import TermsOfUse from './components/Routes/TermsOfUse';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path = "/Harvium-LandingPage/" element={<HomePage />}></Route>
        <Route exact path = "/Harvium-LandingPage/Handluj" element={<ContactPage />}></Route>
        <Route exact path = "/Harvium-LandingPage/Uslugi" element={<Services />}></Route>
        <Route exact path = "/Harvium-LandingPage/About" element={<About />}></Route>
        <Route exact path = "/Harvium-LandingPage/Contact" element={<ContactPage />}></Route>
        <Route exact path = "/Harvium-LandingPage/TermsOfUse" element={<TermsOfUse />}></Route>
      </Routes>
    </Router>
  )
}

export default App
