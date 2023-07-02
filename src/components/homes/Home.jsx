import React from "react";
import ab from "./Home.module.css";
import About from "../About/About";
import Myproject from "../Myproject/Myproject";
import Education from "../Education/Education";
import Contact from "../Contactus/Contact";
import Motion from "../Motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  // top scroll---------------------
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // onscroll animation-------------------
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
  const downloadPdf = async () => {
    const response = await fetch("/KalpeshChouhan_Resume.pdf");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "KalpeshChouhan_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Motion>
        <div className={ab.maincontainer}>
          <div>
            <div className={ab.firstdiv}>
              <div className={ab.codediv}>
                &nbsp;&nbsp; <p>&nbsp;&nbsp;return(</p>
                <br />
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&#x3c;div&#x3e;</p>
                <br />
                <p>&#x3c;div&#x3e;</p>
                <br />
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x3c;h1&#x3e;</p>
              </div>

              <div data-aos="fade-up" className={ab.hdiv}>
                <span>H</span>
                <span>i</span>
                <span>,</span>
                <br />
                <span>I</span>
                <span>'m</span>
                <span>&nbsp;K</span>
                <span>a</span>
                <span>l</span>
                <span>p</span>
                <span>e</span>
                <span>s</span>
                <span>h</span>
                <br />
                <span>&#x3c;</span>
                <span>/C</span>
                <span>h</span>
                <span>o</span>
                <span>u</span>
                <span>h</span>
                <span>a</span>
                <span>n</span>
                <span>&#x3e;</span>
              </div>
              <div className={ab.lastcodediv}>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x3c;/h1&#x3e;</p>
                <br />
                <div className={ab.responsivebtn}>
                  <button data-aos="fade-right" onClick={downloadPdf}>
                    View CV
                  </button>
                  <button
                    onClick={() => {
                      navigate("/contact", {
                        state: { condition: true },
                      });
                    }}
                    data-aos="fade-left"
                  >
                    Coffee With Me!
                  </button>
                </div>
                <br />
                <p>&#x3c;/div&#x3e;</p>
                <br />
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&#x3c;/div&#x3e;</p>
                <br />
              </div>
            </div>
            <div className={ab.seconddiv}>
              <div className={ab.btnone}>
                <button data-aos="fade-left" onClick={downloadPdf}>
                  View CV
                </button>
              </div>
              <div className={ab.btntwo}>
                <button
                  data-aos="fade-right"
                  onClick={() => {
                    navigate("/contact", {
                      state: { condition: true },
                    });
                  }}
                >
                  Contact Me!
                </button>
              </div>
            </div>
          </div>
        </div>
        <About />
        <Myproject />
        <Education />
        <Contact />
      </Motion>
    </>
  );
};

export default Home;
