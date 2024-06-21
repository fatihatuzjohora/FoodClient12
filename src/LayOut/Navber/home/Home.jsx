import { Helmet } from "react-helmet-async";
import Catagori from "../../../Catagoris/Catagori";
import Banner from "./Banner";
import Feature from "./Feature";
import PopulerManu from "./PopulerManu";
import TeastMonial from "./TeastMonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Catagori></Catagori>
      <PopulerManu></PopulerManu>
      <Feature></Feature>
      <TeastMonial></TeastMonial>
    </div>
  );
};

export default Home;
