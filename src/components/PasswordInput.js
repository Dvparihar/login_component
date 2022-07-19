import { Box, TextField } from "@mui/material";
import React from "react";
import BlindIcon from "../assets/images/icons/blind.png";
import EyeIcon from "../assets/images/icons/eye.png";

export default function PasswordInput({
  style,
  variant,
  size,
  id,
  label,
  value = "",
  onChange,
}) {
  const [show, setShow] = React.useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <Box sx={styles.passwordContainer}>
      <TextField
        style={style}
        variant={variant}
        size={size}
        fullWidth
        type={show ? "text" : "password"}
        id={id}
        label={label}
        value={value}
        onChange={onChange}
      />
      <button style={styles.showHideButton} onClick={handleShow}>
        <img alt="showIcon" src={show ? EyeIcon : BlindIcon} width={22} />
      </button>
    </Box>
  );
}
const styles = {
  passwordContainer: { display: "block", position: "relative" },
  showHideButton: {
    backgroundColor: "#0000",
    border: "none",
    position: "absolute",
    right: "5%",
    bottom: "15%",
  },
};
