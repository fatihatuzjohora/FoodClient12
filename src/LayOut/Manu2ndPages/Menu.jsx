import { Helmet } from "react-helmet-async";
import Cover from "../Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessortImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import UseMenu from "../../Hooks/UseMenu";
import ShareTitle from "../../Components/ShareTitle/ShareTitle";
import ManuCatagoris from "./ManuCatagoris";

const Menu = () => {
  const [menu] = UseMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover img={menuImg} title="Our Menu"></Cover>
{/* maim cover  */}
      <ShareTitle subheading='Donot Miss' heading='Todays Offer'></ShareTitle>
      {/* offer menu items  */}
      <ManuCatagoris items={offered}></ManuCatagoris>
      {/* dessert menu item  */}
      <ManuCatagoris items={desserts} title='dessert' img={dessortImg}></ManuCatagoris>
      {/* pizza menu item  */}
      <ManuCatagoris items={pizza} title={'pizza' }img={pizzaImg}></ManuCatagoris>
      {/* salad menu item  */}
      <ManuCatagoris items={salad} title={'salad' }img={saladImg}></ManuCatagoris>
      {/* soup menu item  */}
      <ManuCatagoris items={soup} title={'soup' }img={soupImg}></ManuCatagoris>

    </div>
  );
};

export default Menu;
