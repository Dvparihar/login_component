import { Box, Typography } from "@mui/material";
import React from "react";
import Square from "../assets/images/icons/square.png";
import CheckSquare from "../assets/images/icons/check-square.png";

export default function CheckBox({ style, id, label, value, onChange }) {
  const [check, setCheck] = React.useState(value || false);
  const handleCheckBox = (e) => {
    setCheck(!check);
    onChange(e, !check);
  };
  return (
    <Box sx={[styles.container, style]}>
      <button id={id} style={styles.checkbtn} onClick={handleCheckBox}>
        <img
          id={id}
          alt="showIcon"
          src={check ? CheckSquare : Square}
          width="100%"
          height="100%"
        />
      </button>
      <Typography variant="subtitle1" sx={styles.label}>
        {label}
      </Typography>
    </Box>
  );
}

const styles = {
  container: { display: "flex", flexDirection: "row", alignItems: "center" },
  checkbtn: {
    backgroundColor: "#0000",
    border: "none",
    width: 20,
    height: 20,
  },
  label: {
    marginLeft: 1,
  },
};
