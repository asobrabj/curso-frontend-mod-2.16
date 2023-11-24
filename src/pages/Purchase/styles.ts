import styled from "styled-components";
import { Stars } from "../../components/StarsIcon/styles";
import { theme } from "../../styles/variables";

export const Container = styled.div`
  display: flex;
  padding: 40px;
  justify-content: center;

  > img {
    object-fit: cover;
  }
`;

export const Content = styled.div`
  margin-left: 60px;
  width: 400px;

  h1 {
    font-weight: 200;
  }

  .price {
    font-weight: 600;
    font-size: 32px;
    margin-top: 50px;
  }
`;

export const ContainerRef = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  text-transform: uppercase;
  color: ${theme.colors.primary};
`;

export const ButtonPurchase = styled.button`
  margin: 24px 0;
  padding: 12px;
  width: 250px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: ${theme.colors.button};
  border: none;
  color: ${theme.colors.White};
`;

export const ContainerAssessment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);

  span {
    font-size: 14px;
    margin-right: 15px;
  }

  > ${Stars} {
    width: 0px;
    > i {
      margin-left: -140px;
      > svg {
        margin-left: -10px;
      }
    }
  }
`;

export const ContainerCep = styled.div`
  margin-top: 20px;
  display: flex;

  > p {
    text-transform: capitalize;
    margin-right: 30px;
  }

  > span {
    font-size: 10px;
    color: #00f;
  }
`;

export const Input = styled.input`
  padding: 8px;
`;

export const Button = styled.button`
  padding: 8px;
  color: ${theme.colors.White};
  background-color: #aaa;
`;
