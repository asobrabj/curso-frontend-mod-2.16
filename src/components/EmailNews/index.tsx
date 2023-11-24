import { FaEnvelope } from "react-icons/fa";
import * as S from "./styles";

function EmailNews() {
  return (
    <S.Container>
      <S.ContainerInput>
        <FaEnvelope className="icon" />
        <p>RECEBA NOVIDADES</p>
        <S.Input />
        <S.Button>Enviar</S.Button>
      </S.ContainerInput>
      <S.Checkbox>
        <span>Aceito Receber E-mails e Novidades</span>
        <input type="checkbox" />
      </S.Checkbox>
    </S.Container>
  );
}

export default EmailNews;
