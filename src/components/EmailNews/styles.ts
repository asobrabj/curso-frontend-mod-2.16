import styled from "styled-components";
import { theme } from "../../styles/variables";

export const Container = styled.div`
  background-color: ${theme.colors.black};
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${theme.colors.White};
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-bottom: 24px;

  p {
    margin: 0 16px;
  }
`;

export const Button = styled.button`
  padding: 8px;
  margin-left: 8px;
  background-color: ${theme.colors.button};
  border: none;
  color: ${theme.colors.White};
  cursor: pointer;
`;

export const Checkbox = styled.div`
  display: flex;
  span {
    margin-right: 16px;
  }
`;

export const Input = styled.input`
  padding: 8px;
  width: 300px;

  &:focus {
    outline: none;
  }
`;
