import "./App.css";
import Header from "../components/Layout/Header.tsx";
import Calendar from "../components/Snippets/Calendar.tsx";

function App() {
  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Calendar />
    </>
  );
}

export default App;
