import * as Modules from "../../common/modules";
import "./index.min.css";
import List from "./list";

import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import axios from "axios";

// import DeleteButton from "../../components/atoms/deleteRow";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Actions from "../../components/atoms/actions";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "deleteBtn",
    headerName: "編集",
    sortable: false,
    width: 90,
    renderCell: (params) => <button>編集</button>
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const datas = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const Article = () => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const list = Modules.useAppSelector(Modules.state.article.list);

  const dispatch = Modules.useAppDispatch();
  useEffect(() => {

    axios.post(
      `${Modules.constant.apiRoot}app/list.json`
    ).then(function (response) {
      dispatch(Modules.state.article.getListData(response.data))

    });
    return;
  }, []);

  const [rows, setRows] = useState(datas);

  // データの確認
  const checkRows = () => console.log(rows);
  checkRows();

  // セルの更新
  const changeCell = (v: any) => {
    console.log(v.value)
  }

  // https://qiita.com/takiguchi-yu/items/4d6e2845402aa2d5f36a
  // https://tech-it.r-net.info/program/react/323/#toc-1
  return (
    <Modules.RequireAuth>
      <div
        className="Article views-wrapper"
      >
        <h1>Article</h1>
        {/* <ul>
          <List />
        </ul> */}
        <div>
          <Button variant="outlined" onClick={handleClickOpen}>
            Open form dialog
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To subscribe to this website, please enter your email address here. We
                will send updates occasionally.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
          </Dialog>
        </div>
        <Box sx={{ height: "600px", width: "100%", background: "#fff" }}>
          <DataGrid
            rows={datas}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            disableSelectionOnClick
            onCellEditCommit={changeCell}
          />
        </Box>
        <Actions />
      </div>
    </Modules.RequireAuth>
  );
}
export default Article