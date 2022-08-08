import * as Modules from "./modules";
import { useLocation, Navigate } from "react-router-dom";

// 権限が必要なページ
const RequireAuth = ({ children }: { children: JSX.Element }) => {

  const location = useLocation();

  let auth = Modules.useAppSelector(Modules.state.member.isAuth);
  if (!auth && Modules.isAuth()) {
    auth = true;
  }
  console.log(auth)

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export { RequireAuth };