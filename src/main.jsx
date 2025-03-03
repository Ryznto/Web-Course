import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollTotop.jsx";

import { BrowserRouter as BrowserRoute } from "react-router-dom";
import 'animate.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRoute>
      <ScrollToTop />
      <App />
    </BrowserRoute>
  </StrictMode>
);
