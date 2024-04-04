import ContactPage from './components/Routes/ContactPage';
import HomePage from './components/Routes/HomePage';
import About from './components/Routes/About';
import Services from './components/Routes/services/services';
import TermsOfUse from './components/Routes/TermsOfUse';
import ProductPage from './components/Routes/ProductsPage';
import ProductDetailPage from './components/Routes/ProductDetailPage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path = "/" element={<HomePage />}></Route>
        <Route exact path = "Handluj" element={<ContactPage />}></Route>
        <Route exact path = "Uslugi" element={<Uslugi />}></Route>
        <Route exact path = "About" element={<About />}></Route>
        <Route exact path = "Contact" element={<ContactPage />}></Route>
        <Route exact path = "TermsOfUse" element={<TermsOfUse />}></Route>
      </Routes>
    </Router>
  )
}

export default App
