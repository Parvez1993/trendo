import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper"
import { Container } from "react-bootstrap"

// Import Swiper styles

// import required modules

const Slide = () => {
  return (
    <Container>
      {/* <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/1.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/2.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/3.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/4.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/5.jpeg" alt="" />
        </SwiperSlide>
      </Swiper> */}
    </Container>
  )
}

export default Slide
