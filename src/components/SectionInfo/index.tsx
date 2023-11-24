import { useEffect, useState } from "react";
import instance from "../../services";
import CardInfo from "../CardInformations";
import ExtraInfo from "../ExtraInfos";
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

function SectionInfo() {
  const [list, setList] = useState<InfoProps[]>([]);

  useEffect(() => {
    const request = async () => {
      const response = await instance.get<InfoProps[]>("/infos");
      setList(response.data);
    };
    request();
  }, []);

  return (
    <S.Section>
      <S.Container className="container">
        <div className="card">
          {list &&
            list.map((info) => (
              <CardInfo
                key={info.title}
                title={info.title}
                options={info.options}
              />
            ))}
        </div>
        <ExtraInfo />
      </S.Container>
    </S.Section>
  );
}

export default SectionInfo;
