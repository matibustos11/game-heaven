import './App.css'
import BaseLayOut from './layout/BaseLayout';
import ItemList from './components/ItemList/ItemList';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
 
  return (
    <>
      <BaseLayOut>
      <ItemList />
      </BaseLayOut>
    </>
  )
}

export default App;
