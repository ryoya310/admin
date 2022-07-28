import { useState } from "react";
import TextField from "@mui/material/TextField";

type Props = {
  name: string;
  value: string;
  isRequired: boolean | null;
  changed(name: string, value: string | null): void;
}

const InputText = ({ name, value, isRequired, changed }: Props) => {

  const src = {name, value};
  const [dst, setValue] = useState(src);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({...dst, name:name, value:e.target.value})
    changed(name, e.target.value)
  };

  const attrs = {
    ...(name && { name: name }),
    ...(name && { label: name }),
    ...(isRequired && { required: true }),
    value: dst.value,
  };

  return <>
    <TextField
      {...attrs}
      onChange={handleChange}
    />
  </>;
};
export default InputText;