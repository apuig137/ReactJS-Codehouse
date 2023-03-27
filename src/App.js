import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemListFilter from './components/ItemListFilter/ItemsListFilter';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Bienvenido a nuestra pagina"}/>}/>
          <Route path='/categoria/:category' element={<ItemListFilter/>}/>
          <Route path='item/:itemId' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
