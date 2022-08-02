import * as Modules from "../common/modules";
import { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";

const Logout = () => {

  const location = useLocation();

  const dispatch = Modules.useAppDispatch();
  useEffect(() => {
    dispatch(Modules.state.member.setAuth({result: false}))
  }, [location]);

  return <Navigate to="/login" state={{ from: location }} />;
}
export default Logout