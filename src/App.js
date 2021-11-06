import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import ItemDetailContainer from './containers/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from './containers/itemListContainer/ItemListContainer';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <main className="App">
            <ItemListContainer greetings="Bienvenidos a Somos Wica" />
          </main>
        </Route>
        <Route exact path="/categoria/:categoryID">
          <ItemListContainer greetings="Bienvenidos a Somos Wica" />
        </Route>
        <Route exact path="/item/:itemId">
          <ItemDetailContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
