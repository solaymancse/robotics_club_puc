import { Container } from "react-bootstrap";
import { Welcome } from "../components/Welcome/Welcome";
import { Wrapper2 } from "./PageElement";
import { TopBar } from "../components/TopBar/TopBar";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";

export const AboutPage = () => {
  return (
    <>
     <TopBar/>
    <Navbar/>
    <Wrapper2> 
      <Container>
        <Welcome />
      </Container>
    </Wrapper2>
    <Footer/>
    </>
  );
};
