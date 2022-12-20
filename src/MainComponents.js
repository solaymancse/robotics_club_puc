import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Copyrights } from "./components/Copyrights/Copyrights";
import { TopBar } from "./components/TopBar/TopBar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { AboutPage } from "./pages/AboutPage";
import { EventPage } from "./pages/EventPage";
import { GallaryPage } from "./pages/GallaryPage";
import { ContactPage } from "./pages/ContactPage";


export default function MainComponents() {
  return (
    <>
    <TopBar/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/events" element={<EventPage/>}/>
        <Route path="/gallary" element={<GallaryPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
       
      </Routes>

        <Footer />
        <Copyrights />
    </>
  );
}
