import ContactPage from './components/Routes/ContactPage';
import HomePage from './components/Routes/HomePage';
import About from './components/Routes/About';
import Uslugi from './components/Routes/Uslugi';
import TermsOfUse from './components/Routes/TermsOfUse';

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path = "/" element={<HomePage />}></Route>
        <Route exact path = "/Handluj" element={<ContactPage />}></Route>
        <Route exact path = "/Uslugi" element={<Uslugi />}></Route>
        <Route exact path = "/About" element={<About />}></Route>
        <Route exact path = "/Contact" element={<ContactPage />}></Route>
        <Route exact path = "/TermsOfUse" element={<TermsOfUse />}></Route>
      </Routes>
    </Router>
  )
}

export default App
