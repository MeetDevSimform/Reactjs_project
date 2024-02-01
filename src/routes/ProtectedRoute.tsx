import { useSelector } from "react-redux";
import { Navigate, Route, useLocation } from "react-router-dom";
import AccessDenied from "../pages/AccessDenied";
import { RootState } from "../redux/rootReducer";
 
const PrivateRoute = ({
  children,

}: {
  children: JSX.Element;

}) => {
  let location = useLocation();
  const { isAuthenticated, user, loading } = useSelector((state:RootState) => state.auth);
  
 
  if (loading) {
    return <p className="container">Checking auth..</p>;
  }
 
  const userHasRequiredRole = user && true ? true : false;
 
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
 
  if (isAuthenticated && !userHasRequiredRole) {
    return <AccessDenied />; // build your won access denied page (sth like 404)
  }
 
  return children;
};