import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5vw;

  > input {
    background-color: rgba(255, 255, 255, 0.1);
    color: #272f33;

    font-weight: 400;

    font-size: 16px;

    outline: none;
    border: none;
    border-radius: 8px;
    padding: 13px 16px;
    min-height: 38px;
  }

  > div:nth-child(1) {
    display: flex;
    padding: 0px 16px;
    align-items: center;

    > label {
      color: #272f33;
      font-weight: 500;

      font-size: 16px;
    }
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  padding: 0vw 2vw;
  font-size: 0.8em;
`;

export const ShowPasswordIcon = styled.span`
  cursor: pointer;
  color: #ffffff;
  position: absolute;
  right: 10px;
  top: 70%;
  transform: translateY(-50%);
`;
