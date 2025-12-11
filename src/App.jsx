import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Connecte from "./Pages/Connecte";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
              <Home />
          }
        />
        <Route
          path="/Skills"
          element={
              <Skills />
          }
        />
        <Route
          path="/Connecte"
          element={
              <Connecte />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
