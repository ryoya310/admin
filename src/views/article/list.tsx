import * as Modules from "../../app/modules";

import { useState, useEffect } from "react";
import axios from "axios";

const List = () => {

	const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.post(
      `${Modules.constant.apiArticleURL}`
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