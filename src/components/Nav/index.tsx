import React from "react";
import { FaCaretDown } from "react-icons/fa";
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

interface NavProps {
  theme: "dark" | "ligth";
  themeHover: "green" | "red";
  list?: List[];
  listCategories?: ListCategories[];
}

function Nav({ theme, list, listCategories, themeHover }: NavProps) {
  return (
    <S.Nav theme={theme} themeHover={themeHover}>
      <S.List>
        {list &&
          list.map((item) => {
            const { name, url } = item;
            return (
              <React.Fragment key={name}>
                <S.ListItem themeHover={themeHover}>
                  <S.LinkTo to={url}>{name}</S.LinkTo>
                </S.ListItem>
                {item !== list[list.length - 1] && <span>|</span>}
              </React.Fragment>
            );
          })}
        {listCategories &&
          listCategories.map((item) => {
            const { category, urlCategory, subCategories } = item;
            return (
              <React.Fragment key={category}>
                <S.ListItem themeHover={themeHover}>
                  <S.LinkTo to={urlCategory}>{category}</S.LinkTo>
                  {subCategories && (
                    <div className="subCategories">
                      {subCategories.map((itemSub) => {
                        const { subCategory, urlSubCategory } = itemSub;
                        return (
                          <S.ListItem key={subCategory} themeHover={themeHover}>
                            <S.LinkTo to={urlSubCategory}>
                              {subCategory}
                            </S.LinkTo>
                          </S.ListItem>
                        );
                      })}
                    </div>
                  )}
                </S.ListItem>
                {subCategories && <FaCaretDown />}
                {item !== listCategories[listCategories.length - 1] && (
                  <span>|</span>
                )}
              </React.Fragment>
            );
          })}
      </S.List>
    </S.Nav>
  );
}

export default Nav;
