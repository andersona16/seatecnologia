import React from "react";
import { ErrorContainer } from "./styles";

interface ErrorComponentProps {
  children: React.ReactNode;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ children }) => (
  <ErrorContainer>{children as React.ReactNode}</ErrorContainer> 
);

export default ErrorComponent;
