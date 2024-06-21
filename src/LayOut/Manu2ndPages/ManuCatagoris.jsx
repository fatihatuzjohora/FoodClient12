import { Link } from "react-router-dom";
import ManuItems from "../../Components/ShareItems/ManuItem/ManuItems";
import Cover from "../Cover/Cover";

const ManuCatagoris = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <ManuItems key={item._id} item={item}></ManuItems>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 mt-10">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default ManuCatagoris;
