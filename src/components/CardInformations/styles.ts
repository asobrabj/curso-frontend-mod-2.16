import styled from "styled-components";
import { theme } from "../../styles/variables";

export const Container = styled.div`
  padding: 16px;

  h3 {
    font-size: 16px;
    color: ${theme.colors.primary};
  }

  a {
    display: block;
    margin: 8px 0;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: ${theme.colors.primary};
    }
  }
  .paragraph {
    display: flex;
    align-items: center;
    i {
      margin-right: 8px;
    }
  }
`;
