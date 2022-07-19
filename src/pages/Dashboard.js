import { Typography } from "@mui/material";
import React from "react";

export default function Dashboard() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textTransform: "capitalize",
          fontWeight: "500",
          fontSize: "2.5rem",
          lineHeight: "1",
          paddingBlock: "0.5rem",
        }}
      >
        welcome on the Dashboard page.
      </Typography>
    </div>
  );
}
