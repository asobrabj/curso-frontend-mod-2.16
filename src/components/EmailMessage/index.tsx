import * as S from "./styles";

function EmailMessage() {
  return (
    <S.Container>
      <h1>
        Informe seu e-mail para continuar. <span>Rápido. Fácil. Seguro.</span>
      </h1>
      <div>
        <input type="email" placeholder="seu@email.com.br" />
        <button>Continuar</button>
      </div>
      <div className="card">
        <h2>Usamos seu e-mail de forma 100% segura para:</h2>
        <p>
          Identificar seu perfil Notificar sobre o andamento do seu pedido
          Gerenciar seu histórico de compras Agilizar o preenchimento de suas
          informações
        </p>
      </div>
    </S.Container>
  );
}

export default EmailMessage;
