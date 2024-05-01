import styled from "styled-components";

export const Line = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 38%;
  width: 100%;
  height: 5px;
  z-index: -1;
`;

export const StepContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  padding: 0 30px;
  z-index: 10;
`;

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
`;

interface StepCircleProps {
  isCurrent: boolean;
}

export const StepCircle = styled.div<StepCircleProps>`
  display: grid;
  place-items: center;
  gap: 4px;
  height: 70px;
  width: 70px;
  border-radius: 20px;
  background-color: ${({ isCurrent }) => (isCurrent ? "#4FC1C1" : "#649FBF")};
  box-shadow: 0px 4px 2px 0px rgba(0, 0, 0, 0.25);
`;

interface StepLabelProps {
  isCurrent: boolean;
}

export const StepLabel = styled.span<StepLabelProps>`
  color: ${({ isCurrent }) => (isCurrent ? "#4FC1C1" : "#649FBF")};
  text-transform: uppercase;
`;

export const CompletionLabel = styled.span`
  color: #9e9e9e;
  font-size: 12px;
  text-transform: uppercase;
`;
