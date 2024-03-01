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
        <Route exact path = "/" element={<HomePage />}></Route>
        <Route exact path = "Handluj" element={<Handluj />}></Route>
        <Route exact path = "Uslugi" element={<Uslugi />}></Route>
        <Route exact path = "About" element={<About />}></Route>
        <Route exact path = "Contact" element={<ContactUs />}></Route>
      </Routes>
    </Router>
  )
}

export default App
