import { Footer } from "./components/Footer/Footer";
import { Copyrights } from "./components/Copyrights/Copyrights";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { AboutPage } from "./pages/AboutPage";
import { EventPage } from "./pages/EventPage";
import { GallaryPage } from "./pages/GallaryPage";
import { ContactPage } from "./pages/ContactPage";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import { Dashboard } from "./components/Dashboard/Dashboard";


export default function MainComponents() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/gallary" element={<GallaryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Copyrights />
    </>
  );
}
