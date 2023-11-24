import styled from "styled-components";
import { theme } from "../../styles/variables";

interface Props {
  $backgroud: "primary" | "secondary";
}

export const Container = styled.div<Props>`
  background-color: ${(props) =>
    props.$backgroud === "primary" ? theme.colors.White : "#ccc"};
  padding: 40px 0;
  position: relative;
  h1 {
    margin-bottom: 40px;
    text-transform: uppercase;
  }

  svg {
    position: absolute;
    &.next,
    &.prev {
      cursor: pointer;
      top: 50%;
      right: 20px;
      font-size: 24px;
    }
    &.next {
      right: 20px;
    }
    &.prev {
      left: 20px;
    }
  }
`;

export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
`;
