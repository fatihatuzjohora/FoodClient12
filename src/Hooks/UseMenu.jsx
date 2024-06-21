// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

const UseMenu = () => {
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading]=useState(true)

  // useEffect(() => {
  //   fetch("http://localhost:5000/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //     //   const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(data);
  //       setLoading(false)
  //     });
  // }, []);
  const axiosPublic = UseAxiosPublic();

  const { data: menu = [],isPending:loading ,refetch} = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menu");
      return res.data;

    },

  });

  return [menu, loading,refetch];
};

export default UseMenu;
