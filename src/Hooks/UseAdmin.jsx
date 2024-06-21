import { useQuery } from "@tanstack/react-query";
import UseAxios from "./UseAxios";
import UseAuth from "./UseAuth";

const UseAdmin = () => {
  const { user, loading } = UseAuth();
  const [axiosSecure] = UseAxios();
  const token = localStorage.getItem("access-token");
  const { data: isAdmin, isPending: isadminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loading && !!token,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      // console.log(res);
      return res.data?.admin;
    },
  });
  return [isAdmin, isadminLoading];
};

export default UseAdmin;
