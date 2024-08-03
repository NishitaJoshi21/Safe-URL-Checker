import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Login/Home";

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Routes>
        <Route exact path="/" Component={Home} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
