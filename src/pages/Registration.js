import React from "react";
import FormBox from "../components/FormBox";

export default function Registration({ style }) {
  const fields = [
    { id: "fullname", label: "Full Name", type: "text" },
    { id: "message", label: "Message", type: "textarea" },
    { id: "password", label: "Password", type: "password" },
    { id: "email", label: "Email", type: "email" },
    { id: "date", label: "Date", type: "date" },
    { id: "checkbox", label: "Checkbox", type: "checkbox" },
  ];
  return (
    <div style={{width:"50%",margin:"auto"}}>
      <FormBox
        style={{ marginBlock: 1 }}
        buttonStyle={{ marginBlock: 2.5 }}
        inputs={fields}
        buttonTitle="Register"
      />
    </div>
  );
}
