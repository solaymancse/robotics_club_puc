import React from "react";

import { Container } from "react-bootstrap";
import { Navbar } from "./components/Navbar/Navbar";
import TopCarousel from "./components/TopCarousel/TopCarousel";
import { Welcome } from "./components/Welcome/Welcome";
import { Message } from "./components/Message/Message";
import { Message2 } from "./components/Message2/Message2";
import { Events } from "./components/Events/Events";
import { ExeCommittee } from "./components/ExeCommittee/ExeCommittee";
import { Acheivement } from "./components/Acheivement/Acheivement";
import { ProjectRC } from "./components/ProjectRC/ProjectRC";
import { PhotoGallary } from "./components/PhotoGallary/PhotoGallary";
import { SeminerWorkshop } from "./components/SeminerWorkshop/SeminerWorkshop";
import { Footer } from "./components/Footer/Footer";
import { Copyrights } from "./components/Copyrights/Copyrights";
import { TopBar } from "./components/TopBar/TopBar";

export default function MainComponents() {
  return (
    <>
    <TopBar/>
      <Navbar />
      <TopCarousel />
      <Container>
        <Welcome />
        <Message />
        <Message2 />
      </Container>
        <Events />
        <ExeCommittee />
        <Acheivement />
        <ProjectRC />
        <PhotoGallary />
        <SeminerWorkshop />
        <Footer />
        <Copyrights />
    </>
  );
}
