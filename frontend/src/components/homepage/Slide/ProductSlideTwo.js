import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation } from "swiper"
import { Container, Card } from "react-bootstrap"

import "./slide.css"

const ProductSlideTwo = () => {
  return (
    <>
      <Container className="mb-5">
        <Card className="py-4 px-2 justify-content-center  ">
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper-2"
          >
            <SwiperSlide>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="./images/1.jpeg" />
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="./images/2.jpeg" />
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="./images/3.jpeg" />
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="./images/4.jpeg" />
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="./images/5.jpeg" />
              </Card>
            </SwiperSlide>
          </Swiper>
        </Card>
      </Container>
    </>
  )
}

export default ProductSlideTwo
