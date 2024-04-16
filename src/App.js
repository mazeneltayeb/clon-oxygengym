// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import OffcanvasExample from './components/navbar/Navbar';
import Home from './components/Home/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './components/aboutUs/About';
import Store from './components/store/Store';
import { AnimatePresence } from 'framer-motion';
// import Footer from './components/Home/footer/Footer';
// import Navbar from './components/navbar/Navbar';
import Personaltraining from './components/personal-training/personaltraining/Personaltraining';
function App() {
  const location =useLocation()
  return (
    <div className="App">
    {/* <OffcanvasExample/> */}
    {/* <Navbar/> */}
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="store" element={<Store />}/>
        <Route path="personaltraining" element={<Personaltraining />}/>
      </Routes>
      </AnimatePresence>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
