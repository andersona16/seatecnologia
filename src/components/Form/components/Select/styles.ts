import styled, { css } from "styled-components";
import * as RdxSelect from "@radix-ui/react-select";

export const Container = styled.div``;

export const RelativeContainer = styled.div`
  position: relative;
`;

export const Trigger = styled(RdxSelect.Trigger)<{
  disabled?: boolean;
  error?: string;
}>`
  ${({ disabled, error }) => css`
    width: 100%;
    border: 1px solid rgb(79 161 193);
    border-radius: 10px;
    padding: 0.75rem;
    height: 36px;
    outline: none;
    text-align: left;
    ${error && `border: 1px solid red;`}
    ${disabled && `cursor: not-allowed;`}
  `}
`;

export const Icon = styled(RdxSelect.Icon)`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
`;

export const Content = styled(RdxSelect.Content)`
  overflow: hidden;
  margin-top: 12px;
  background-color: white;
  border: 1px solid rgb(79 161 193);
  border-radius: 10px;
  box-shadow: 0px 11px 20px 0px rgba(0, 0, 0, 0.25);
`;

export const ScrollUpButton = styled(RdxSelect.ScrollUpButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: var(--gray-800);
  cursor: default;
`;

export const Viewport = styled(RdxSelect.Viewport)`
  padding: 0.5rem;
`;

export const Item = styled(RdxSelect.Item)`
  &[data-state="checked"] {
    font-weight: bold;
  }
  &[data-highlighted] {
    background-color: var(--gray-50);
  }
  border-radius: 8px;
  outline: none;
  padding: 0.5rem;
  font-size: 0.875rem;
`;

export const ScrollDownButton = styled(RdxSelect.ScrollDownButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: var(--gray-800);
  cursor: default;
`;
