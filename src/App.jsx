import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Profile from "./pages/Profile.jsx";
import Navbar from "./components/Navbar.jsx";
import VolunteerOrganizations from "./pages/VolunteerOrganizations.jsx";
import Auth from "./pages/Auth.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/auth" element={<Auth />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/volunteer-organizations" element={<VolunteerOrganizations />} />
      </Routes>
    </Router>
  );
}

export default App;