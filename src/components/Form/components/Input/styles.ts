import { ComponentProps } from "react";
import styled from "styled-components";

interface InputProps extends ComponentProps<"input"> {
  label?: string;
  error?: string;
}

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

export const StyledInput = styled.input<InputProps>`
  outline: none;
  border: 1px solid
    ${(props) => (props.error ? "rgb(127 29 29 )" : "rgb(127 29 29 )")};
  width: 100%;
  border-radius: 10px;
  height: 36px;
  padding: 0 2px;
  background-color: ${(props) => (props.disabled ? "#CCC" : "#FFF")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "auto")};
`;
