import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { MainPanel } from "./MainPanel";
import "./Dashboard.css";
import { Route, Routes } from "react-router-dom";
import { Event } from "./Event/Event";
import { ExCommittee } from "./ExCommittee/ExCommittee";
import { Gallary } from "./Gallary/Gallary";
import { Members } from "./Members/Members";
export const Dashboard = () => {
  return (
    <div class="container-scroller">
      <Navbar />
      <div className="main-panel-div">
        <Sidebar />
        <Routes>
          <Route index element={<MainPanel />} />
          <Route path="event" element={<Event />} />
          <Route path="committee" element={<ExCommittee />} />
          <Route path="gallary" element={<Gallary />} />
          <Route path="members" element={<Members/>} />
        </Routes>
      </div>
    </div>
  );
};
