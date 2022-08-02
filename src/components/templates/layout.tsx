import * as Modules from "../../common/modules";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

// Header
import Header from "./header";
// Footer
import Footer from "./footer";
// Side
import Side from "./side";


const Layout = () => {

  let auth = Modules.useAppSelector(Modules.state.member.isAuth);
  if (!auth && Modules.isAuth()) {
    auth = true;
  }
  if (!auth) {
    return <>
      <Outlet />
    </>;
  }

  return (
    <Modules.RequireAuth>
      <Box
        className="wrapper"
      >
        <Header />
        <Box
          className="main"
        >
          <Side />
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </Modules.RequireAuth>
  );
}
export default Layout