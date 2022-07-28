import * as Modules from "./modules";
import { useLocation, Navigate } from "react-router-dom";

const RequireAuth = ({ children }: { children: JSX.Element }) => {

  let auth = Modules.useAppSelector(Modules.state.login.isLogin);
  if (localStorage.getItem("login") == "true") {
    auth = true;
  }

  const location = useLocation();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export { RequireAuth };