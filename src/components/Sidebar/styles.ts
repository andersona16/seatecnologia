import styled from "styled-components";

export const SidebarContainer = styled.aside`
  width: 58px;
  height: 100vh;
  background-color: rgb(79 161 193);
  gap: 24px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-top-right-radius: 48px;
  position: fixed;
  left: 0;
  top: 0;
`;

export const Highlight = styled.div`
  position: absolute;
  height: 41px;
  width: 100%;
  background-color: #fff;
  top: 50px;
  left: 0;
`;

export const IconContainer = styled.div<{ index: number }>`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  ${({ index }) =>
    index === 1
      ? `
    opacity: 1;
  `
      : `
    &:hover {
      opacity: 0.8;
    }
  `}
`;

export const HighlightBar = styled.span`
  background-color: #fff;
  height: 35px;
  width: 5.5px;
  position: absolute;
  left: 0;
`;
