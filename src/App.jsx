import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer'
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import CartContext  from './context/CartContext';
import  { Form } from './components/form'

const App = () => {
  return (
    <BrowserRouter key={BrowserRouter.id}>
    <CartContext key={CartContext.id} > 
    <NavBar key={NavBar.id} />
    <Routes key={Routes.id} >
    <Route path="/" element={<ItemListContainer key={ItemListContainer.id} name = 'Indiaccesorio' />}/>
    <Route path="/category/:categoriaSelec" element={<ItemListContainer name ="indiaccesorio"  />}/>
    <Route path="/item/:Id" element={<ItemDetailContainer />}/>
    <Route path="/cart" element={<Cart  />}/>
    <Route path="/form" element={<Form />} />  
    </Routes>
    <Footer />
    </CartContext>
    </BrowserRouter>
    
  );
}

export default App;
