import { TextField } from "@mui/material";
import React from "react";

export default function DateInput({
  style,
  variant,
  size,
  id,
  label,
  value = "",
  onChange,
}) {
  const [dateType, setDateType] = React.useState(false);
  const handleDateType = () => {
    setDateType(true);
  };
  const blurDateType = () => {
    setDateType(false);
  };
  return (
    <TextField
      sx={style}
      variant={variant}
      size={size}
      fullWidth
      onClick={handleDateType}
      onFocus={handleDateType}
      onBlur={blurDateType}
      type={dateType ? "date" : "text"}
      id={id}
      label={label}
      value={value}
      onChange={onChange}
    />
  );
}
