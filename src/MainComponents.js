import { Copyrights } from "./components/Copyrights/Copyrights";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { AboutPage } from "./pages/AboutPage";
import { EventPage } from "./pages/EventPage";
import { GallaryPage } from "./pages/GallaryPage";
import { ContactPage } from "./pages/ContactPage";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Login } from "./components/Dashboard/Login/Login";
import { MainPanel } from "./components/Dashboard/MainPanel";
import { Single } from "./pages/Single";
import { ErrorPage } from "./pages/ErrorPage";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { ProjectPage } from "./pages/ProjectPage";
import { SeminerPage } from "./pages/SeminerPage";
import { AchivementPage } from "./pages/AchivementPage";
import { SingleSeminer } from "./components/SeminerWorkshop/SingleSeminer";
import { NoticePage } from "./pages/NoticePage";
import { SingleNotice } from "./components/Notice/SingleNotice";

import { MobileRegister } from "./components/Togglebar/MobileRegister";

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
        <Route path="/register" element={<MobileRegister />} />
        <Route path="/all-project" element={<ProjectPage />} />
        <Route path="/all-seminer" element={<SeminerPage />} />
        <Route path="/all-notice" element={<NoticePage />} />
        <Route path="/all-achivement" element={<AchivementPage />} />
        <Route path="/event/:id/:post_title" element={<Single />} />
        <Route path="/seminer/:id/:post_title" element={<SingleSeminer />} />
        <Route path="/notice/:id/:post_title" element={<SingleNotice />} />
     
        <Route />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
        <Route
          path="/dashboard//*"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route index element={<MainPanel />} />
        </Route>
      </Routes>
      <Copyrights />
    </>
  );
}
