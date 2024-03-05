// ** Import Share Component
import Layout from "../components/Layout/Layout";
import Register from "../components/Sections/Register";
import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <main>
          <h1 className="text-3xl font-bold underline">Hello World</h1>
          <Register />
        </main>
      </Layout>
    </>
  );
}

export default App;
