import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';
import Perfil from './pages/Perfil'
import Analytics from './pages/Analytics';
import Settings from './pages/Settings'
import Vendas from './pages/Vendas'
import Crescimento from './pages/Crescimento'
import User from './pages/User'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path='/perfil' element={<Perfil />}/>
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/analytics" element={<Analytics/>} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/vendas" element={<Vendas />} />
        <Route path='/crescimento' element={<Crescimento />} />
        <Route path='/user' element={<User />} />
      </Routes>
    </Router>
  );
};

export default App;
