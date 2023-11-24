import styled from "styled-components";
import { theme } from "../../styles/variables";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    display: block;
    width: 600px;
    font-size: 12px;
    color: ${theme.colors.primary};
  }

  img {
    width: 100px;
    margin: 16px 0;
  }
`;
