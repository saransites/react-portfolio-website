import React from "react";
import "./Projects.css";
import ecommerceweb from "/Ecommerce page.jpeg";
const Projectsdetails = () => {
  const data = [
    {
      img: ecommerceweb,
      title: "Full-Stack Ecommerce Website",
      description:
        "Created a user authentication and users can update a cart dynamically",
      link:"https://mern-ecommerce-web-theta.vercel.app/"
    },
    {
      img: ecommerceweb,
      title: "Mern-Attendance-Tracker",
      description:
        "Created a employee attendance trackeing system using mern stack aspects",
      link:""
    },
  ];
  return (
    <section className="projectContainer gap-2 flex flex-wrap">
      {data.map((item, index) => {
        return (
          <div key={index} className="parent">
            <div
              style={{
                background: `linear-gradient(0deg,rgba(121, 140, 140, 0.997),rgba(201, 240, 240, 0.697))`,
              }}
              className="card"
            >
              <div className="content">
                <span className="title"> {item.title} </span>
                <span className="text-[.8rem]">{item.description}</span>
              </div>
              <div className="logo">
                <span className="circle circle1"></span>
                <span className="circle circle2"></span>
                <span className="circle circle3"></span>
                <span className="circle circle4"></span>
                <span className="circle circle5 font-semibold">
                  <a
                    href={item.link}
                    target="_blank"
                    className="rounded-full cursor-pointer pt-[11px] pl-[3.5px] w-8 h-8 text-black text-[8px] hover:bg-[#57edf5] shadow-[0_0_10px_black] transition-all duration-500"
                  >
                    Demo
                  </a>
                </span>
              </div>
              <div className="glass overflow-hidden">
                  <img
                    src={item.img}
                    className="h-full opacity-35 object-cover"
                    alt="loading..."
                  />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projectsdetails;
