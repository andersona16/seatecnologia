import { XIcon } from "lucide-react";

import { ErrorContainer, ErrorMessage } from "./styles";

interface ErrorFeedbackProps {
  message: string;
}

const ErrorFeedback = ({ message }: ErrorFeedbackProps) => {
  return (
    <ErrorContainer>
      <XIcon size="12px" />
      <ErrorMessage>{message}</ErrorMessage>
    </ErrorContainer>
  );
};

export default ErrorFeedback;
