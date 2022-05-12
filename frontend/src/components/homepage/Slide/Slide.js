import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, EffectFade } from "swiper"
import "swiper/css"
import "swiper/css/bundle"
import { Container } from "react-bootstrap"
import "./slide.css"

const Slide = () => {
  return (
    <>
      <div className="py-4 px-4 justify-content-center  ">
        <Swiper
          modules={[Navigation, EffectFade]}
          navigation
          effect={"fade"}
          speed={800}
          slidesPerView={1}
          loop
          autoplay
          className="mySwiper"
        >
          <SwiperSlide className="swiperSlide">
            <img
              src="https://i.postimg.cc/NG400cN3/pexels-andrea-piacquadio-842811.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiperSlide">
            <img
              src="https://i.postimg.cc/3wq3GrMR/pexels-daisy-anderson-5589908.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiperSlide">
            <img
              src="https://i.postimg.cc/cH80BqZc/pexels-mnz-1639729.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Slide
