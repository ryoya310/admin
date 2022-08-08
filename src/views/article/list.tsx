import * as Modules from "../../common/modules";

import { useState, useEffect } from "react";
import axios from "axios";

const List = () => {

	const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.post(
      `${Modules.constant.apiRoot}app/list.json`
    ).then(function (response) {
			setDatas(response.data);
    });
  }, []);

  return <>
    {datas.map((data: any) => (
      <li key={data.id}>{data.id} : {data.name} : {data.time}</li>
    ))}
  </>;
}
export default List