import * as Modules from "../../app/modules";
import { useState, SyntheticEvent, MouseEvent } from "react";
import { Outlet, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const pages = [
  { key: 1, label: "ダッシュボード", link: "/" },
  { key: 2, label: "記事管理", link: "/article" },
]

const Side = () => {

  const [value, setValue] = useState(0);
  const handleChange = (e: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      className="side"
    >
      <Tabs
        className="side-menu"
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {pages.map((page) => (
          <Tab key={page.key} label={page.label} component={Link} to={page.link} />
        ))}
      </Tabs>
    </Box>
  );
}
export default Side