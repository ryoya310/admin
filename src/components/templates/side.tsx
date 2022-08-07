import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import ScheduleIcon from "@mui/icons-material/Schedule";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: "40px",
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }),
);

const pages = [
  { label: "ダッシュボード", link: "/", icon: <HomeIcon /> },
  { label: "記事管理", link: "/article", icon: <ArticleIcon /> },
  { label: "スケジュール", link: "/schedule", icon: <ScheduleIcon /> }
]

export default function MiniDrawer() {

  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    const isOpen = (open === false) ? true : false;
    setOpen(isOpen);
  };

  return (
    <Box
      className="side"
    >
      <Drawer variant="permanent" open={open}>
        <IconButton
          className="toggleBtn"
          onClick={handleDrawerToggle}
        >
          {(open === false) ? <MenuIcon /> : <ChevronLeftIcon />}
        </IconButton>
        <Box
          className="toggleMenu"
        >
          <Divider />
          <List>
            {pages.map((page, i) => (
              <ListItem key={i}>
                <Tab className="-icon" key={`icon${i}`} label={page.icon} component={Link} to={page.link} />
                <Tab className="-label" key={`label${i}`} label={page.label} component={Link} to={page.link} sx={{ opacity: open ? 1 : 0 }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
