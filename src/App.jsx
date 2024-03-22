import ContactPage from './components/Routes/ContactPage';
import HomePage from './components/Routes/HomePage';
import About from './components/Routes/About';
import Uslugi from './components/Routes/Uslugi';
import TermsOfUse from './components/Routes/TermsOfUse';
import ProductPage from './components/Routes/ProductsPage';
import ProductDetailPage from './components/Routes/ProductDetailPage';

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path = "/Harvium-LandingPage/" element={<HomePage />}></Route>
        <Route exact path = "/Harvium-LandingPage/Handluj" element={<ContactPage />}></Route>
        <Route exact path = "/Harvium-LandingPage/Uslugi" element={<Uslugi />}></Route>
        <Route exact path = "/Harvium-LandingPage/About" element={<About />}></Route>
        <Route exact path = "/Harvium-LandingPage/Contact" element={<ContactPage />}></Route>
        <Route exact path = "/Harvium-LandingPage/TermsOfUse" element={<TermsOfUse />}></Route>
        <Route exact path = "/Harvium-LandingPage/Products" element={<ProductPage />}></Route>
        <Route exact path = "/Harvium-LandingPage/ProductDetail" element={<ProductDetailPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App
