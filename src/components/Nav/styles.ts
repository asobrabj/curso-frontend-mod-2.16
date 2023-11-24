import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styles/variables";

interface Props {
  theme: "dark" | "ligth";
  themeHover: "green" | "red";
}

export const LinkTo = styled(Link)`
  text-decoration: none;
`;

export const Nav = styled.nav<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  background-color: ${(props) =>
    props.theme === "dark" ? theme.colors.black : theme.colors.White};
  color: ${(props) =>
    props.theme === "dark" ? theme.colors.White : theme.colors.black};
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  ${LinkTo} {
    color: ${(props) =>
      props.theme === "dark" ? theme.colors.White : theme.colors.black};
    transition: color 1s ease;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;

  span {
    padding: 0 8px;
  }
`;

export const ListItem = styled.li<Props>`
  padding: 16px 8px;
  text-transform: uppercase;
  border-bottom: 2px solid transparent;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    ${LinkTo} {
      color: ${(props) => (props.themeHover === "green" ? "green" : "red")};
    }
    border-bottom: 2px solid
      ${(props) => (props.themeHover === "green" ? "green" : "transparent")};

    .subCategories {
      display: block;
    }
  }

  .subCategories {
    position: absolute;
    top: 52px;
    left: -10px;
    min-height: 20px;
    z-index: 1;
    border: 1px solid rgba(0, 0, 0, 0.3);
    width: 150px;
    display: none;
  }
`;
