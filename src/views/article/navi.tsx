import * as Modules from "../../common/modules";

import { useState, useEffect, useMemo, forwardRef } from "react"
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

import InputText from "../../components/atoms/input_text";
import Autocomplete from "../../components/atoms/autocomplete";

const Navi = () => {

  const dispatch = Modules.useAppDispatch();

  // URL書換
  const navigate = useNavigate();

  const changed = async (name: string, value: string | null) => {

    // 状態管理
    dispatch(Modules.state.article.setFormData({name, value}))

    const query = Modules.serializeForm(".views-search");
    // リスト取得
    // const response = await dispatch(Modules.state.article.getList(query))
    // setRows(response.payload)

    // URL書換
    // navigate(`/article${query}`);
  }

  const statusArray = [
    { id: 1, value: "有効" },
    { id: 9, value: "無効" },
  ];

  return <>
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
        // value={datas.SearchWord}
        value=""
        // changed={changed}
      />

      <Autocomplete
        name="StatusID"
        label="状態"
        className="w120"
        datas={statusArray}
        changed={changed}
      />
    </form>
  </>;
}
export default Navi