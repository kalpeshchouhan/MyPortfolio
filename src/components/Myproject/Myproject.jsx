import React, { memo } from "react";
import mp from "./Myproject.module.css";
import { useState } from "react";
import Motion from "../Motion";
import Custommodal from "../Custommodal/Custommodal";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useCallback } from "react";
import Reactspinner from "../Spinner/Reactspinner";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const Myproject = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [filterurl, setfilterurl] = useState([]);
  const [projectl, setprojectl] = useState("");
  const [text, settext] = useState(" ");
  const [open, setOpen] = useState(false);

  // my porject data --------------------array of object
  const projectobj = [
    {
      id: 1,
      projectName: "CURD Opereation",
      Projectimg: "/curdopreation.com.png",
      text: "Visit-Project",
      Link: "https://studentcrud.vercel.app/",
      baseurl: [
        {
          url: "/curdoneimp.png",
        },
        {
          url: "/curdtwo.png",
        },
        {
          url: "/curdthree.png",
        },
        {
          url: "/curdfour.png",
        },
        {
          url: "/cudfive.png ",
        },
        {
          url: "/curdsix.png",
        },
      ],
    },
    {
      id: 2,
      projectName: "Weatherapp",
      Projectimg: "/Weahterapp.com.png",
      text: "Visit-Project",
      Link: "https://kweatherapp.vercel.app/",
      baseurl: [
        {
          url: "/kweatherone.png",
        },
        {
          url: "/kweathertwo.png",
        },
        {
          url: "/kweatherthree.png",
        },
        {
          url: "/kweatherfour.png",
        },
        {
          url: "/kweatherfive.png",
        },
      ],
    },
    {
      id: 3,
      projectName: "OnlineNewsapp",
      Projectimg: "/sutentsemportal.png",
      text: "Visit-Project",
      Link: "https://github.com/kalpeshchouhan/Studentragisterportal",
      baseurl: [
        {
          url: "/stone.png",
        },
        {
          url: "/sttwo.png",
        },
        {
          url: "/sthree.png",
        },
        {
          url: "/stfour.png",
        },
        {
          url: "/stseven.png",
        },
        {
          url: "/stten.png",
        },
        {
          url: "/stfive.png",
        },
        {
          url: "/stseven.png",
        },
        {
          url: "/steight.png",
        },
        {
          url: "/stnine.png",
        },
        {
          url: "/stds.png",
        },
      ],
    },
    {
      id: 4,
      projectName: "Foodapp",
      Projectimg: "/onlnefood.png",
      Link: "/",
      text: "upload soon...",
      baseurl: [
        {
          url: "/staticpageone.png",
        },
        {
          url: "/staticpagetwo.png",
        },
        {
          url: "/breakfastthree.png",
        },
        {
          url: "/mobilestaticfour.png",
        },
        {
          url: "/breakfastfive.png",
        },
      ],
    },
  ];
  // getting the data based on id-------------------------------
  const handleclick = (id) => {
    const burl = projectobj.find((item) => item.id === id).baseurl;
    const projectlink = projectobj.find((item) => item.id === id).Link;
    const textcont = projectobj.find((item) => item.id === id).text;
    setfilterurl(burl);
    setprojectl(projectlink);
    settext(textcont);
  };

  // for spinner--------------------------
  const handleOpen = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  // onscroll animation-------------------------------
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
  // modal open close
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <Motion>
        <div className={mp.maincontainer}>
          <div>
            <div className={mp.divone}>
              <p>&nbsp;&nbsp;&#x3c;h1&#x3e;</p>
              <div className={mp.headingdiv}>
                <div>
                  <h1 data-aos="fade-up">My Project</h1>
                </div>
              </div>
              <p>&nbsp;&nbsp;&#x3c;&#x2215;h1&#x3e;</p>
              <p>&nbsp;&nbsp;&#x3c;p&#x3e;</p>
              <br />
              <div className={mp.paradiv}>
                <div>
                  <p data-aos="fade-left">
                    Here is the list of my project Take a look at some of the
                    projects I've completed recently.{" "}
                    <span style={{ color: " #953553" }}>Click on</span> project
                    to view
                  </p>
                </div>
              </div>
              <br />
              <p>&nbsp;&nbsp;&#x3c;&#x2215;p&#x3e;</p>
            </div>
            <div data-aos="fade-left" className={mp.projectdetails}>
              <button
                onClick={() => {
                  navigate("/projectdetails");
                }}
              >
                Project-Details &#x3e;
              </button>
            </div>
            <div className={mp.divtwo}>
              <ul>
                {projectobj.map((item) => (
                  <li
                    key={item.id ? item.id : uuidv4()}
                    data-aos="zoom-in"
                    data-aos-offset="50"
                    onClick={() => {
                      handleclick(item.id);
                      handleOpen();
                    }}
                  >
                    <img onClick={onOpenModal} src={item.Projectimg} alt="" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Custommodal
          isOpen={open}
          onClose={onCloseModal}
          children={
            <>
              <div className={mp.scrolldiv}>
                {loading ? (
                  <>
                    <div className={mp.sppinerdiv}>
                      <Reactspinner />
                    </div>
                  </>
                ) : (
                  filterurl.map((item) => (
                    <div
                      className={mp.imgcus}
                      key={item.id ? item.id : uuidv4()}
                    >
                      <img src={item.url} alt="" />
                    </div>
                  ))
                )}
              </div>
            </>
          }
          childrentwo={
            <>
              <div className={mp.url}>
                <button>
                  <a href={projectl} target="blank">
                    {text}
                  </a>
                </button>
              </div>
            </>
          }
        />
      </Motion>
    </>
  );
};

export default memo(Myproject);
