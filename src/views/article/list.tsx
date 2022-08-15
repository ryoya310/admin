import * as Modules from "../../common/modules";
import "./index.min.css";

import { useState, useEffect, useMemo } from "react"
import { useSearchParams } from "react-router-dom";
import axios from "axios";

import Edit from "./edit";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import Dialog from "../../components/atoms/dialog";
import Confirm from "../../components/atoms/confirm";
import Message from "../../components/atoms/message";
import Status from "../../components/atoms/status";

const List = () => {

  const dispatch = Modules.useAppDispatch();

  // Message
  const [messages, setMessages] = useState({
    result: false,
    status: "",
    message: "",
  });

  // URLパラメータセット
  const [params] = useSearchParams();
  const datas = {
    SearchWord: params.get("SearchWord")
  }

  // 再レンダリングさせない
  useMemo(() => <Status />, []);

  // リスト表示
  const [rows, setRows] = useState([]);

  useEffect(() => {

    const query = Modules.serializeArray(datas);
    const getList = async () => {
      const response = await dispatch(Modules.state.article.getList(query))
      setRows(response.payload.view)
    }
    getList();
  }, []);

  if (rows.length < 1) {
    return <Status />
  }

  async function dialogSubmit(url: string, target: string, set: any) {

    const form = document.querySelector(".views-editor") as HTMLFormElement;
    const response = await axios.post(url, new FormData(form));
    let status = "error";

    if (response.data.result) {
      // document.getElementById(target)?.remove();
      status = "success";
    }

    console.log(response.data.result)
    set(!response.data.result);
    setMessages({
      result: true,
      status: status,
      message: response.data.message,
    })
  }

  return <>
    <Message items={messages} action={setMessages} />

    <div className="views-list">
      <Status />
      <table>
        <thead>
          <tr>
            <th className="w40 center"></th>
            <th className="w80">記事ID</th>
            <th className="w200">記事タイトル</th>
            <th className="w80">表示順</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            rows.map(
              (data: any) => (
                <tr id={"row" + data.ArticleID} key={data.ArticleID}>
                  <td className="center">
                    <Dialog
                      openButton={<EditIcon />}
                      contents={<Edit items={data} />}
                      submit={ async (e, set) => dialogSubmit(`${Modules.constant.apiRoot}api/Article/update.php`, "row" + data.ArticleID, set) }
                    />
                  </td>
                  <td>{data.ArticleID}</td>
                  <td>{data.Caption}</td>
                  <td>{data.Priority}</td>
                  <td>
                    <Confirm
                      openButton={<DeleteIcon />}
                      contents={<>この内容を削除しますか？</>}
                      submit={ async (e) => {
                        const response = await axios.post(`${Modules.constant.apiRoot}api/Article/delete.php`, new URLSearchParams(data));
                        let status = "error";
                        if (response.data.result) {
                          document.getElementById("row" + data.ArticleID)?.remove();
                          status = "success";
                        }
                        setMessages({
                          result: true,
                          status: status,
                          message: response.data.message,
                        })
                      }}
                    />
                  </td>
                </tr>
              )
            )
          }
        </tbody>
      </table>
    </div>
  </>;
}
export default List