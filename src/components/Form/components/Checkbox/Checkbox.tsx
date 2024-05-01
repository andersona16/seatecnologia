import * as RdxCheckbox from "@radix-ui/react-checkbox";
import { CheckboxContainer, StyledCheckbox } from "./styles";

interface CheckboxProps extends RdxCheckbox.CheckboxProps {
  onChanges: (value: boolean | string) => void;
}

const Checkbox = ({
  onChanges,
  placeholder,
  value,
  ...props
}: CheckboxProps) => {
  return (
    <CheckboxContainer>
      <StyledCheckbox
        {...props}
        value={value}
        className=" data-[state=checked]:bg-blue-theme"
        id={placeholder}
        onCheckedChange={(v) => onChanges(!v)}
      />
      <label htmlFor={placeholder}>{placeholder}</label>
    </CheckboxContainer>
  );
};

export default Checkbox;
