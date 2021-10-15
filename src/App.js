
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greetings="Bienvenidos a Somos Wica" />
    </div>
  );
}

export default App;
