import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import ServicePage from "./pages/ServicePage";
import ServicesPage from "./pages/ServicesPage";
import { ExpertsPage } from "./pages/StaffPage";
import { AboutUsPage } from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page - Home */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/staff" element={<ExpertsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />

        {/* Services Routes - Group routing */}
        <Route path="/services">
          <Route index element={<ServicesPage />} />
          <Route path=":serviceSlug" element={<ServicePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
