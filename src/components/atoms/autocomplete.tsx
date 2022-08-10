import { useState } from "react";

import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

type Props = {
  name: string;
  label?: string | null;
  className?: string | undefined;
  datas: any;
  changed(name: string, value: string | null): void;
}

const AutocompleteEX = ({ name, label, className, datas, changed }: Props) => {

  label = (label) ? label : name;

  const attrs = {
    ...(name && { name: name }),
    ...(label && { label: label }),
  }

  return <>
    <Autocomplete
      className={className}
      id={name}
      options={datas}
      getOptionLabel={(option: any) => option.value}
      // multiple
      // defaultValue={[datas[0]]}
      defaultValue={datas[0]}
      filterSelectedOptions
      renderInput={(params) => (
        <TextField
          {...params}
          {...attrs}
          size="small"
        />
      )}
      onChange={(e, value, reason, details) => {
        console.log(details)
        changed(name, details?.option.id);
      }}
      onClose={() => changed(name, null)}
    />
  </>;
};
export default AutocompleteEX;