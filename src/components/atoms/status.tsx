import * as Modules from "../../common/modules";

import { useState } from "react"
import CircularProgress from "@mui/material/CircularProgress";

const Status = () => {

  // view
  const [status, setStatus] = useState(false);
  // リストの状態
  const listStatus = Modules.useAppSelector(Modules.state.article.select);

  let jsx = <></>;

  if (listStatus.status == "loading") {
    jsx = <>
      <div className="loading">
        <CircularProgress />
      </div>
    </>
  }
  return jsx;
};
export default Status;