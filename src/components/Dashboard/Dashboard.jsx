import "./Dashboard.css";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { MainPanel } from "./MainPanel";
import { Route, Routes } from "react-router-dom";
import { Event } from "./Event/Event";
import { ExCommittee } from "./ExCommittee/ExCommittee";
import { Gallary } from "./Gallary/Gallary";
import { Members } from "./Members/Members";
import { CreateEvent } from "./Event/CreateEvent";
import { NewCommittee } from "./ExCommittee/NewCommittee";
import { EditEvent } from "./Event/EditEvent";
import { CreateSession } from "./ExCommittee/CreateSession";
import { Notices } from "./Notice/Notices";
import { CreateNotice } from "./Notice/CreateNotice";
import { EditNotice } from "./Notice/EditNotice";
import { Seminer } from "./Seminer/Seminer";
import { CreateSeminer } from "./Seminer/CreateSeminer";
import { EditSeminer } from "./Seminer/EditSeminer";
import { UploadPhoto } from "./Gallary/UploadPhoto";
import { Achivement } from "./Achivement/Achivement";
import { Project } from "./Project/Project";
import { CreateAchivement } from "./Achivement/CreateAchivement";
import { CreateProject } from "./Project/CreateProject";

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
          <Route path="new-committee" element={<NewCommittee/>} />
          <Route path="new-session" element={<CreateSession/>} />
          <Route path="notice" element={<Notices/>} />
          <Route path="create-notice" element={<CreateNotice/>} />
          <Route path="notice/update/:id" element={<EditNotice/>} />
          <Route path="edit/:id" element={<EditEvent/>} />
          <Route path="seminer" element={<Seminer/>} />
          <Route path="create-seminer" element={<CreateSeminer/>} />
          <Route path="seminer/edit/:id" element={<EditSeminer/>} />
          <Route path="photo/upload" element={<UploadPhoto/>} />
          <Route path="achivement" element={<Achivement/>} />
          <Route path="create-achivement" element={<CreateAchivement/>} />
          <Route path="create-prc" element={<CreateProject/>} />
          <Route path="prc" element={<Project/>} />
        </Routes>
      </div>
    </div>
  );
};
