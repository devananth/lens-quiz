import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useDocumentTitle } from "./custom-hooks";
import { Header, Footer } from "./components";
import { AllRoutes } from "./routes";

function App() {
  useDocumentTitle("Lens Quiz");
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
      <ToastContainer position="top-right" autoClose={1000} />
    </div>
  );
}

export default App;
