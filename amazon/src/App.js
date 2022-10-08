import './App.css';
import BedItems from './components/BedItems';
import Footer from './components/Footer';
import Header from './components/Header';
import Kitchen from './components/Kitchen';
import LastOffers from './components/LastOffers';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Products from './components/Products';
import SecNavbar from './components/secNavbar';
import SecOffer from './components/SecOffer';
import SecProduct from './components/SecProduct';
import Type from './components/Type';

function App() {
  return (
    <>
      <Navbar /><br /><br />
      <SecNavbar />
      <Header />
      <Offers />
      <Products /><br /><br />
      <Kitchen /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <SecOffer /><br /><br /><br />
      <SecProduct />
      
      <BedItems />
      <br /><br /><br /><br />  <br /><br /><br /><br /> <br /><br /><br /><br />
      <LastOffers />
      <Type />
      <Footer />
    </>
  );
}

export default App;
