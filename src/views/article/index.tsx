import * as Modules from "../../common/modules";
import "./index.min.css";

import * as React from "react";
import { useState, useEffect, useMemo } from "react"
import { useNavigate, useSearchParams } from "react-router-dom";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from "@mui/material/CircularProgress";

import Actions from "../../components/atoms/actions";
import Dialog from "../../components/atoms/dialog";
import InputText from "../../components/atoms/input_text";
import Autocomplete from "../../components/atoms/autocomplete";

/**
 * リスト見出し設定
 */
const columns: GridColDef[] = [
  {
    field: "edit",
    headerName: "編集",
    sortable: false,
    width: 50,
    renderCell: (params) => <>
      <Dialog
        openButton={<><EditIcon /></>}
        contents={<>{params.id}</>}
      />
    </>
  },
  {
    field: "id",
    headerName: "記事ID",
    width: 100
  },
  {
    field: "Caption",
    headerName: "記事タイトル",
    width: 200,
    editable: false,
  },
  {
    field: "Priority",
    headerName: "表示順",
    width: 100,
    align: "right",
    editable: true
  },
  {
    field: "delete",
    headerName: "削除",
    sortable: false,
    width: 50,
    renderCell: (params) => <>
      <Dialog
        openButton={<><DeleteIcon /></>}
        contents={<>{params.id}</>}
      />
    </>
  },
];

const serializeForm = (target: string) => {

  const form = document.querySelector(target) as HTMLFormElement;
  if (form === null) return "";

  const fd = new FormData(form);
  let query = "?";
  for (const arr of fd.entries()) {
    query += `${arr[0]}=${arr[1]}&`;
  }
  return query.slice(0, -1);
}

const serializeArray = (datas: any) => {

  let query = "?";
  Object.keys(datas).forEach(function (key) {
    query += `${key}=${datas[key]}&`;
  });

  return query.slice(0, -1);
}

const Status = (): JSX.Element => {

  // view
  const [status, setStatus] = useState(false);
  // リストの状態
  const listStatus = Modules.useAppSelector(Modules.state.article.select);
  let jsx = <></>;

  console.log(status)
  console.log(listStatus.status)

  if (listStatus.status == "loading") {
    jsx = <>
      <div className="loading">
        <CircularProgress />
      </div>
    </>
  }
  return jsx;
}

const Article = () => {

  const dispatch = Modules.useAppDispatch();

  // URL書換
  const navigate = useNavigate();

  // URLパラメータセット
  const [params] = useSearchParams();
  const datas = {
    SearchWord: params.get("SearchWord")
  }

  // 再レンダリングさせない
  useMemo(() => <Status />, []);

  // リスト表示
  const [lists, setDates] = useState([]);

  useEffect(() => {

    const query = serializeArray(datas);
    const getList = async () => {
      const response = await dispatch(Modules.state.article.getList(query))
      setDates(response.payload)
    }
    getList();
  }, []);

  // セルの更新
  const changeCell = (v: any) => {
    console.log(v)
  }

  const changed = async (name: string, value: string | null) => {

    // 状態管理
    dispatch(Modules.state.article.setFormData({name, value}))

    const query = serializeForm(".views-search");
    // リスト取得
    const response = await dispatch(Modules.state.article.getList(query))
    setDates(response.payload)

    // URL書換
    navigate(`/article${query}`);
  }

  if (lists.length < 1) {
    return <Status />
  }

  return (
    <Modules.RequireAuth>
      <div
        className="Article views-wrapper"
      >

        <form
          className="views-search"
          onSubmit={ async (e) => {
            e.preventDefault();
            console.log(e.currentTarget)
          }}
        >
          <InputText
            name="SearchWord"
            label="フリーワード"
            value={datas.SearchWord}
            changed={changed}
          />

          <Autocomplete
            name="StatusID"
            label="状態"
            className="w120"
            datas={statusArray}
            changed={changed}
          />
        </form>

        <Status />

        <DataGrid
          className="views-list"
          rows={lists}
          columns={columns}
          rowsPerPageOptions={[50, 100, 200, 500]}
          // checkboxSelection
          // disableSelectionOnClick
          onCellEditCommit={changeCell}
        />
        <Actions />
      </div>
    </Modules.RequireAuth>
  );
}
export default Article

const statusArray = [
  { id: 1, value: "有効" },
  { id: 9, value: "無効" },
];