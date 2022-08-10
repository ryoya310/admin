import * as Modules from "../../common/modules";
import { useState, MouseEvent, useContext } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";

import Badge from "@mui/material/Badge";

import SvgIcon from "@mui/material/SvgIcon";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";

import Dialog from "../../components/atoms/dialog";

const logo = require("../../assets/images/logo.svg") as any;

const Header = () => {

  const constants: any = useContext(Modules.Constants);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const configClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const configClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      className="header"
    >
      <div className="header-left">
        <img src={logo.default} />
        <h1>
          <Link to="/">{constants.info.SITE_NAME}</Link>
        </h1>
      </div>
      <div
        className="header-right"
      >
        <Dialog
          label="お知らせ"
          viewType="right"
          className="contactDialog"
          readonly
          openButton={
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          }
          contents={<>list</>}
        />
        <Tooltip title="設定" arrow>
          <Button onClick={configClick}>
            <SvgIcon component={SettingsIcon} />
          </Button>
        </Tooltip>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={configClose}
        >
          <MenuItem onClick={configClose} component={Link} to={"/logout"}>Logout</MenuItem>
        </Menu>
      </div>
    </Box>
  );
}
export default Header