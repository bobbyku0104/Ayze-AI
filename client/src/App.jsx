import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/contact.jsx";
import Login from "./components/login/login.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
       <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
