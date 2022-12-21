import React, { useEffect } from "react";
import { Div, Span, Intro,Left,Right } from "./WelcomeElements";
import Aos from "aos";
import "aos/dist/aos.css";

import logo from "../../images/logo.jpg";

export const Welcome = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Div>
      <Left>
      <img src={logo} height={100} width={100} alt="logo" />
      </Left>
      <Right>
      <Span> PUC ROBOTICS CLUB</Span>
      <Intro data-aos="fade-in">
          The Premier University Chittagong Robotics Club (PUC Robotics Club) is
          a student run group of highly motivated undergraduate students from
          the Premier University, Chittagong. The group, with majors in Computer
          Science and Engineering (CSE) and Electrical and Electronic
          Engineering (EEE) shares a common passion for the field of robotics.
          The team’s purpose is to explore exciting new technology, learn
          critical skills, and promote the field of robotics through entering a
          variety of competitions. Unlike many other student teams, the Robotics
          Team is not formed around any one particular contest. Rather, the team
          prefers to continually evolve through finding exciting new
          opportunities for challenge. <br/><br/>The club was founded in, 2010. From then,
          it has organized three line following robot competition (Robo Sprint)
          and one project showcase on automation and measurement. Also, for the
          first time in Bangladesh, this club had arranged a 3 on 3 robot
          football competition which was named as “Robo Soccer”. Some of the
          workshops and seminars organized by the department in last three years
          are listed below: <br/><br/>The club has numerous achievements in recent years
          that worth to mention. In its foundation year, the club achieved 1st
          runner-up position in Dailystar-Drishty National Science Fair 2010. It
          became 3rd runner-up in RMA Roborace 2011, champion in BAIUST Line
          Following Robot competition 2018 and was finalist in IUB Makers Mania
          2018. In 2013, it achieved runner-up position in ESAB Project Showcase
          Competition and became champion in both ICMERE Project Showcase 2015
          organized by CUET and Robo Fiesta 2018 organized by BUET. The club
          also became 2 times runner-up (2015, 2017) and 3 times champion (2014,
          2016, and 2018) in Digital Innovation Fair, Chittagong. 
        </Intro>
      </Right>

    </Div>
  );
};
