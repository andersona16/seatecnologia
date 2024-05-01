import * as RadioGroup from "@radix-ui/react-radio-group";
import styled, { css } from "styled-components";

interface StyledRadioProps {
  error?: boolean;
  theme: {
    blue: string;
  };
}

export const RadioGroupItem = styled(RadioGroup.Item)<StyledRadioProps>`
  background-color: white;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid;
  border-color: ${(props) => props.theme.blue};
  outline: none;
  cursor: default;

  ${(props) =>
    props.error &&
    css`
      border-color: red;
    `}

  &[data-state="checked"] {
    background-color: ${(props) => props.theme.blue};
  }
`;
