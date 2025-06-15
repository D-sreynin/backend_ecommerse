import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; 
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';
import TestPaymentPage from './components/TestPaymentPage';
import AdminDah from './admin/AdminDah';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Users from './admin/Users';
import CreateUser from './admin/CreateUsers';
import ProductAdmin from './admin/Product';
import SizeAdmin from './admin/Size';
import TypeAdmin from './admin/Type';
import CreateProduct from './admin/CreateProducts';
import CreateSize from './admin/CreateSize';
import CreateType from './admin/CreateType';

const App = () => {
  return (
    <Router> 
       <Routes>
        <Route path="/login" element={<Login />} /> 
          <Route path="/administator" element={<AdminDah />} /> 
          <Route path="/users" element={<Users />} /> 
          <Route path="/createuser" element={<CreateUser />} /> 
          <Route path="/createproduct" element={<CreateProduct />} /> 
          <Route path="/createsize" element={<CreateSize />} /> 
          <Route path="/createtype" element={<CreateType />} /> 
          <Route path="/product" element={<ProductAdmin />} /> 
          <Route path="/size" element={<SizeAdmin />} /> 
          <Route path="/type" element={<TypeAdmin />} /> 
          <Route path="/register" element={<Register />} /> 
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} /> 
          <Route path="/test-payment" element={<TestPaymentPage />} />
          </Route>
        </Routes>
    </Router>
  );
};

export default App;