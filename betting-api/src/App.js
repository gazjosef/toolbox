import './App.scss';

import { SearchBar } from './components/SearchBar/SearchBar'
import { Output } from './components/Output/Output'

function App() {
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
