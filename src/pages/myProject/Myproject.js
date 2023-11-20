import React, { useRef } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "./Myproject.scss";
export default function Myproject() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const myProjectList = [
    {
      date: "october - 31 - 2022",
      title: "e-commerce-With-Js",
      tools: "javascript / css / html",
      imgUrl: "../../assests/projectImg/127.0.0.1_5501_html_index.html.png",
      link: "#",
    },
    {
      date: "october - 26 - 2023",
      title: "e-commerce-mern-stack",
      tools: "reactjs / typescript / expressjs / mongodb",
      imgUrl: "../../assests/projectImg/ala-kifek.netlify.app_login (1).png",
      link: "https://ala-kifek.netlify.app/",
    },
    {
      date: "april - 8 - 2023",
      title: "restaurants ",
      tools: "javascript / css / html",
      imgUrl:
        "../../assests/projectImg/_D__Download_Resturants-project_restaurants-project_index.html (3).png",
      link: "#",
    },
    {
      date: "october - 8 - 2023",
      title: "react-redux-todo-app ",
      tools: "javascript / redux toolkit / expressjs",
      imgUrl: "../../assests/projectImg/localhost_3001_ (1).png",
      link: "#",
    },

    {
      date: "february - 30 - 2023",
      title: "Book-Store-MERN-Stack-main ",
      tools: "ReactJs",
      imgUrl: "../../assests/projectImg/localhost_5173_ (11).png",
      link: "#",
    },
    {
      date: "September - 26 - 2023",
      title: "Live-Chat-App",
      tools: "ReactJs / ExpressJs / SocketIo",
      imgUrl: "../../assests/projectImg/localhost_3001_ (2).png",
      link: "#",
    },
    {
      date: "Oct - 10 - 2023",
      title: "IT-app ",
      tools: "ReactJs / ExpressJs / MongoDb",
      imgUrl: "../../assests/projectImg/localhost_3001_.png",
      link: "#",
    },
    {
      date: "Oct - 30 - 2023",
      title: "authentication-System ",
      tools: "Angular / ExpressJs ",
      imgUrl: "../../assests/projectImg/localhost_4200_.png",
      link: "#",
    },
    {
      date: "August - 29 - 2023",
      title: "fitness-app-full-stack",
      tools: "ReactJs / expressJs / Mongodb / bootstrap",
      imgUrl: "../../assests/projectImg/localhost_3000_.png",
      link: "https://royal-fitness.netlify.app/?fbclid=IwAR2gN1wByyZx1ksXfvqacyKAFdkif0kS5x7J7kZrlUeP-6u7dd6A6tdNWWM",
    },
  ];

  return (
    <div id="myproject">
      <h1>My Project</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3.5,
          },
        }}
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        pagination={{
          type: "progressbar",
        }}
        className="mySwiper">
        {myProjectList.map((project) => (
          <SwiperSlide>
            <div className="descreption">
              <p>{project.date}</p>
              <h5>{project.title}</h5>
              <p>{project.tools}</p>
              <a href={project.link}>
                {" "}
                <button>Live Demo</button>
              </a>
            </div>
            <img src={project.imgUrl} alt={project.title} />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <div className="other">
            <a
              href="https://github.com/snakeoss05?tab=repositories"
              className="link">
              <h5>See More</h5>
            </a>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
