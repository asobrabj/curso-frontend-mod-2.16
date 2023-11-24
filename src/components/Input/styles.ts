import styled from "styled-components";
import { theme } from "../../styles/variables";

export const Label = styled.label`
  position: absolute;
  top: 8px;
  left: 24px;
  font-size: 12px;
  background-color: ${theme.colors.White};

  span {
    color: red;
    margin: 0 3px;
  }
`;

export const FormComposition = styled.div`
  position: relative;
  width: 350px;
  padding: 16px;
  display: block;
  margin: auto;

  input {
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.5);

    &:focus {
      outline: none;
    }
    &::placeholder {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;
