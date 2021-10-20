
import './App.css';
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemCount from './components/itemCount/ItemCount';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greetings="Bienvenidos a Somos Wica">
        <ItemCount stock={10} initial={1}/>
      </ItemListContainer>
    </div>
  );
}

export default App;
