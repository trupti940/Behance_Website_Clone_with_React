import Navbar from "./components/Navbar";
import UserContent from "./components/UserContent";
import Footer from "./components/footer/Footer";
import SignIn from "./components/SignIn";
import Content from "./components/Content/Content";
import JobPage from "./pages/JobPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserContent />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/assets" element={<Content />} />
        <Route path='/jobs' element={<JobPage/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
      
      {/* <Content /> */}
      <Footer />
    </Router>
  );
}

export default App;
