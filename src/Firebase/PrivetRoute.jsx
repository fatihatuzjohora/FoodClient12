
// import PropTypes from "prop-types";

import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const PrivateRoute = ({ children }) => {
   const location = useLocation();
  // console.log(location.pathname);

  const { user, loading } = UseAuth()

  if (loading) {
    return (
      <div>
<progress className="progress w-56"></progress>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={{from:location}} replace to="/signin"></Navigate>;
};

export default PrivateRoute;
// PrivateRoute.propTypes = {
//   children: PropTypes.node,
// };
