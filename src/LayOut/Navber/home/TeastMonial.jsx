import ShareTitle from "../../../Components/ShareTitle/ShareTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const TeastMonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-20">
      <ShareTitle
        subheading={"What Our Clint Say"}
        heading={"Testimonials"}
      ></ShareTitle>

      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center mx-24 my-16 ">
                <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                <p className="py-8">{review.details}</p>
                <h3 className="text-2xl text-orange-500">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TeastMonial;
