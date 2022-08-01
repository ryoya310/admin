import * as Modules from "../../app/modules";
import { Outlet, Link } from "react-router-dom";
import Box from "@mui/material/Box";

// Header
import Header from "./header";
// Footer
import Footer from "./footer";
// Side
import Side from "./side";


const Layout = () => {

  let auth = Modules.useAppSelector(Modules.state.login.isAuth);
  if (!auth && Modules.isAuth()) {
    auth = true;
  }
  if (!auth) {
    return <>
      <Outlet />
    </>;
  }

  return (
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
  );
}
export default Layout