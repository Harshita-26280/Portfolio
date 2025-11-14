import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Skilled software engineer with expertise in full-stack development, proficient in languages like Java, Python and C.
                <br />
                Experienced in building scalable web applications, working with modern frameworks (React, Node.js), and applying best practices in software design and testing. Strong problem-solving abilities, collaborative mindset, and a passion for continuous learning and innovation.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Full stack development" />
                  <h5>Full-stack development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="CSS framework" />
                  <h5>CSS framework</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="UI/UX design" />
                  <h5>UI/UX design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Website development" />
                  <h5>Website development</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="background decoration" />
    </section>
  );
};
