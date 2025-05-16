import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import MembershipPage from "./Pages/MembershipPage";
import EventsPage from "./Pages/EventsPage";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Navbar/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
