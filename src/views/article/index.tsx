import * as Modules from "../../app/modules";
import "./index.min.css";
import List from "./list";

import { useState, useEffect } from "react";

import axios from "axios";

const Article = () => {

  const list = Modules.useAppSelector(Modules.state.article.list);
  console.log(list);

  const dispatch = Modules.useAppDispatch();
  useEffect(() => {

    axios.post(
      `${Modules.constant.apiRootURL}app/list.json`
    ).then(function (response) {
      dispatch(Modules.state.article.getListData(response.data))

    });
    return;
  }, []);

  return (
    <Modules.RequireAuth>
      <div
        className="Article views-wrapper"
      >
        <h1>Article</h1>
        <ul>
          <List />
        </ul>
      </div>
    </Modules.RequireAuth>
  );
}
export default Article