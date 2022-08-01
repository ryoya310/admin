import * as Modules from "../../common/modules";
import { useState, SyntheticEvent, MouseEvent } from "react";
import { Outlet, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SvgIcon from "@mui/material/SvgIcon";
import SettingsIcon from "@mui/icons-material/Settings";

const Header = () => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
      className="header"
    >
      <h1>Member画面</h1>
      <div
        className="header-config"
      >
        <Button
          onClick={handleClick}
        >
          <SvgIcon component={SettingsIcon} inheritViewBox />
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} component={Link}  to={"/logout"}>Logout</MenuItem>
        </Menu>
      </div>
    </Box>
  );
}
export default Header