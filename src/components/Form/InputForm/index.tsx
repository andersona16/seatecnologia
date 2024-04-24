import { Input } from "antd";
import React, { ChangeEvent } from "react";
import * as Yup from "yup";
import { Container, ErrorMessage } from "./styles";

interface InputFormProps {
  id: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  validationSchema?: Yup.Schema;
  error?: string;
  type?: "text" | "password";
}

const InputForm: React.FC<InputFormProps> = ({
  id,
  value,
  onChange,
  placeholder,
  label = "",
  validationSchema,
  error,
  type = "text",
}) => {
  const validateValue = async (inputValue: string) => {
    if (!validationSchema) return;

    try {
      await validationSchema.validateAt(id, { [id]: inputValue });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange(event);
    validateValue(value);
  };

  return (
    <>
      <Container>
        <div>
          {label && <label htmlFor={id}>{label}</label>}
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </div>
        <Input
          id={id}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={error ? "error" : ""}
        />
      </Container>
    </>
  );
};

export default InputForm;
