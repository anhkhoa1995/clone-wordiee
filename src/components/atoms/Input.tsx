import { IInput } from "../../types/common";

const Input: React.FC<IInput> = ({ type = "text", value, ...rest }) => {
  return <input type={type} value={value} {...rest} />;
};

export default Input;
