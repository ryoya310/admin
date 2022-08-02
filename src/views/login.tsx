
import * as Modules from "../common/modules";

import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import LoginIcon from '@mui/icons-material/Login';

import InputText from "../components/atoms/input_text";
import InputPassword from "../components/atoms/input_password";

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

  return (
    <form
        className="LoginForm"
        onSubmit={ async (e) => {

          e.preventDefault();
          const response = await dispatch(Modules.state.member.getLoginInfo(new FormData(e.currentTarget)))
          if (response.payload.result) {
            submited(response);
          }
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