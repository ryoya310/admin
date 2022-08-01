import * as Modules from "./modules";
import { useLocation, Navigate } from "react-router-dom";

const RequireAuth = ({ children }: { children: JSX.Element }) => {

  const location = useLocation();

  let auth = Modules.useAppSelector(Modules.state.login.isAuth);
  if (!auth && Modules.isAuth()) {
    auth = true;
  }
  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export { RequireAuth };