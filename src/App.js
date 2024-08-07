import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Plan from "./Components/Plan";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Plan" element={<Plan />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
