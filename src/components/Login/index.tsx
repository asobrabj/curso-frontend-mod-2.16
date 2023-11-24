import { FaSignInAlt } from "react-icons/fa";
import * as S from "./styles";

function Login() {
  return (
    <S.Container>
      <FaSignInAlt />
      <p>Login:</p>
      <a href="/account/login">Entrar</a>/
      <a href="/account/register">Cadastrar</a>
    </S.Container>
  );
}

export default Login;
