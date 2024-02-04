import "./App.css";
import Iphone from "../components/Layout/Iphone.tsx";

function App() {
  return (
    <>
      <div className="min-h-screen | grid place-items-center">
        <Iphone />
      </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
