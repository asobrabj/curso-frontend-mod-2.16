import { useParams } from "react-router-dom";
import EmailMessage from "../EmailMessage";
import Input from "../Input";
import * as S from "./styles";

function FormAccount() {
  const { requirement } = useParams();
  console.log(requirement);

  return (
    <>
      {" "}
      {requirement === "my-orders" ? (
        <EmailMessage />
      ) : (
        <S.Form>
          {requirement === "register" ? (
            <>
              <h1>Cadastrar</h1>
              <Input required label={"Nome"} id={"nome"} type={"text"} />
            </>
          ) : (
            <h1>Login</h1>
          )}
          <Input required label={"Email"} id={"email"} type={"email"} />
          <Input required label={"Senha"} id={"password"} type={"password"} />
          <S.Button>
            {requirement === "register" ? "Cadastrar" : "Entrar"}
          </S.Button>
        </S.Form>
      )}
    </>
  );
}

export default FormAccount;
