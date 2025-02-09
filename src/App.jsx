import { Routes, Route } from "react-router";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import FaqPage from "./pages/FaqPage";
import SyaratKetentuanPage from "./pages/SyaratKetentuanPage";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <NavbarComponent />
      <Router>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/kelas" Component={KelasPage} />
          <Route path="/testimonial" Component={TestimonialPage} />
          <Route path="/faq" Component={FaqPage} />
          <Route path="/syaratketentuan" Component={SyaratKetentuanPage} />
        </Routes>
      </Router>
      <FooterComponent />
          
    </>
  );
}
export default App;
