import React from "react";
import stepIcon from "../../assets/icons/step.svg";
import line from "../../assets/img/linesteps.png";
import { useSelector } from "../../hooks/useSelector";
import {
  CompletionLabel,
  Line,
  StepCircle,
  StepContainer,
  StepLabel,
  StepWrapper,
} from "./styles";

interface StepProps {
  id: number;
  label: string;
  isCurrent: boolean;
  isCompleted: boolean;
}

const Step: React.FC<StepProps> = ({ id, label, isCurrent, isCompleted }) => (
  <StepWrapper>
    <StepCircle isCurrent={isCurrent}>
      <img src={stepIcon} alt="step-icon" />
    </StepCircle>
    <StepLabel isCurrent={isCurrent}>{label}</StepLabel>
    {id === 1 && isCompleted && <CompletionLabel>Concluído</CompletionLabel>}
  </StepWrapper>
);

const MultiStep: React.FC = () => {
  const { completedStage, currentStage } = useSelector(
    (state) => state.dashboard
  );

  const steps: { id: number; label: string }[] = [
    { id: 1, label: "Item 1" },
    { id: 2, label: "Item 2" },
    { id: 3, label: "Item 3" },
    { id: 4, label: "Item 4" },
    { id: 5, label: "Item 5" },
    { id: 6, label: "Item 6" },
    { id: 7, label: "Item 7" },
    { id: 8, label: "Item 8" },
    { id: 9, label: "Item 9" },
  ];

  return (
    <>
      <Line src={line} alt="line" />

      <StepContainer>
        {steps.map((step) => (
          <Step
            key={step.id}
            id={step.id}
            label={step.label}
            isCurrent={step.id === currentStage - 1}
            isCompleted={step.id === 1 && completedStage}
          />
        ))}
      </StepContainer>
    </>
  );
};

export default MultiStep;
