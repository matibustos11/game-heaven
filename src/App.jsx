import './App.css'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
 
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={'GAME HEAVEN - LEVEL UP YOUR GAME'} />
    </>
  )
}

export default App;
