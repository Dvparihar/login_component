import { Button } from "@mui/material";
import React from "react";

export default function ButtonBox({
  style,
  variant,
  color,
  size,
  title,
  onClick,
}) {
  return (
    <Button
      sx={style}
      size={size}
      variant={variant}
      color={color}
      onClick={onClick}
      fullWidth
    >
      {title}
    </Button>
  );
}
