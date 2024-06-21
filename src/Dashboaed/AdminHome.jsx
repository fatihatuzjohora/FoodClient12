import { useQuery } from "@tanstack/react-query";
import UseAuth from "../Hooks/UseAuth";
import UseAxios from "../Hooks/UseAxios";

const AdminHome = () => {
  const { user } = UseAuth();
  const [axiosSecure] = UseAxios();
  const { data: stats ={}} = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const { data: chartData=[] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  return (
    <div>
      <div>
        <h2>Hi,Welcome</h2>
        {user?.displayName ? user?.displayName : "Back"}
      </div>
      <div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-secondary"></div>
            <div className="stat-title">Revenue</div>

            <div className="stat-value"> $ {stats?.revenue} </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary"></div>
            <div className="stat-title"> Users</div>
            <div className="stat-value">{stats?.users}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary"></div>
            <div className="stat-title">Orders</div>
            <div className="stat-value">{stats?.orders}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary"></div>
            <div className="stat-title">MenuItens</div>
            <div className="stat-value">{stats?.menuItens}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
