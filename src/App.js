import React from 'react'
import Navbar from './components/Navbar'
import ProductsPage from './components/ProductsListingPage/ProductsPage'
import {Routes, Route} from 'react-router-dom';
import Product from './components/ProductMainPage/ProductMain';
import ProductMain from './components/ProductMainPage/ProductMain';
import ProductState from './context/productContext/ProductsState';
import CartMain from './components/CartPage/CartMain';
import CartState from './context/cartContext/CartState';

const App = () => {
  return (
    <>
    <CartState>
    <ProductState>

      <Navbar />
      
      <Routes>

        <Route exact path='/' element={<ProductsPage />} />
        <Route exact path="/categories/electronics" element={<ProductsPage  />} />
        <Route exact path="/categories/jewelery" element={<ProductsPage  />} />
        <Route exact path="/categories/men's clothing" element={<ProductsPage  />} />
        <Route exact path="/categories/women's clothing" element={<ProductsPage  />} />
        <Route exact path="/p/:productid" element={<ProductMain />} />
        <Route exact path="/u/cart" element={<CartMain />} />

      </Routes>
      
    </ProductState>
    </CartState>
    </>
  )
}

export default App