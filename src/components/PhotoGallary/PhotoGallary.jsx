import "./gallary.css";
import { Portfolio, Wrapper, H2 } from "./GallaryElements";
import { Title } from "../Acheivement/AcheivementElements";
import { gallary } from "../../Data";
import { Link } from "react-router-dom";

export const PhotoGallary = () => {
  // const buttons = document.querySelectorAll('.project');
  // const overlay = document.querySelector('.overlay');
  // const overlayImage = document.querySelector('.overlay__inner img');

  // function open(e) {
  //   overlay.classList.add('open');
  //   const src= e.currentTarget.querySelector('img').src;
  //   overlayImage.src = src;
  // }

  // function close() {
  //   overlay.classList.remove('open');
  // }

  // buttons.forEach(button => button.addEventListener('click', open));
  // overlay.addEventListener('click', close);

  return (
    <Wrapper>
      <Title>
        <H2>Photo Gallary</H2>
        <Link to="/gallary">View All</Link>
      </Title>
      <Portfolio>
        {gallary.map((data, index) => (
      
            <div className="project" key={index}>
              <img className="project__image" src={data.img} alt="" />
              <p>{data.title}</p>
              <h3 className="grid__title"> front-end</h3>
              <div className="grid__overlay">
                <button className="viewbutton">view more</button>
              </div>
            </div>
    
        ))}
             <div className="overlay">
              <div className="overlay__inner">
                <button className="close">close X</button>
               
              </div>
            </div>
      </Portfolio>
    </Wrapper>
  );
};
