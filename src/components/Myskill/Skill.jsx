import React, { memo } from "react";
import sk from "./Skill.module.css";
import Motion from "../Motion";
import { useState, useEffect, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skill = () => {
  const [onload, setonload] = useState(false);
  // to scroll-------------------------
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // onload skill animtion--------------------
  useEffect(() => {
    setonload(true);
  }, []);
  // onscroll animation-----------
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
        <div className={sk.maincontainer}>
          <div className={sk.myskillcontentdiv}>
            <p>&nbsp;&nbsp;&#x3c;h1&#x3e;</p>
            <div className={sk.divone}>
              <div className={sk.insidediv}>
                <p data-aos="fade-right">My SKIll</p>
              </div>
            </div>
            <p>&nbsp;&nbsp;&#x3c;&#x2215;h1&#x3e;</p>
            <p>&nbsp;&nbsp;&#x3c;p&#x3e;</p>
            <div className={sk.divtwo}>
              <div className={sk.insidedivtwo}>
                <p data-aos="zoom-in">
                  I have a diverse skillset that includes expertise in React,
                  HTML, CSS, and Bootstrap, which allows me to create visually
                  stunning and interactive user interfaces. In addition, I have
                  a strong foundation in Java, Node.js, and MongoDB, which
                  enables me to develop complex and scalable web applications
                  with ease. And I am committed to constantly improving my
                  skills and staying up-to-date with the latest trends and
                  technologies in web development. I am passionate about using
                  my skills to solve real-world problems and make a positive
                  impact in the world. With my diverse skillset, I am confident
                  that I will be able to take on a variety of web development
                  projects and deliver outstanding results. and I am eager to
                  continue learning and growing as a developer.
                </p>
              </div>
            </div>
            <p>&nbsp;&nbsp;&#x3c;&#x2215;p&#x3e;</p>
          </div>
          <div className={sk.skillprogressbar}>
            <div>
              <div data-aos="fade-up">
                <div className={sk.textcolor}>
                  <p>React JS:</p>
                </div>
                <div className={sk.bar}>
                  <div>
                    <div
                      className={`${sk.barone} ${sk.common}`}
                      style={{ width: onload ? "80%" : "0%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up">
                <div className={sk.textcolor}>
                  <p>Node JS:</p>
                </div>
                <div className={sk.bar}>
                  <div>
                    <div
                      className={`${sk.bartwo} ${sk.common}`}
                      style={{ width: onload ? "65%" : "0%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up">
                <div className={sk.textcolor}>
                  <p>Express JS</p>
                </div>
                <div className={sk.bar}>
                  <div>
                    <div
                      className={`${sk.barthree} ${sk.common}`}
                      style={{ width: onload ? "60%" : "0%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up">
                <div className={sk.textcolor}>
                  <p>Mongo DB</p>
                </div>
                <div className={sk.bar}>
                  <div>
                    <div
                      className={`${sk.barfour} ${sk.common}`}
                      style={{ width: onload ? "62%" : "0%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up">
                <div className={sk.textcolor}>
                  <p>Sql</p>
                </div>
                <div className={sk.bar}>
                  <div>
                    <div
                      className={`${sk.barfive} ${sk.common}`}
                      style={{ width: onload ? "66%" : "0%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up">
                <div className={sk.textcolor}>
                  <p>Java</p>
                </div>
                <div className={sk.bar}>
                  <div>
                    <div
                      className={`${sk.barsix} ${sk.common}`}
                      style={{ width: onload ? "70%" : "0%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up">
                <div className={sk.textcolor}>
                  <p>Html</p>
                </div>
                <div className={sk.bar}>
                  <div>
                    <div
                      className={`${sk.barseven} ${sk.common}`}
                      style={{ width: onload ? "72%" : "0%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up">
                <div className={sk.textcolor}>
                  <p>Css</p>
                </div>
                <div className={sk.bar}>
                  <div>
                    <div
                      className={`${sk.bareight} ${sk.common}`}
                      style={{ width: onload ? "75%" : "0%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up">
                <div className={sk.textcolor}>
                  <p>Bootstrap:</p>
                </div>
                <div className={sk.bar}>
                  <div>
                    <div
                      className={`${sk.barnine} ${sk.common}`}
                      style={{ width: onload ? "60%" : "0%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Motion>
    </>
  );
};

export default memo(Skill);
