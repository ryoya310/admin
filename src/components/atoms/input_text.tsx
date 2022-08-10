import { useState } from "react";
import TextField from "@mui/material/TextField";

type Props = {
  name: string;
  label?: string | null;
  value: any;
  isRequired?: boolean | null;
  changed(name: string, value: string | null): void;
}

const InputText = ({ name, label, value, isRequired, changed }: Props) => {

  const src = {name, value};
  const [dst, setValue] = useState(src);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({...dst, name:name, value:e.target.value})
    changed(name, e.target.value)
  };

  label = (label) ? label : name;

  const attrs = {
    ...(name && { name: name }),
    ...(label && { label: label }),
    ...(isRequired && { required: true }),
    value: dst.value,
  };

  return <>
    <TextField
      {...attrs}
      size="small"
      onChange={handleChange}
    />
  </>;
};
export default InputText;