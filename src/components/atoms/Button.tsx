import { IButton } from "../../types/common";

const Button: React.FC<IButton> = ({ type = "button", children, ...rest }) => {
  return (
    <button type={type} {...rest}>
      {children}
    </button>
  );
};

export default Button;
