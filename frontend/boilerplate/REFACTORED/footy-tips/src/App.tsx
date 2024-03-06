// ** Import Share Component
import Layout from "../components/Layout/Layout";
import Login from "../components/Sections/Login";
import Register from "../components/Sections/Register";
import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <Login />
        <Register />
      </Layout>
    </>
  );
}

export default App;
