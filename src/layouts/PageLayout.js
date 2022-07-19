import React from "react";
import { Box } from "@mui/material";

export default function PageLayout(props) {
  const styles = {
    PageContainer: {
      minHeight: "100vh",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  };
  return <Box sx={styles.PageContainer}>{props.children}</Box>;
}
