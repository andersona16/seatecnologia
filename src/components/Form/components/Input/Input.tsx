import { forwardRef } from "react";
import ErrorFeedback from "../../../ErrorFeedback";
import { StyledInput, StyledLabel } from "./styles";

interface InputProps extends React.ComponentProps<typeof StyledInput> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, label, className, ...props }, ref) => {
    return (
      <StyledLabel>
        {label}
        <StyledInput ref={ref} {...props} className={className} />
        {error && <ErrorFeedback message={error} />}
      </StyledLabel>
    );
  }
);

export default Input;
