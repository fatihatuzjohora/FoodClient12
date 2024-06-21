import { useQuery } from "@tanstack/react-query";
import UseAxios from "./UseAxios";
import UseAuth from "./UseAuth";

const UseCart = () => {
    const {user}=UseAuth()
  const [axiosSecure] = UseAxios();
  // tan stack

  const {refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      
      return res.data;
    },
  });
  return [cart,refetch];
};

export default UseCart;
