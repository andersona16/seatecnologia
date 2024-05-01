import styled from "styled-components";
import * as RdxCheckbox from "@radix-ui/react-checkbox";

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledCheckbox = styled(RdxCheckbox.Root)`
  border: 1px solid rgb(79 161 193);

  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  outline: none;
  &:checked {
    background-color: rgb(79 161 193);
  }
`;
