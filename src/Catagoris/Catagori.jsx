import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slider1 from "../assets/home/slide1.jpg";
import slider2 from "../assets/home/slide2.jpg";
import slider3 from "../assets/home/slide3.jpg";
import slider4 from "../assets/home/slide4.jpg";
import slider5 from "../assets/home/slide5.jpg";
import ShareTitle from "../Components/ShareTitle/ShareTitle";

const Catagori = () => {
  return (
    <div>
      <section>
        <ShareTitle
          subheading={"form 11.00am to 10.00pm"}
          heading={"Order Online"}
        ></ShareTitle>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slider1} alt="" />
            <p className="text-4xl uppercase text-center -mt-24 text-white">
              Salads
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} alt="" />
            <p className="text-4xl uppercase text-center -mt-24 text-white">
              Soups
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} alt="" />
            <p className="text-4xl uppercase text-center -mt-24 text-white">
              Pizzas
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider4} alt="" />
            <p className="text-4xl uppercase text-center -mt-24 text-white">
              Desserts
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider5} alt="" />
            <p className="text-4xl uppercase text-center -mt-24 text-white">
              Salads
            </p>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Catagori;
