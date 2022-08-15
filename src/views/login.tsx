
import * as Modules from "../common/modules";
import { useState, forwardRef } from "react"
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

import InputText from "../components/atoms/input_text";
import InputPassword from "../components/atoms/input_password";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {

  const navigate = useNavigate();
  const dispatch = Modules.useAppDispatch();

  const changed = (name: string, value: string | null) => {
    dispatch(Modules.state.member.getFormData({name, value}))
  }

  const submited = (response: any) => {

    dispatch(Modules.state.member.setAuth(response.payload))
    navigate(`/`, { replace: true });
  }

  const [open, setOpen] = useState(false);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <form
        className="LoginForm"
        onSubmit={ async (e) => {
          e.preventDefault();
          const response = await dispatch(Modules.state.member.getLoginInfo(new FormData(e.currentTarget)))
          if (response.payload.result) {
            submited(response);
          } else {
            setOpen(true);
          }
        }}
      >

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>ログインに失敗しました。</Alert>
        </Snackbar>

        <div
          className="LoginForm-wrapper"
        >
          <h2>
            <LoginIcon />
            <span>Login Form</span>
          </h2>

          <InputText
            name="LoginID"
            value=""
            isRequired
            changed={changed}
          />

          <InputPassword
            name="Password"
            isRequired
            changed={changed}
          />

          <Button
            variant="contained"
            disableElevation
            type="submit"
          >
            ログイン
          </Button>
        </div>
    </form>
  );
}

export default Login