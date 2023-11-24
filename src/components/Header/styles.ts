import styled from "styled-components";
import { theme } from "../../styles/variables";
import { Container as Login } from "../Login/styles";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  height: 200px;
  width: 100%;
  background-color: ${theme.colors.primary};
  background-image: url("https://img.irroba.com.br/filters:format(webp):fill(transparent):quality(80)/rebecaaz/catalog/logorebecaazevedo1.png");
  background-repeat: no-repeat;
  background-position: center;

  > div {
    margin: 24px auto 0;
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      font-size: 14px;

      ${Login} {
        margin-right: 16px;
      }
    }
  }

  .cart {
    padding: 16px;
  }
`;

export const ContainerInput = styled.div`
  position: relative;
  display: flex;
  padding: 16px;

  > i {
    position: absolute;
    right: 15px;
    padding: 5px;
  }
`;

export const Input = styled.input`
  padding: 5px;
  background-color: #ddd;
  border: none;
  border-radius: 5px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

// https://img.irroba.com.br/filters:format(webp):fill(transparent):quality(80)/rebecaaz/catalog/logorebecaazevedo1.png
