
import './App.css';
import Navbar from "./components/navbar/Navbar";
import ItemDetailContainer from './containers/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from './containers/itemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="large-container">
        <ItemListContainer greetings="Bienvenidos a Somos Wica" />
        <ItemDetailContainer />
      </div>
      
    </div>
  );
}

export default App;
