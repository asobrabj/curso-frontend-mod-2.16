import React from "react";
import * as S from "./styles";

interface OptionProps {
  name: string;
  url?: string;
  icon?: string;
}

interface InfoProps {
  title: string;
  options: OptionProps[];
}

function CardInfo({ title, options }: InfoProps) {
  return (
    <S.Container>
      <h3>{title}</h3>

      {options.map((option, index) => (
        <React.Fragment key={index}>
          {option.url ? (
            <a href={option.url}>{option.name}</a>
          ) : (
            <div className="paragraph">
              <i className="material-symbols-outlined">{option.icon}</i>
              <p>{option.name}</p>
            </div>
          )}
        </React.Fragment>
      ))}
    </S.Container>
  );
}

export default CardInfo;
