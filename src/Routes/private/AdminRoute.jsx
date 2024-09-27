import { Audio } from "react-loader-spinner";
import IsAdmin from "../../hooks/IsAdmin";
import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = (children) => {
  const [user, loading] = useAuth();
  const [isAdmin, isAdminLoading] = IsAdmin();

  const location = useLocation();

  if (loading || isAdminLoading) {
    <Audio
      height="90"
      width="80"
      radius="10"
      color="green"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default AdminRoute;
