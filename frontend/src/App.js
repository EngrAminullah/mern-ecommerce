import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Categories from './components/Categories';
import Testimonials from './components/Testimonials';
import ProductPage from './pages/ProductPage';  // <-- import
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import ManageProductsPage from './pages/ManageProductsPage';
import AddProductPage from './pages/AddProductPage';
import ManageOrdersPage from './pages/ManageOrdersPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <FeaturedProducts />
            <Categories />
            <Testimonials />
          </>
        } />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} /> 
        <Route path="/admin" element={<AdminDashboardPage />} /> 
        <Route path="/admin/products" element={<ManageProductsPage />}/>
        <Route path="/admin/products/add" element={<AddProductPage />} />
        <Route path="/admin/orders" element={<ManageOrdersPage />} />

      </Routes>
    </Router>
  );
}

export default App;
