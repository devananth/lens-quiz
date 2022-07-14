import React from 'react';
import './App.css';
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
    </div>
  );
}

export default App;
