// ** Import Share Component
import Layout from "../components/Layout/Layout";
import Register from "../components/Sections/Register";
import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <main className="container | min-h-[85vh] mx-auto p-12">
          <div className="mx-auto">
            <Register />
          </div>
        </main>
      </Layout>
    </>
  );
}

export default App;
