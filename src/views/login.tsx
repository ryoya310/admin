
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
    dispatch(Modules.state.login.getFormData({name, value}))
  }

  const submited = (response: any) => {

    dispatch(Modules.state.login.setAuth(response.payload))
    navigate(`/`, { replace: true });
  }

  const list = Modules.useAppSelector(Modules.state.login.views);
  console.log(list)

  return (
    <form
        className="LoginForm"
        onSubmit={ async (e) => {

          e.preventDefault();
          const response = await dispatch(Modules.state.login.getLoginInfo(new FormData(e.currentTarget)))
          if (response.payload.result) {
            submited(response);
          } else {
            console.log(list)
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