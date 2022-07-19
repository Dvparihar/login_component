import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonBox from "../components/ButtonBox";
import FormBox from "../components/FormBox";

export default function Registration({ style }) {
  const fields = [
    { id: "fullname", label: "Full Name", type: "text" },
    { id: "date", label: "Date", type: "date" },
    { id: "email", label: "Email", type: "email" },
    { id: "message", label: "Message", type: "textarea" },
    { id: "password", label: "Password", type: "password" },
    {
      id: "checkbox",
      label: "Accept All Terms And Conditions.",
      type: "checkbox",
    },
  ];
  const navigate = useNavigate();

  const [formValue, setFormValue] = React.useState({});
  const handleFormData = (value) => {
    setFormValue(value);
  };
  const handleFormSubmit = () => {
    let user = formValue.username;
    let pass = formValue.password;
    if (user === "admin" && pass === "admin") {
      navigate("/dashboard");
    }
  };
  return (
    <Box sx={style}>
      <Grid container sx={styles.cardContainer}>
        <Box sx={[styles.formContainer, { boxShadow: "none" }]}>
          <Typography variant="h4" sx={styles.heading}>
            registration formBox
          </Typography>
          <Typography variant="subtitle1" sx={styles.subHeading}>
            create your new account. Please give all correct information.
          </Typography>
          <Box sx={styles.formBox}>
            <FormBox
              style={{ marginBlock: 1 }}
              inputList={fields}
              formData={handleFormData}
            />
            <ButtonBox
              style={{ marginBlock: 2.5 }}
              variant="contained"
              color="primary"
              size="large"
              title={"Submit"}
              // onClick={handleFormSubmit}
            />
          </Box>
          <ButtonBox
            style={styles.signup}
            size="small"
            variant="text"
            title="Back To Login."
            onClick={() => navigate("/")}
          ></ButtonBox>
        </Box>
      </Grid>
    </Box>
  );
}

const styles = {
  cardContainer: { width: "100%", backgroundColor: "#88c7ff6b" },
  formContainer: {
    height: "74%",
    margin: "auto",
    padding: 5,
    borderRadius: 5,
    boxShadow: "0px 0px 10px #654873",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  heading: {
    textTransform: "capitalize",
    fontWeight: "500",
    fontSize: "2.5rem",
    lineHeight: "1",
    paddingBlock: "0.5rem",
  },
  subHeading: {
    textTransform: "capitalize",
    fontSize: " 1rem",
    lineHeight: " 1",
    paddingBlock: " 0.5rem",
  },
  formBox: {
    paddingBlock: "1.2rem",
    justifyContent: "space-evenly",
  },
  signup: {
    marginInline: "auto",
  },
};
