import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import Home from '../../../Home';
import AboutUs from '../About/AboutUs';
import Contact from '../Contact/Contact';
import Locations from '../Location/Locations';
import Login from '../Signup/Login';
import Error from '../Error/Error';

const Paths = ({productItems, cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) => {
  return (
    <div>
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/menu/*' element={<Products productItems={productItems} handleAddProduct={handleAddProduct}/>}></Route>
            <Route path='/about/*' element={<AboutUs />}></Route>
            <Route path='/contact/*' element={<Contact />}></Route>
            <Route path='/location/*' element={<Locations />}></Route>
            <Route path='/cart/*' element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>}></Route>
            <Route path='/login/*' element={<Login />}></Route>
            <Route path= '*' element={<Error />}></Route>
        </Routes>
    </div>
  )
}

export default Paths;