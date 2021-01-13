import './App.scss';

import { SearchBar } from './components/SearchBar/SearchBar'
import { Output } from './components/Output/Output'

function App() {
  // Output
  // let outputEl = document.getElementById('output');
  // let tableEl = document.getElementById('table');
  // let sportEl = document.getElementById('selectSport');
  // let compEl = document.getElementById('selectComp');
  // let marketEl = document.getElementById('selectMarket');
// let regionEl = document.getElementById('selectRegion');
  return (
    <div className="App">
      <header className="App-header">
        <h1>$$$ Odds Checker</h1>
        <SearchBar />
        <Output />
      </header>
    </div>
  );
}

export default App;
