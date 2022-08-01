
import * as Modules from "../common/modules";

import { useNavigate, useLocation, Navigate } from "react-router-dom";
import axios from "axios";

import Button from "@mui/material/Button";
import LoginIcon from '@mui/icons-material/Login';

import InputText from "../components/atoms/input_text";
import InputPassword from "../components/atoms/input_password";

const Login = () => {

  const location = useLocation();
  let navigate = useNavigate();
  const dispatch = Modules.useAppDispatch();

  const changed = (name: string, value: string | null) => {
    dispatch(Modules.state.login.getFormData({name, value}))
  }

  const submited = (response: any) => {
    dispatch(Modules.state.login.setAuth(response.data))
    console.log(response.data)
    // return <Navigate to="/" replace />;
    navigate(`/`, { replace: true });
  }

  return (
    <form
        className="LoginForm"
        onSubmit={(e) => {

          e.preventDefault();
          var psdt = new FormData(e.currentTarget);
          axios.post(
            `${Modules.constant.apiLoginURL}`,
            psdt
          ).then(function (response) {
            if (response.data.result) {
              submited(response);
            }
          });
        }}
      >
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