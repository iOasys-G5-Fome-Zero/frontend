import { useEffect, useState } from "react";
import * as S from "./styles";

const treatPhoneNumber = (data) => {
  let result = data.replace(/[^0-9-]/g, "");

  if (result.length > 0 && result[0] !== "(") result = "(" + result;

  if (result.length > 3 && result[3] !== ")")
    result = result.slice(0, 3) + ")" + result.slice(3);

  if (result.length > 4 && result[4] !== " ")
    result = result.slice(0, 4) + " " + result.slice(4);

  if (result.length === 10 && result[9] !== "-")
    result = result.slice(0, 9) + "-" + result.slice(9);

  if (result.length > 10 && result.length < 15 && result[10] === "-") {
    result = result.slice(0, 9) + "-" + result[9] + result.slice(11);
  }

  if (result.length >= 15 && result[9] === "-") {
    result = result.slice(0, 9) + result[10] + "-" + result.slice(11);
  }

  return result.slice(0, 15);
};

const treatInputData = (data, type) => {
  switch (type) {
    case "tel":
      return treatPhoneNumber(data);
    default:
      return data;
  }
};

const Input = ({ type, label, bindFunction, obs, invalid, errorMessage }) => {
  const [data, setData] = useState("");
  const [focus, setFocus] = useState(false);

  useEffect(() => bindFunction(data), [data, bindFunction]);

  const labelUp = data || focus;

  return (
    <S.Container labelUp={labelUp} invalid={invalid}>
      <input
        type={type}
        name={label}
        value={treatInputData(data, type)}
        onChange={(e) => setData(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <label htmlFor={label}>{label}</label>
      <div className="input-obs">
        {invalid && errorMessage ? errorMessage : obs}
      </div>
    </S.Container>
  );
};

export default Input;
