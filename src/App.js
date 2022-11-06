import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={[<Header />, <Home />]} />
          <Route exact path="/checkout" element={[<Header />, <Checkout />]} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
