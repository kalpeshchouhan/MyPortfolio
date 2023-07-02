import React, { memo } from "react";
import co from "./Contact.module.css";
import Motion from "../Motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  // top scroll--------------------------------
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // get data form home component for dynamic the map
  const location = useLocation();
  const dt = location.state ? location.state.condition : null;

  // onscroll animation----------------------------------
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
        <div className={co.maincontainer}>
          <div>
            {dt ? (
              <div className={co.divmap}>
                <iframe
                  data-aos="fade-right"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.988254015292!2d77.60569119398747!3d12.908476322052003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1567fecf38af%3A0xaa60a3731ee82dc2!2sCharan%20PG%20for%20Gents!5e0!3m2!1sen!2sin!4v1680114982726!5m2!1sen!2sin"
                  width="800"
                  height="750"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="map"
                ></iframe>
              </div>
            ) : (
              <div className={co.divmap}>
                <img data-aos="fade-right" src="/maptwo.png" alt="" />
              </div>
            )}

            <div className={co.divcontact}>
              <div className={co.divone}>
                <p>&nbsp;&#x3c;h1&#x3e;</p>
                <div className={co.headingdiv}>
                  <div>
                    <h1 data-aos="fade-left">Contact Me!</h1>
                  </div>
                </div>
                <p>&nbsp;&#x3c;&#x2215;h1&#x3e;</p>
                <p>&nbsp;&#x3c;p&#x3e;</p>
                <div className={co.paradiv}>
                  <div data-aos="fade-left">
                    <p>
                      Looking forward to work with an organization that gives
                      scope to apply my knowledge and skills,and be a part of a
                      team that work towards achieving that needs and the
                      growth.
                    </p>
                  </div>
                </div>
                <p>&nbsp;&#x3c;&#x2215;p&#x3e;</p>
                <p>&nbsp;&#x3c;&#x2215;form&#x3e;</p>
              </div>
              <div className={co.divtwo}>
                <form action="https://formspree.io/f/xyyawzoo" method="POST">
                  <input
                    data-aos="fade-left"
                    data-aos-offset="50"
                    className={co.input}
                    type="text"
                    name="username"
                    placeholder="Enter your user name"
                    autoComplete="off"
                    required
                  />
                  <br />
                  <input
                    data-aos="fade-left"
                    data-aos-offset="100"
                    className={co.input}
                    type="email"
                    name="Email"
                    placeholder="Enter your Mail ID"
                    autoComplete="off"
                    required
                  />
                  <br />
                  <textarea
                    data-aos="fade-left"
                    data-aos-offset="110"
                    name="message"
                    id=""
                    cols="30"
                    rows="20"
                    autoComplete="off"
                    required
                  ></textarea>
                  <div className={co.divbtn}>
                    <button type="submit">Send</button>
                  </div>
                </form>
                <div className={co.divone}>
                  <p>&nbsp;&nbsp;&nbsp;&#x3c;&#x2215;form&#x3e;&nbsp;);</p>
                </div>
              </div>
            </div>
            <div className={co.divmapres}>
              {dt ? (
                <iframe
                  data-aos="fade-right"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.988254015292!2d77.60569119398747!3d12.908476322052003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1567fecf38af%3A0xaa60a3731ee82dc2!2sCharan%20PG%20for%20Gents!5e0!3m2!1sen!2sin!4v1680114982726!5m2!1sen!2sin"
                  width="900"
                  height="600"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="map"
                ></iframe>
              ) : (
                <img data-aos="fade-right" src="/maptwo.png" alt="" />
              )}
            </div>
          </div>
        </div>
      </Motion>
    </>
  );
};

export default memo(Contact);
