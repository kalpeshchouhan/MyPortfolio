import React, { memo } from "react";
import TextShpere from "../Round/TextShpere";
import abt from "./about.module.css";
import Motion from "../Motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useCallback } from "react";

const About = () => {
  //onscroll Animation----------------------------
  const initAOS = useCallback(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      delay: 0,
    });
  }, []);

  useEffect(() => {
    initAOS();
  }, [initAOS]);
  return (
    <>
      <Motion>
        <div className={abt.maincontainer}>
          <div>
            <div className={abt.animation}>
              <TextShpere />
            </div>
            <div className={abt.aboutme}>
              <p>&nbsp;&nbsp;&nbsp;&#x3c;h1&#x3e;</p>
              <div className={abt.heading}>
                <div>
                  <h1 data-aos="fade-up">About Me</h1>
                </div>
              </div>
              <p>&nbsp;&nbsp;&nbsp;&#x3c;&#x2215;h1&#x3e;</p>

              <div className={abt.para}>
                <br />
                <p>&nbsp;&nbsp;&nbsp;&#x3c;p&#x3e;</p>
                <div>
                  {" "}
                  <p data-aos="zoom-in" className={abt.paraone}>
                    Hello! I am graduate in (2022) with a B.TECH degree
                    <span className={abt.color}>
                      {" "}
                      in Computer Science,
                    </span>{" "}
                    specializing in Front End Development. I am passionate about
                    creating{" "}
                    <span className={abt.color}>
                      beautiful and intuitive user
                    </span>
                    . interfaces that provide seamless experiences for users.
                  </p>
                </div>
                <br />
                <br />
                <div>
                  <p data-aos="zoom-in" className={abt.paraone}>
                    I find great satisfaction in designing and developing
                    innovative websites and applications that not only look
                    great but also perform{" "}
                    <span className={abt.color}>exceptionally</span> well.
                  </p>
                </div>
                <br />
                <br />
                <div>
                  <p data-aos="zoom-in" className={abt.paraone}>
                    My expertise in front-end development has allowed me to
                    master several programming languages such as
                    <span className={abt.color}> HTML</span>,
                    <span className={abt.color}> CSS</span>,
                    <span className={abt.color}> JavaScript</span>, and
                    frameworks like React and Angular. I am always eager to
                    learn new
                    <span className={abt.color}> technologies</span> and
                    techniques to stay up-to-date with the latest trends in the
                    industry.
                  </p>
                </div>

                <p className={abt.ponpeningtag}>
                  &nbsp;&nbsp;&nbsp;&#x3c;p&#x3e;
                </p>
              </div>
            </div>
          </div>
        </div>
      </Motion>
    </>
  );
};

export default memo(About);
