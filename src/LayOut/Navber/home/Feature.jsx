import ShareTitle from "../../../Components/ShareTitle/ShareTitle";
import featureimg from "../../../assets/home/featured.jpg";
import "../home/Feature.css";

const Feature = () => {
  return (
    <div className="feature bg-fixed  text-white pt-8 ">
      <ShareTitle
        subheading="check it Out"
        heading="Heatures item"
      ></ShareTitle>

      <div className="md:flex justify-center items-center py-20 pt-12 px-36 bg-black bg-opacity-60">
        <div>
          <img src={featureimg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
            exercitationem! Enim ullam doloribus voluptate eaque officia amet
            praesentium eveniet asperiores consequuntur a accusantium quasi aut
            assumenda perspiciatis, non quaerat dolorem?
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-10">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
