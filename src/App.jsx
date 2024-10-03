import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CartContextProvider from './context/CartContext';
import './App.css'
import BaseLayOut from './layout/BaseLayout';
import Home from './pages/Home/Home';
import Store from './pages/Store/Store';
import Detail from './pages/Detail/Detail';
import CartView from './pages/CartView/CartView';

function App() {
 
  return (
    <CartContextProvider>
      <BrowserRouter>
        <BaseLayOut>
          <Routes>
            <Route exact path='/' element = {<Home />}/>
            <Route exact path='/tienda' element = {<Store />}/>
            <Route exact path='/detalle/:id' element = {<Detail />}/>
            <Route path='/cart' element= {<CartView />}/>
          </Routes>
        </BaseLayOut>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;
