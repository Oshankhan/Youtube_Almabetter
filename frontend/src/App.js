import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Component/NavBar";
import HomePage from "./Pages/HomePage";
import AllSubs from "./Pages/AllSubs";
import SingleSubPage from "./Pages/SingleSubPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/allSubs" element={<AllSubs />} />
          <Route path="/all/:id" element={<SingleSubPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
