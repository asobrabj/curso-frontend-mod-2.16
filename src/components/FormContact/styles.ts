import styled from "styled-components";
import { theme } from "../../styles/variables";
import { Label as L } from "../Input/styles";

export const Label = styled(L)``;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  margin: 40px auto;
`;

export const Form = styled.form`
  min-height: 400px;
  max-width: 800px;
  text-align: center;
  display: block;
  margin: auto;
  padding: 32px 0;
`;

export const FormComposition = styled.div`
  position: relative;
  width: 350px;
  padding: 16px;
  display: block;
  margin: auto;
`;

export const ContainerSubject = styled.div`
  max-width: 720px;
  display: block;
  margin: 32px auto;
  position: relative;

  select,
  textarea {
    background-color: ${theme.colors.White};
    color: rgba(0, 0, 0, 0.5);
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.5);

    &:focus {
      outline: none;
    }
  }

  textarea {
    min-height: 150px;
    resize: none;
  }

  ${Label} {
    top: -7px;
    left: 8px;
  }
`;

export const Button = styled.button`
  margin-bottom: 32px;
  padding: 8px;
  width: 300px;
  background-color: ${theme.colors.button};
  color: ${theme.colors.White};
  border: none;
`;
