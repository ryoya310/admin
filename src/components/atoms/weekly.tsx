import { useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

type Props = {
  className: string
  posts: any
}

const Weekly = ({ className, posts }: Props) => {

  console.log(posts)
  const dts = posts.dates;
  console.log(dts)

  if (dts === undefined) {
    return <></>;
  }
  console.log(document.getElementById("detail"))

  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.currentTarget.getAttribute("value"))

    const detail: any = document.getElementById("detail");
    if (detail !== null) {
      detail.innerHTML = e.currentTarget.getAttribute("value");
    }
  };

  return <>
    <Box>
      <ul
        className={className}
      >
        {dts.map((date: any) => (
          <li
            onClick={(e) => handleOnClick(e)}
            key={date.no}
            value={date.date}
            className={date.cls + " " + date.current}
          >
            <div>
              {date.date_md}
            </div>
            <div>
              {date.week}
            </div>
          </li>
        ))}
      </ul>
      <div id="detail">
        {posts.def_date}
      </div>
    </Box>
  </>;
};
export default Weekly;