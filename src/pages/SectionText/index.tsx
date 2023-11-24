import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TextHtml from "../../components/TextHtml";
import instance from "../../services";
import * as S from "./styles";

function SectionText() {
  const { politic } = useParams();
  const [data, setData] = useState<string>("");

  useEffect(() => {
    const request = async () => {
      const response = await instance.get(`/politics`);
      setData(response.data[`${politic}`]);
    };
    request();
  }, []);
  return (
    <S.Container className="container">
      <TextHtml html={data} />

      <img
        src="https://img.irroba.com.br/filters:format(webp):fill(transparent):quality(80)/rebecaaz/catalog/logorebecaazevedo1.png"
        alt=""
      />
    </S.Container>
  );
}

export default SectionText;
