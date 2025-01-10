import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SearchJobs from "./SearchJobs";
import Application from "./Application";
import Profile from "./Profile";
import Login from "./Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SearchJobs" element={<SearchJobs />} />
        <Route path="/Application" element={<Application />} />
        <Route path="/Profile" element={<Profile />} />

      </Routes>
    </Router>
  );
}

export default App;

