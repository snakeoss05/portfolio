import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import "./index.css";
import Home from "./pages/Home/Home";
import About from "./pages/Aboutme/About";
import { useControl } from "./Context/control";
import { useEffect } from "react";
import Myproject from "./pages/myProject/Myproject";
import Contact from "./pages/Contact/Contact";
import Resume from "./pages/Myresume/Resume";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const { slidesPerView } = useControl();
  const swiperRef = useRef(null);

  const slideTo = (slidesPerView) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(slidesPerView, 1000); // 1000ms duration for the slide animation
    }
  };

  useEffect(() => {
    slideTo(slidesPerView);

    console.log(slidesPerView);
  }, [slidesPerView]);

  return (
    <>
      <Routes>
        <Route path="/myresume" element={<Resume />} />
        <Route
          path="/"
          element={
            <Swiper
              direction="vertical"
              slidesPerView={1}
              spaceBetween={0}
              ref={swiperRef}
              mousewheel={true}
              speed={1200}
              pagination={{
                clickable: true,
              }}
              modules={[Mousewheel, Pagination]}
              className="mySwiper">
              <SwiperSlide>
                <Home />
              </SwiperSlide>
              <SwiperSlide>
                <About />
              </SwiperSlide>
              <SwiperSlide>
                <Myproject />
              </SwiperSlide>
              <SwiperSlide>
                <Contact />
              </SwiperSlide>
            </Swiper>
          }
        />
      </Routes>
    </>
  );
}
