import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  // Bem
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        {/* Home (the one with the search on)*/}

        {/* SearchPage (The results page) */}
      </Router>
    </div>
  );
}

export default App;
