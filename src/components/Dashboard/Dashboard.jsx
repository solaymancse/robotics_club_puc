import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { MainPanel } from "./MainPanel";
import "./Dashboard.css";
import { Route, Routes } from "react-router-dom";
import { Event } from "./Event/Event";
import { ExCommittee } from "./ExCommittee/ExCommittee";
import { Gallary } from "./Gallary/Gallary";
import { Members } from "./Members/Members";
import { CreateEvent } from "./Event/CreateEvent";
export const Dashboard = () => {
  return (
    <div className="container-scroller">
      <Navbar />
      <div className="main-panel-div">
        <Sidebar />
        <Routes>
          <Route index element={<MainPanel />} />
          <Route path="event" element={<Event />} />
          <Route path="committee" element={<ExCommittee />} />
          <Route path="gallary" element={<Gallary />} />
          <Route path="members" element={<Members/>} />
          <Route path="create-event" element={<CreateEvent/>} />
        </Routes>
      </div>
    </div>
  );
};
