import { Outlet } from "react-router-dom";
import Navber from "../LayOut/Navber/Navber";
import Footer from "../LayOut/Navber/home/Footer";

const Main = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto"> 
        <Navber></Navber>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
