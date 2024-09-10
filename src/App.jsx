import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import BaseLayOut from './layout/BaseLayout';
import Home from './pages/Home/Home';
import Store from './pages/Store/Store';
import Detail from './pages/Detail/Detail';

function App() {
 
  return (
    <BrowserRouter>
      <BaseLayOut>
        <Routes>
          <Route exact path='/' element = {<Home />}/>
          <Route exact path='/tienda' element = {<Store />}/>
          <Route exact path='/detalle/:id' element = {<Detail />}/>
        </Routes>
      </BaseLayOut>
    </BrowserRouter>
  )
}

export default App;
