import * as Modules from "../../common/modules";
import "./index.min.css";
import { useState, useEffect } from "react";
import axios from "axios";

import Weekly from "../../components/atoms/weekly";
import Dialog from "../../components/atoms/dialog";

const Schedule = () => {

  // 表示するデータ
  const [dates, setDates] = useState({});

  useEffect(() => {
    axios.get(`${Modules.constant.apiScheduleDateURL}`)
      .then(res => {
          setDates(res.data)
      })
  }, []);

  return (
    <Modules.RequireAuth>
      <div
        className="Schedule views-wrapper"
      >
        <h2>Schedule</h2>
        <Weekly dates={dates} setDates={setDates} />
        <Dialog caption="ダイアログ下から" viewType="up" contents={<Weekly dates={dates} setDates={setDates} />} />
        <Dialog caption="ダイアログ左から" viewType="left" contents={<Weekly dates={dates} setDates={setDates} />} />
        <Dialog caption="ダイアログ右から" viewType="right" contents={<Weekly dates={dates} setDates={setDates} />} />
        <Dialog caption="ダイアログ" contents={<Weekly dates={dates} setDates={setDates} />} />
        <Dialog
          caption="ダイアログOnダイアログ"
          viewType="left"
          contents={
            <Dialog
              caption="ダイアログ"
              viewType="up"
              contents={<Weekly dates={dates} setDates={setDates} />}
            />
          }
        />
      </div>
    </Modules.RequireAuth>
  );
}
export default Schedule