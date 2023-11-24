import styled from "styled-components";
import { theme } from "../../styles/variables";

export const Form = styled.div`
  padding: 50px 0;

  h1 {
    text-align: center;
    margin: 24px 0;
  }
`;

export const Button = styled.button`
  display: block;
  margin: auto;
  width: 150px;
  padding: 8px;
  background-color: ${theme.colors.button};
  font-weight: bold;
  color: ${theme.colors.White};
  border: 1px solid rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;
