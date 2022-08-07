import { useState } from "react";

import Box from "@mui/material/Box";

type Props = {
  week: any
}

const week = ({ week }: Props) => {

  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {

    const detail: any = document.getElementById("detail");
    if (detail !== null) {
      detail.innerHTML = e.currentTarget.getAttribute("data-value");
    }
  };

  return <>
    <Box
      className="slideBox"
    >
      {week.dates.map((v: any) => (
        <div
          onClick={(e) => handleOnClick(e)}
          key={v.no}
          data-value={v.date}
          className={"week" + " " + v.cls + " " + v.current}
        >
          <div>{v.date_md}</div>
          <div>{v.week}</div>
        </div>
      ))}
    </Box>
  </>;
};
export default week;