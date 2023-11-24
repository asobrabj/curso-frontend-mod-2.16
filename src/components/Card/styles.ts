import styled from "styled-components";
import { theme } from "../../styles/variables";
import { Stars } from "../StarsIcon/styles";

export const Container = styled.div`
  width: 250px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.White};
  padding: 16px 0;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 12px;

  img {
    display: block;
    max-height: 250px;
    max-width: 250px;
    width: 100%;
  }
  a {
    display: block;
    margin: 16px 0;
  }
  > p {
    margin-top: 30px;
    font-size: 24px;
    font-weight: bold;
  }

  span {
    display: block;
    margin-top: 8px;
    font-size: 14px;
    font-weight: bold;
  }

  > ${Stars} {
    margin-left: 80px;
    max-width: 200px;
    > i {
      margin-left: -110px;
    }
  }
`;

export const ContainerButton = styled.div`
  position: relative;
  display: flex;

  .carrinhoBtn {
    border-right: none;
    border-radius: 16px 0 0 16px;
  }
  .compraBtn {
    border-left: none;
    border-radius: 0 16px 16px 0;
  }

  span {
    position: absolute;
    top: 16%;
    left: 49%;
    font-size: 24px;
    font-weight: 100;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  display: block;
  margin: 16px 0;
  text-align: center;
  font-size: 14px;
  font-weight: bolder;
  padding: 8px;
  width: 100px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  &:hover {
    background-color: ${theme.colors.button};
    color: ${theme.colors.White};
  }
`;
