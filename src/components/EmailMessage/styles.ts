import styled from "styled-components";
import { theme } from "../../styles/variables";

export const Container = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: 400;
    font-size: 30px;
    margin-bottom: 16px;

    span {
      font-size: 18px;
      color: rgba(0, 0, 0, 0.5);
    }
  }

  input {
    padding: 8px;
    width: 300px;
    border: 2px solid rgba(0, 0, 0, 0.5);

    &::placeholder {
      color: rgba(0, 0, 0, 0.5);
      font-weight: bold;
    }
    &:focus {
      outline: none;
    }
  }

  button {
    cursor: pointer;
    padding: 10px;
    font-weight: bold;
    color: ${theme.colors.White};
    background-color: ${theme.colors.button};
    border: none;
  }

  > .card {
    margin: 32px 0;
    width: 300px;
    text-align: left;
    padding: 16px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;

    h2 {
      font-size: 14px;
      color: ${theme.colors.button};
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
    }
  }
`;
