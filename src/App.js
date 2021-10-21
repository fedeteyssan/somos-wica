
import './App.css';
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from './containers/itemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greetings="Bienvenidos a Somos Wica" />
    </div>
  );
}

export default App;
