import React from "react";
import ed from "./education.module.css";
import { useState, useEffect, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  const navigate = useNavigate();
  const [isover, setisover] = useState(false);

  // onscroll  animation
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

  // custome onscroll-----------------------
  useEffect(() => {
    function handleScroll() {
      const div = document.getElementById("mydiv");
      const rect = div.getBoundingClientRect();
      const elemTop = rect.top;
      const elemBottom = rect.bottom;
      const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
      setisover(isVisible);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* Maincontainer || laptop view designe */}
      <div className={ed.maincontainer}>
        <div>
          <p className={ed.invisivbletext}>&nbsp;&#x3c;h1&#x3e;</p>
          <div className={ed.heading}>
            <div>
              <h1 data-aos="fade-up">Education & Certifications</h1>
            </div>
          </div>
          <p className={ed.invisivbletext}>&nbsp;&#x3c;&#x2215;h1&#x3e;</p>
          <div data-aos="fade-left" className={ed.projectdetails}>
            <button
              onClick={() => {
                navigate("/educationdetails");
              }}
            >
              More-Details &#x3e;
            </button>
          </div>
          <div id="mydiv" className={ed.educationgraph}>
            <div className={ed.sectionone}>
              <div className={ed.classone}>
                <div className={ed.details}>
                  <div>
                    <p
                      className={`${
                        isover ? `${ed.info}  ${ed.infoone}` : null
                      }`}
                      style={{ color: isover ? "white" : "rgb(40, 40, 43)" }}
                    >
                      <span
                        className={`${
                          isover ? `${ed.commoncolor}  ${ed.infoone}` : null
                        }`}
                      >
                        10Th{" "}
                      </span>
                      From Indian public school pali korba (Chhattisgarh)
                    </p>
                    <br />
                    <p
                      className={`${isover ? ed.infoone : null}`}
                      style={{ color: isover ? "white" : "rgb(40, 40, 43)" }}
                    >
                      <span
                        className={`${
                          isover ? `${ed.commoncolor}  ${ed.infoone}` : null
                        }`}
                      >
                        2016
                      </span>
                    </p>
                  </div>
                </div>
                <div
                  className={`${isover ? ed.block : null}`}
                  style={{ height: isover ? "14rem" : "1rem" }}
                ></div>
              </div>
              <div className={ed.classtwo}>
                <div className={ed.detailstwo}>
                  <div>
                    <p
                      className={`${
                        isover ? `${ed.info}  ${ed.infotwo}` : null
                      }`}
                      style={{ color: isover ? "white" : "rgb(40, 40, 43)" }}
                    >
                      <span
                        className={`${
                          isover ? `${ed.commoncolor}  ${ed.infotwo}` : null
                        }`}
                      >
                        Diploma
                      </span>{" "}
                      In Computer Science From{" "}
                      <span
                        className={`${
                          isover ? `${ed.commoncolor}  ${ed.infotwo}` : null
                        }`}
                      >
                        Dr. D.V. Raman University.
                      </span>
                      kota Bilaspur (Chhattisgarh)
                    </p>
                    <br />
                    <p
                      className={`${isover ? ed.infotwo : null}`}
                      style={{ color: isover ? "white" : "rgb(40, 40, 43)" }}
                    >
                      <span
                        className={`${
                          isover ? `${ed.commoncolor}  ${ed.infotwo}` : null
                        }`}
                      >
                        2016-2019
                      </span>
                    </p>
                  </div>
                </div>

                <div
                  className={`${isover ? ed.blocktwo : null}`}
                  style={{ height: isover ? "14rem" : "1rem" }}
                ></div>
              </div>
              <div className={ed.classthree}>
                <div className={ed.detailsthree}>
                  <div>
                    <p
                      className={`${
                        isover ? `${ed.info}  ${ed.infothree}` : null
                      }`}
                      style={{ color: isover ? "white" : "rgb(40, 40, 43)" }}
                    >
                      <span
                        className={`${
                          isover ? `${ed.commoncolor}  ${ed.infothree}` : null
                        }`}
                      >
                        {" "}
                        B.Tech
                      </span>{" "}
                      In Computer Science Engineering From
                      <span
                        className={`${
                          isover ? `${ed.commoncolor}  ${ed.infothree}` : null
                        }`}
                      >
                        RSR Rungta College Of Engineering.
                      </span>
                      Bhilai (Chhattisgarh)
                    </p>
                    <br />
                    <p
                      className={`${isover ? ed.infothree : null}`}
                      style={{ color: isover ? "white" : "rgb(40, 40, 43)" }}
                    >
                      <span
                        className={`${
                          isover ? `${ed.commoncolor}  ${ed.infothree}` : null
                        }`}
                      >
                        2019-2022
                      </span>
                    </p>
                  </div>
                </div>
                <div
                  className={`${isover ? ed.blockthree : null}`}
                  style={{ height: isover ? "14rem" : "1rem" }}
                ></div>
              </div>
            </div>
            <div
              className={`${isover ? ed.sectiontwo : null}`}
              style={{ width: isover ? "100%" : "0.5%" }}
            ></div>
            <div className={ed.sectionthree}>
              <div>
                <div
                  className={`${isover ? ed.barboxone : null}`}
                  style={{ height: isover ? "14rem" : "1rem" }}
                ></div>
                <div className={`${ed.contentbox} `}>
                  <div>
                    <p
                      className={`${
                        isover ? `${ed.info}  ${ed.infofour}` : null
                      }`}
                      style={{ color: isover ? "white" : "rgb(40, 40, 43)" }}
                    >
                      <span
                        className={`${
                          isover ? `${ed.commoncolor}  ${ed.infofour}` : null
                        }`}
                      >
                        Full Stack{" "}
                      </span>{" "}
                      Web Development Intership Program From Edureka!
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={`${isover ? ed.barboxtwo : null}`}
                  style={{ height: isover ? "14rem" : "1rem" }}
                ></div>
                <div className={`${ed.contentbox} `}>
                  <div>
                    <p
                      className={`${
                        isover ? `${ed.info}  ${ed.infofive}` : null
                      }`}
                      style={{ color: isover ? "white" : "rgb(40, 40, 43)" }}
                    >
                      <span
                        className={`${
                          isover ? `${ed.commoncolor}  ${ed.infofive}` : null
                        }`}
                      >
                        {" "}
                        Build A
                      </span>{" "}
                      Face Recognition Application Using Python From{" "}
                      <span
                        className={`${
                          isover ? `${ed.commoncolor}  ${ed.infofive}` : null
                        }`}
                      >
                        GUVI Geek
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={`${isover ? ed.barboxthree : null}`}
                  style={{ height: isover ? "14rem" : "1rem" }}
                ></div>
                <div className={`${ed.contentbox} `}>
                  <div>
                    <p
                      className={`${
                        isover ? `${ed.info}  ${ed.infosix}` : null
                      }`}
                      style={{ color: isover ? "white" : "rgb(40, 40, 43)" }}
                    >
                      Completed{" "}
                      <span
                        className={`${
                          isover ? `${ed.commoncolor}  ${ed.infosix}` : null
                        }`}
                      >
                        Core Java && C{" "}
                      </span>
                      From Naresh IT.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Responsive designe */}
            <div id="mydiv" className={ed.respsecone}>
              <div className={ed.respclassone}>
                <div
                  className={`${isover ? ed.respblock : null}`}
                  style={{ width: isover ? "98%" : "0%" }}
                ></div>

                <div className={`${isover ? ed.respdetails : null}`}>
                  <div>
                    <p
                      className={`${
                        isover ? `${ed.respinfo}  ${ed.respinfoone}` : null
                      }`}
                      style={{ color: isover ? "white" : "rgb(40, 40, 43)" }}
                    >
                      10Th From Indian public school. pali korba (Chhattisgarh)
                    </p>
                    <br />
                    <p
                      className={`${
                        isover ? `${ed.respinfo}  ${ed.respinfoone}` : null
                      }`}
                      style={{ color: isover ? "white" : "rgb(40, 40, 43)" }}
                    >
                      2016
                    </p>
                  </div>
                </div>
              </div>
              <div className={ed.respclassone}>
                <div
                  className={`${isover ? ed.respblocktwo : null}`}
                  style={{ width: isover ? "98%" : "0%" }}
                ></div>

                <div className={`${isover ? ed.respdetailstwo : null}`}>
                  <div>
                    <p
                      className={`${
                        isover ? `${ed.respinfo}  ${ed.respinfotwo}` : null
                      }`}
                      style={{ color: isover ? "white" : "rgb(40, 40, 43)" }}
                    >
                      Diploma In Computer Science From Dr. D.V. Raman
                      University. kota Bilaspur (Chhattisgarh)
                    </p>
                    <br />
                    <p
                      className={`${
                        isover ? `${ed.respinfo}  ${ed.respinfotwo}` : null
                      }`}
                      style={{ color: isover ? "white" : "rgb(40, 40, 43)" }}
                    >
                      2016-2019
                    </p>
                  </div>
                </div>
              </div>
              <div className={ed.respclassone}>
                <div
                  className={`${isover ? ed.respblockthree : null}`}
                  style={{ width: isover ? "98%" : "0%" }}
                ></div>

                <div className={`${isover ? ed.respdetailsthree : null}`}>
                  <div>
                    <p
                      className={`${
                        isover ? `${ed.respinfo}  ${ed.respinfothree}` : null
                      }`}
                      style={{ color: isover ? "white" : "rgb(40, 40, 43)" }}
                    >
                      B.Tech In Computer Science Engineering From RSR Rungta
                      College Of Engineering. Bhilai (Chhattisgarh)
                    </p>
                    <br />
                    <p
                      className={`${
                        isover ? `${ed.respinfo}  ${ed.respinfothree}` : null
                      }`}
                      style={{ color: isover ? "white" : "rgb(40, 40, 43)" }}
                    >
                      2019-2022
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`${isover ? ed.respsectwo : null}`}
              style={{ height: isover ? "100%" : "0.5%" }}
            ></div>
            <div className={ed.respsecthree}>
              <div className={ed.respclassoneagain}>
                <div className={`${isover ? ed.respdetails : null}`}>
                  <div>
                    <p
                      className={`${
                        isover ? `${ed.respinfo}  ${ed.respinfofour}` : null
                      }`}
                      style={{ color: isover ? "white" : "rgb(40, 40, 43)" }}
                    >
                      Full Stack Web Development Intership Program From Edureka!
                    </p>
                    <br />
                  </div>
                </div>
                <div
                  className={`${isover ? ed.respblockagain : null}`}
                  style={{ width: isover ? "98%" : "0%" }}
                ></div>
              </div>
              <div className={ed.respclassoneagain}>
                <div className={`${isover ? ed.respdetailstwo : null}`}>
                  <div>
                    <p
                      className={`${
                        isover ? `${ed.respinfo}  ${ed.respinfofive}` : null
                      }`}
                      style={{ color: isover ? "white" : "rgb(40, 40, 43)" }}
                    >
                      Build A Face Recognition Application Using Python From
                      GUVI Geek
                    </p>
                    <br />
                  </div>
                </div>
                <div
                  className={`${isover ? ed.respblocktwoagain : null}`}
                  style={{ width: isover ? "98%" : "0%" }}
                ></div>
              </div>
              <div className={ed.respclassoneagain}>
                <div className={`${isover ? ed.respdetailsthree : null}`}>
                  <div>
                    <p
                      className={`${
                        isover ? `${ed.respinfo}  ${ed.respinfothree}` : null
                      }`}
                      style={{ color: isover ? "white" : "rgb(40, 40, 43)" }}
                    >
                      Core Java, C From Naresh IT.
                    </p>
                    <br />
                  </div>
                </div>
                <div
                  className={`${isover ? ed.respblockthreeagain : null}`}
                  style={{ width: isover ? "98%" : "0%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Education);
