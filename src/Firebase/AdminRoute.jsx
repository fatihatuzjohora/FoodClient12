import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";
import UseAuth from "../Hooks/UseAuth";


const AdminRoute = ({children}) => {
  const {user, loading} = UseAuth();
  const [isAdmin, isadminLoading] = UseAdmin();
  const location = useLocation();

  if (loading || isadminLoading) {
    return (
      <div>
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate state={{ from: location }} replace to="/signin"></Navigate>;
};

export default AdminRoute;
