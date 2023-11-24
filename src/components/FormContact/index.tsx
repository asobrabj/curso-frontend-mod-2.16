import Input from "../Input";
import * as S from "./styles";

function FormContact() {
  return (
    <S.Form>
      <h1>Fale Conosco</h1>
      <S.Container>
        <Input
          id="nome"
          label="Nome"
          required={true}
          type="text"
          placeholder="Seu nome"
        />
        <Input
          id="email"
          label="Email"
          required={true}
          type="email"
          placeholder="Seu email"
        />
        <Input
          id="phone"
          label="Telefone Fixo"
          required={true}
          type="tel"
          placeholder="(99) 9 9999-9999"
        />
        <Input
          id="smartphone"
          label="Celular"
          required={true}
          type="tel"
          placeholder="(99) 9 9999-9999"
        />
        <Input
          id="city"
          label="Cidade/UF"
          required={true}
          type="text"
          placeholder="Cidade/UF"
        />
        <Input
          id="order"
          label="N° Pedido"
          required={false}
          type="text"
          placeholder="12345"
        />
      </S.Container>
      <S.ContainerSubject>
        <S.Label>
          <span>*</span>Assunto
        </S.Label>
        <select required>
          <option value="">Assunto</option>
          <option value="">Assunto</option>
          <option value="">Assunto</option>
          <option value="">Assunto</option>
        </select>
      </S.ContainerSubject>
      <S.ContainerSubject>
        <S.Label>
          <span>*</span>Mensagem
        </S.Label>
        <textarea></textarea>
      </S.ContainerSubject>
      <S.Button>Enviar Mensagem</S.Button>
    </S.Form>
  );
}

export default FormContact;
