import { Container } from "react-bootstrap";
import { Message } from "../components/Message/Message";
import TopCarousel from "../components/TopCarousel/TopCarousel";
import { Welcome } from "../components/Welcome/Welcome";
import { Events } from "../components/Events/Events";
import { ExeCommittee } from "../components/ExeCommittee/ExeCommittee";
import { Acheivement } from "../components/Acheivement/Acheivement";
import { ProjectRC } from "../components/ProjectRC/ProjectRC";
import { SeminerWorkshop } from "../components/SeminerWorkshop/SeminerWorkshop";
import { Newsletter } from "../components/Newsletter/Newsletter";
import { Notice } from "../components/Notice/Notice";
import { PhotoGallary } from "../components/PhotoGallary/PhotoGallary";

import { ScrollButton } from "../components/ScrollButton/ScrollButton";
import { TopBar } from "../components/TopBar/TopBar";
import { Navbar } from "../components/Navbar/Navbar";

import { Footer } from "../components/Footer/Footer";

export const Home = () => {
  return (
    <>
    <TopBar/>
    <Navbar/>
      <ScrollButton />
      <TopCarousel />
      <Container>
        <Welcome />
      </Container>
      <Message />
      <Events />
      <ExeCommittee />
      <Newsletter />
      <Notice />
      <Acheivement />
      <ProjectRC />
      <PhotoGallary />
      <SeminerWorkshop />
      <Footer/>
     
    </>
  );
};
