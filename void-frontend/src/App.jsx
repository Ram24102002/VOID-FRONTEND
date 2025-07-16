// App.js
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register'
import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import CollectionsPage from './pages/CollectionsPage';
import NavBar from './components/common/NavBar';
import NavbarMobile from './components/common/NavbarMobile';
import AnimePage from './pages/AnimePage';
import Footer from './components/common/Footer';
import ContactUsPage from './pages/ContactUsPage';
import Product from './pages/Product.jsx';


function AppContent() {

  const location = useLocation();
  const hideLayoutRoutes = ['/login', '/404', '/register'];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      
           {!shouldHideLayout && <NavBar />}
           {!shouldHideLayout && <NavbarMobile />}
      
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path='/collections' element={<CollectionsPage />} />
        <Route path="/anime" element={<AnimePage />} />
        <Route path="/product" element={<Product />} />

      </Routes>
      
        {!shouldHideLayout && <Footer />}
    </>
    
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}


