import './App.css';

import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Sidebar/>
        <CartProvider>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Bienvenido a nuestra pagina"}/>}/>
            <Route path="/category/:category" element={<ItemListContainer/>}/>
            <Route path='item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<h1 style={{marginTop: 100, marginLeft: "22%"}}>Checkout</h1>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
