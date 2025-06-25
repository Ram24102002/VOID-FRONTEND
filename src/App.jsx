// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/common/NavBar';
import NavbarMobile from './components/common/NavbarMobile';
import AnimePage from './pages/AnimePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Footer from './components/common/Footer';

function App() {
  return (
    <Router>
      < NavBar />
      <NavbarMobile />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime" element={<AnimePage />} />
        <Route path="/ProductDetailsPage" element={<ProductDetailsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
