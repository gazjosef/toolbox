import './App.scss';
import { Route, Switch } from 'react-router-dom';

// Layout
import { NavBar } from "./Components/Layout/NavBar/NavBar"

import { Home } from "./Components/Pages/Home/Home"
import { Work } from "./Components/Pages/Work/Work"
import { Contact } from "./Components/Pages/Contact/Contact"

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
