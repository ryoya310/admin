import * as Modules from "../../common/modules";
import "./index.min.css";

import List from "./list";
import Edit from "./edit";
import Navi from "./navi";

import Actions from "../../components/atoms/actions";

const Article = () => {

  return (
    <Modules.RequireAuth>
      <div
        className="Article views-wrapper"
      >
        <Navi />
        <List />
        <Actions />

      </div>
    </Modules.RequireAuth>
  );
}
export default Article