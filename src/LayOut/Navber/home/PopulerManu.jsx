
import ShareTitle from "../../../Components/ShareTitle/ShareTitle";
import ManuItems from "../../../Components/ShareItems/ManuItem/ManuItems";
import UseMenu from "../../../Hooks/UseMenu";

const PopulerManu = () => {
  const [menu]=UseMenu()
  const popular= menu.filter((item) => item.category === "popular")

  return (
    <div>
      <section className="mb-12">
        <ShareTitle
          heading={"form Our Menu"}
          subheading={"Popular Items"}
        ></ShareTitle>
      </section>
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <ManuItems key={item._id} item={item}></ManuItems>
        ))}
      </div>
        <div className="">
          <button className="btn btn-outline border-0 border-b-4 mt-10 mb-10">
            View All Menu
          </button>
        </div>
    </div>
  );
};

export default PopulerManu;
