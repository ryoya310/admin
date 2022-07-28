import * as Modules from "../../app/modules";
import { useState, SyntheticEvent } from "react";
import { Outlet, Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const Header = () => {

  const [value, setValue] = useState(0);
  const handleChange=(e: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return <>
    <header>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs"
        className="HeaderMenu"
      >
        <Tab label="Index" component={Link} to="/" />
        <Tab label="Article" component={Link} to="/article" />
        <Tab label="Login" component={Link} to="/login" />
        <Tab label="Logout" component={Link} to="/logout" />
      </Tabs>
    </header>
    <Outlet />
  </>;
};

export default Header