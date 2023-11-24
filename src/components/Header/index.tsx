import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import instance from "../../services";
import Cart from "../Cart";
import Login from "../Login";
import Nav from "../Nav";
import * as S from "./styles";

interface List {
  name: string;
  url: string;
}

interface SubCategories {
  subCategory: string;
  urlSubCategory: string;
}

interface ListCategories {
  category: string;
  urlCategory: string;
  subCategories?: SubCategories[];
}

function Header() {
  const [nav, setNav] = useState<List[]>([]);
  const [navCategories, setNavCategories] = useState<ListCategories[]>([]);

  useEffect(() => {
    const request = async () => {
      const [responseNav, responseNavCategories] = await Promise.all([
        instance.get<List[]>("/navPrimary"),
        instance.get<ListCategories[]>("/navCategories"),
      ]);

      setNav(responseNav.data);
      setNavCategories(responseNavCategories.data);
    };
    request();
  }, []);

  return (
    <S.Header>
      <Nav theme="dark" list={nav} themeHover="red" />
      <S.Container>
        <div className="container">
          <S.ContainerInput>
            <S.Input />
            <i>
              <FaSearch />
            </i>
          </S.ContainerInput>
          <div className="cart">
            <Login />
            <Cart />
          </div>
        </div>
      </S.Container>
      <Nav theme="ligth" listCategories={navCategories} themeHover="green" />
    </S.Header>
  );
}

export default Header;
