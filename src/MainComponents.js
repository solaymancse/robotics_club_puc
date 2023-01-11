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
import { Event } from "./components/Dashboard/Event/Event";
import { ExCommittee } from "./components/Dashboard/ExCommittee/ExCommittee";
import { Gallary } from "./components/Dashboard/Gallary/Gallary";
import { Members } from "./components/Dashboard/Members/Members";
import { Single } from "./pages/Single";
import { ErrorPage } from "./pages/ErrorPage";
import { CreateEvent } from "./components/Dashboard/Event/CreateEvent";


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
        <Route path="/event/:id/:post_title" element={<Single/>} />
        <Route  />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage/>} />

        <Route path="/dashboard//*" element={<Dashboard />}>
          <Route index element={<MainPanel />}/>
          <Route path="event" element={<Event />} />
          <Route path="committee" element={<ExCommittee />} />
          <Route path="gallary" element={<Gallary />} />
          <Route path="members" element={<Members/>} />
          <Route path="create-event" element={<CreateEvent/>} />
        </Route>
      </Routes>
      <Copyrights />
    </>
  );
}
