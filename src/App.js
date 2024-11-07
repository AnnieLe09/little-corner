import "./App.scss";
import HomePage from "./pages/home";
import ResumePage from "./pages/resume";
import LoginPage from "./pages/login";
import NotFoundPage from "./pages/error/NotFoundPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/resume" element={<ResumePage />} /> */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
