import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "./SearchPage";
import { useEffect, useState } from "react";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function App() {
  const [icon, setIcon] = useState(<EmojiObjectsIcon />);
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      setIcon(<EmojiObjectsIcon />);
    } else {
      setTheme("dark");
      setIcon(<DarkModeIcon />);
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  // Bem
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/search"
            element={<SearchPage toggleTheme={toggleTheme} icon={icon} />}
          />
        </Routes>
        <Routes>
          <Route
            path="/"
            element={<Home toggleTheme={toggleTheme} icon={icon} />}
          />
        </Routes>

        {/* Home (the one with the search on)*/}

        {/* SearchPage (The results page) */}
      </Router>
    </div>
  );
}

export default App;
