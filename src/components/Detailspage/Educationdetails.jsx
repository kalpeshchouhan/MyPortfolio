import React from "react";
import style from "./Style.module.css";
import Motion from "../Motion";
import { useEffect } from "react";

const Educationdetails = () => {
  // to scroll ------------------------
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Motion>
        <div className={style.maincontainer}>
          <div>
            <div className={style.heading}>
              <p>Education and Training</p>
            </div>
            <div className={style.heading}>
              <p>Intership Program</p>
            </div>
            <div className={style.para}>
              <p>
                # Full Stack Web Development Intership Program, Edurake, [12
                sept, 2022]
                <br />#
                <span className={style.commoncolor}>
                  {" "}
                  Skills and concepts covered:
                </span>{" "}
                MERN stack (MongoDB, Express.js, React.js, Node.js), front-end
                and back-end web development, database design, API development,
                deployment and hosting, Git and version control
                <br /> #{" "}
                <span className={style.commoncolor}> Final project:</span> Onlie
                food ordering, a full-stack web application that allows users to
                search for restaurants, view menus and reviews, and place orders
                online. Technologies used: React.js, Node.js, MongoDB
                Express.js.
                <br />
                In terms of React, I have effectively used function-based
                components and several hooks such as useEffect and useContext to
                create an organized and efficient front-end. Additionally, I
                have utilized React Router to handle single-page applications,
                ensuring a seamless user experience.
                <br />
                On the back-end, I have created several APIs, including fetching
                restaurants by city name, getting all locations and meal types,
                and accessing a restaurant's menu by its name. I have also added
                a payment gateway to the website, providing users with a secure
                and seamless payment experience. In the front-end, I have
                fetched all the APIs created in the back-end, and an "add to
                cart" option was added to enable users to place orders. Users
                could also add their address, and payments could be made using a
                payment gateway such as Razorpay.
              </p>
              <div className={style.headingtwo}>
                <p className={style.textst}>Technologies and skills learned:</p>
              </div>
              <div className={style.para}>
                <ul style={{ marginLeft: "2rem" }}>
                  <li>Html</li>
                  <li>Css</li>
                  <li>Bootstrap</li>
                  <li>Java script</li>
                  <li>Node js</li>
                  <li>Express js</li>
                  <li>Mongo DB</li>
                  <li>React js</li>
                </ul>
              </div>
              <div className={style.headingtwo}>
                <div>
                  <p className={style.textst}>Mini Project:</p>
                </div>
                <p>
                  #{" "}
                  <span className={style.commoncolor}>
                    {" "}
                    Netflix Home Page UI:
                  </span>{" "}
                  Developed Netflix Home page Using Html,CSS,Bootstrap.
                </p>
                <p>
                  # <span className={style.commoncolor}> Weatherapp:</span>{" "}
                  Developed Weather search Using Html,CSS,java script.For
                  gettting weather data. using Openweather api.
                </p>
              </div>
              <div className={style.headingthree}>
                <p>Build a Face Recognition Application</p>
              </div>
              <br />
              <div className={style.para}>
                <p>
                  Bulid A Face Recognition Application using Python as Part of
                  AI-FOR-India Event From guvi.{" "}
                </p>
              </div>
              <div className={style.heading}>
                <p>Naresh IT</p>
              </div>
              <div className={style.para}>
                <p>
                  Completed Core JAVA and C from Naresh i Technologies
                  (hyderabad) Duration 3 month.
                </p>
              </div>
              <div style={{ height: "2rem" }}></div>
              <div style={{ height: "2rem" }}></div>
              <div style={{ height: "2rem" }}></div>
            </div>
          </div>
        </div>
      </Motion>
    </>
  );
};

export default Educationdetails;
