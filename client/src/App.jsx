import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nabar";
import Home from "./components/Home";
import FeaturesSection from "./components/FeaturesSection";
import CTA from "./components/CTA";
import Auth from "./components/auth/auth";
import OtpVerification from "./components/auth/OtpVerification";
import Login from "./components/auth/Login";

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <Routes>
          {/* Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeaturesSection />} />
          <Route path="/cta" element={<CTA />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          {/* OTP Verification Route */}
          <Route path="/otp-verification" element={<OtpVerification />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
