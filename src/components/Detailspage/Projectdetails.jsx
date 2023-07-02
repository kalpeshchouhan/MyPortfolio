import React from "react";
import styletwo from "./styletwo.module.css";
import Motion from "../Motion";
import { useEffect } from "react";

const Projectdetails = () => {
  // top scroll------------------------
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Motion>
        <div className={styletwo.maincontainer}>
          <div>
            <div className={styletwo.heading}>
              <p>Project Deatails</p>
            </div>
            <div className={styletwo.detailsdiv}>
              <div className={styletwo.subheading}>
                <div className={styletwo.head}>
                  {" "}
                  <p>Online Food Ordring</p>
                </div>
                <div className={styletwo.date}>
                  {" "}
                  <p>Present: 2022</p>
                </div>
              </div>
              <div className={styletwo.details}>
                <p>
                  {" "}
                  Onlie food ordering,I have made this porject during the full
                  stack web developement intership prgram by eduraka!. A
                  full-stack web application that allows users to search for
                  restaurants, view menus and reviews, and place orders online.
                  Technologies used: React.js, Node.js, MongoDB, Express.js.
                  <br />
                  <br />
                  In terms of React, I have effectively used function-based
                  components and several hooks such as useEffect and useContext
                  to create an organized and efficient front-end. Additionally,
                  I have utilized React Router to handle single-page
                  applications, ensuring a seamless user experience.
                  <br />
                  <br />
                  On the back-end, I have created several APIs, including
                  fetching restaurants by city name, getting all locations and
                  meal types, and accessing a restaurant's menu by its name. I
                  have also added a payment gateway to the website, providing
                  users with a secure and seamless payment experience. In the
                  front-end, I have fetched all the APIs created in the
                  back-end, and an "add to cart" option was added to enable
                  users to place orders. Users could also add their address, and
                  payments could be made using a payment gateway such as
                  Razorpay.
                </p>
              </div>
              <div className={styletwo.subheading}>
                <div className={styletwo.head}>
                  {" "}
                  <p>Student Registartion portal</p>
                </div>
                <div className={styletwo.date}>
                  {" "}
                  <p>Present: 2021</p>
                </div>
              </div>
              <div className={styletwo.details}>
                <p>
                  As a team, I and my colleague Rakshit Sirvatava successfully
                  completed our Bachelor of Technology minor project. We
                  designed and developed a student registration portal using
                  HTML, CSS, PHP, and JS, with a SQL database hosted on an XAMPP
                  local server. The purpose of this project is to replace the
                  traditional paper-based student registration process in
                  colleges. The registration process is now much simpler for
                  students, who can first sign up and then log in to their
                  dashboard. From there, they can add a form that requires
                  details such as their name, father's name, mobile number,
                  college roll number, enrollment number, current semester,
                  backlog status, and fee receipt number. They can also upload
                  their signature and a photo of their receipt. If needed,
                  students can edit their form before the submission deadline.
                  <br />
                  <br />
                  In the teacher section, teachers can create their accounts on
                  the portal by signing up with a unique text, "I am a teacher,"
                  and specifying their department. After logging in, their
                  dashboard will show the student registration forms submitted
                  by students in their respective department. For instance, if a
                  teacher is in the CSE department, they will only see the
                  registration forms submitted by CSE students. Teachers can
                  edit or delete the forms as necessary and view all semester
                  student submission forms.
                  <br />
                  <br />
                  This student registration portal streamlines the registration
                  process and eliminates the need for paper-based forms, making
                  it easier for both students and teachers to manage
                  registration. It is an efficient and effective solution for
                  any college looking to modernize their student registration
                  process.
                </p>
              </div>
              <div className={styletwo.subheading}>
                <div className={styletwo.head}>
                  {" "}
                  <p>CURD Operation</p>
                </div>
                <div className={styletwo.date}>
                  {" "}
                  <p>Present: 2022</p>
                </div>
              </div>
              <div className={styletwo.details}>
                <p>
                  {" "}
                  This project is a web application that allows administrators
                  to perform CRUD (Create, Read, Update, Delete) operations on a
                  database of student information. The application is built
                  using the MERN (MongoDB, Express.js, React, Node.js) stack,
                  which is a popular technology stack for building full-stack
                  web applications.
                </p>
                <br />

                <p>
                  <span className={styletwo.textdoc}>StudenData:</span> Displays
                  a list of all the students in the database. Administrators can
                  use the filter section to find specific students by name or
                  class and reset button will display all student data.
                </p>
                <br />
                <p>
                  {" "}
                  <span className={styletwo.textdoc}>View student:</span>
                  Administrators can view the information of a student by
                  clicking on view button from student list
                </p>
                <br />
                <p>
                  {" "}
                  <span className={styletwo.textdoc}>Delete student:</span>{" "}
                  Allows administrators to delete a student from the database by
                  clicking on the delete button from view student and confirming
                  the deletion.
                </p>
                <br />
                <p>
                  {" "}
                  <span className={styletwo.textdoc}>Update student:</span>{" "}
                  Administrators can Update the information of an existing
                  student by clicking the update button from view student after
                  clicking the update button the Administrators will go to
                  update section from their the Administrators update the
                  student information.
                </p>
                <br />
                <p>
                  {" "}
                  <span className={styletwo.textdoc}>Add student:</span>
                  Allows administrators to add a new student to the database by
                  providing their personal information such as
                  name,rollno,class,ragistration no,father name,mother
                  name,father mobile no,mother mobile no, address etc.
                </p>
              </div>
              <br />
              <div className={styletwo.headingtwo}>
                <p>Validations:</p>
              </div>
              <div className={styletwo.details}>
                <p>
                  1. In Particular class if roll no is already present in db
                  Administrators can not enter same roll no.
                  <br />
                  2. In db if ragistration no is present Administratiors can not
                  enter same ragistrantion no.
                  <br />
                  3. Can Enter class greatter then 12 or less then 0.
                  <br />
                  4. Ragistration length should be greatter then 5.
                  <br />
                  5. Mobile no validation Name validation like spacial char is -
                  allowed and length validation Number no allowed or etc..
                </p>
              </div>
              <div className={styletwo.subheading}>
                <div className={styletwo.head}>
                  {" "}
                  <p>Weather Web App</p>
                </div>
                <div className={styletwo.date}>
                  {" "}
                  <p>Present: 2023</p>
                </div>
              </div>
              <div className={styletwo.details}>
                <p>
                  I have developed weather web applicaton.In this porject the
                  user can get weather of any location and I add some features
                  such as fetching weather data from the OpenWeather API by city
                  name, displaying 5-hourly and 5-day weather forecasts, and
                  adding an auto location detect feature.
                </p>
                <br />
                <br />
                <p>
                  I have done a validation by ensuring that users are alerted if
                  they search for a location that is not found, or if they leave
                  the search input field empty. It's important to make sure that
                  the user experience is smooth and error-free, and by adding
                  these validations, I have accomplished that.
                </p>
              </div>
            </div>
            <div style={{ height: "2rem" }}></div>
            <div style={{ height: "2rem" }}></div>
            <div style={{ height: "2rem" }}></div>
          </div>
        </div>
      </Motion>
    </>
  );
};

export default Projectdetails;
