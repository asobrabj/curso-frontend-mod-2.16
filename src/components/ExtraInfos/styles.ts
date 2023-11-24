import styled from "styled-components";
import { theme } from "../../styles/variables";

export const Container = styled.div`
  h3 {
    color: ${theme.colors.primary};
  }

  margin: 32px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  width: 100%;
`;
