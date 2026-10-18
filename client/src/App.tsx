import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import IndustriesPage from "./pages/IndustriesPage";
import InsightsPage from "./pages/InsightsPage";
import ScrollToTop from "./components/ScrollToTop";
import MockupsPage from "./pages/MochupsPage";

export default function App() {
  return (
    // routes that connect my pages
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/3d-mockups" element={<MockupsPage />} />
            <Route path="/insights" element={<InsightsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
