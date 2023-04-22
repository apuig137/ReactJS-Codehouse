import './App.css';

import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Sidebar/>
        <CartProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Bienvenido a nuestra pagina"}/>}/>
            <Route path="/category/:category" element={<ItemListContainer/>}/>
            <Route path='item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path='/sobre-nosotros' element={<AboutUs/>}/>
            <Route path='/contacto' element={<Contact/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
