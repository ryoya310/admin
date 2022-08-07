import * as Modules from "../../common/modules";
import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Week from "./week";

import "swiper/css";

type Props = {
  dates: any
  setDates(data: any): void
}
const Weekly = ({ dates, setDates }: Props) => {

  const [caption, setCaption] = useState("");

  if (dates.current === undefined) {
    return <><CircularProgress /></>;
  }

  const handleOnChange = async (e: any) => {

    if (e.realIndex == 0) {
      setCaption(dates.prev.yearmonth)
    } else if (e.realIndex == 2) {
      setCaption(dates.next.yearmonth)
    } else {
      setCaption(dates.current.yearmonth)
    }
  };

  return <>
    <Box>
      <h3>{caption}</h3>
      <Swiper
        className="weekly"
        spaceBetween={0}
        slidesPerView={1}
        initialSlide={1}
        onSlideChange={(e) => handleOnChange(e) }
      >
        <SwiperSlide className="prev">
          <Week week={dates.prev} />
        </SwiperSlide>
        <SwiperSlide className="current">
          <Week week={dates.current} />
        </SwiperSlide>
        <SwiperSlide className="next">
          <Week week={dates.next} />
        </SwiperSlide>
      </Swiper>
    </Box>
  </>;
};
export default Weekly;