import { TextField } from "@mui/material";
import React from "react";

export default function InputBox({
  style,
  variant,
  size,
  type,
  id,
  label,
  rows,
  value = "",
  onChange,
}) {
  return (
    <TextField
      sx={style}
      variant={variant}
      size={size}
      type={type}
      fullWidth
      id={id}
      label={label}
      value={value}
      onChange={onChange}
      multiline={type === "textarea" ? true : false}
      rows={type === "textarea" && rows ? rows : type === "textarea" ? 2 : null}
    />
  );
}
