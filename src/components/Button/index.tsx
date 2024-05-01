import { ComponentProps } from "react";
import { StyledButton } from "./styles";

interface ButtonProps extends ComponentProps<"button"> {}

const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
