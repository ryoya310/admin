import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

type Props = {
  name: string;
  isRequired: boolean | null;
  changed(name: string, value: string | null): void;
}

interface State {
  value: string;
  password: string;
  showPassword: boolean;
}
const InputPassword = ({ name, isRequired, changed }: Props) => {

  const [thisValue, setValues] = useState<State>({
    value: "",
    password: "",
    showPassword: false,
  });

  const handleChangePassword =
  (prop: keyof State) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...thisValue, [prop]: e.target.value });
    changed(name, e.target.value)

  };

  const handleClickShowPassword = () => {
    setValues({
      ...thisValue,
      showPassword: !thisValue.showPassword,
    });
  };

  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const formAttrs = {
    ...(isRequired && { required: true })
  };

  const inputAttrs = {
    ...(name && { name: name }),
    ...(name && { label: name }),
  };

  return <>
    <FormControl
      {...formAttrs}
      variant="outlined"
    >
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        {...inputAttrs}
        type={thisValue.showPassword ? "text" : "password"}
        value={thisValue.password}
        onChange={handleChangePassword("password")}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {thisValue.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        autoComplete="password"
      />
    </FormControl>
  </>;
};
export default InputPassword;