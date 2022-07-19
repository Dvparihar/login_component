import React, { useEffect, useState } from "react";
// import ButtonBox from "./ButtonBox";
import DateInput from "./DateInput";
import InputBox from "./InputBox";
import PasswordInput from "./PasswordInput";
import CheckBox from "./CheckBox";

export default function FormBox({ style, inputList, formData }) {
  const [initData, setInitData] = useState({});
  const handleInputbox = (e) => {
    let Id = e.target.id;
    let value = e.target.value;
    setInitData({ ...initData, [Id]: value });
  };
  const handleCheckbox = (e, val) => {
    let Id = e.target.id;
    let value = val;
    setInitData({ ...initData, [Id]: value });
  };

  useEffect(() => {
    formData(initData);
  }, [initData]);

  return (
    inputList?.map((dt, id) =>
      dt.type === "date" ? (
        <DateInput
          key={id}
          style={style}
          variant="filled"
          size="small"
          id={dt.id}
          label={dt.label}
          value={initData[dt.id]}
          onChange={handleInputbox}
        />
      ) : dt.type === "password" ? (
        <PasswordInput
          key={id}
          style={style}
          variant="filled"
          size="small"
          id={dt.id}
          label={dt.label}
          value={initData[dt.id]}
          onChange={handleInputbox}
        />
      ) : dt.type === "checkbox" ? (
        <CheckBox
          key={id}
          style={style}
          id={dt.id}
          label={dt.label}
          value={initData[dt.id]}
          onChange={handleCheckbox}
        />
      ) : (
        <InputBox
          key={id}
          style={style}
          variant="filled"
          size="small"
          type={dt.type}
          id={dt.id}
          label={dt.label}
          value={initData[dt.id]}
          onChange={handleInputbox}
        />
      )
    )
  );
}
