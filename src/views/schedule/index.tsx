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
    axios.get(`${Modules.constant.apiRoot}app/datelist.php`)
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
        <Dialog
          viewType="up"
          openButton={<>下から</>}
          contents={<Weekly dates={dates} setDates={setDates} />
        }
        />
        <Dialog
          viewType="left"
          openButton={<>左から</>}
          contents={<Weekly dates={dates} setDates={setDates} />}
        />
        <Dialog
          viewType="right"
          openButton={<>右から</>}
          contents={<Weekly dates={dates} setDates={setDates} />}
        />
        <Dialog
          openButton={<>真ん中</>}
          contents={<Weekly dates={dates} setDates={setDates} />}
        />
        <Dialog
          viewType="left"
          openButton={<>左からの</>}
          contents={
            <Dialog
              openButton={<>真ん中</>}
              contents={<Weekly dates={dates} setDates={setDates} />}
            />
          }
        />
        <Dialog
          label="Tooltip"
          viewType="left"
          readonly
          openButton={<>左から保存なし</>}
          contents={<Weekly dates={dates} setDates={setDates} />}
        />
      </div>
    </Modules.RequireAuth>
  );
}
export default Schedule