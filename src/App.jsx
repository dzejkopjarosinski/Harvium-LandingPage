import NavBar from "./components/custom/NavBar";
import Header from "./components/custom/Header";
import Presentation from "./components/custom/Presentation";
import Services from "./components/custom/Services";
import PriceTable from "./components/custom/PriceTable";
import Footer from "./components/custom/Footer";
import Oferta from "./components/custom/Oferta";

function App() {

  return (
    <>
      <div>
        <NavBar />
        <Header />
        <Presentation />
        <Services />
        <PriceTable />
        <Oferta />
        <Footer />
      </div>
    </>
  )
}

export default App
