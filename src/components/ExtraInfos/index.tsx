import * as S from "./styles";

function ExtraInfo() {
  return (
    <S.Container>
      <div>
        <h3>Formas de Pagamento</h3>
        <img
          src="https://img.irroba.com.br/filters:format(webp):fill(transparent):quality(80)/rebecaaz/catalog/new-payment-method-foot.png"
          alt=""
        />
      </div>
      <div>
        <h3>Site Seguro- Compre com Segurança</h3>
        <img
          src="https://cdn.irroba.com.br/static/catalog/image/footer_seals/google_safe_browsing_foot.png"
          alt=""
        />
      </div>
      <div>
        <h3>Entrega</h3>
        <img
          src="https://cdn.irroba.com.br/static/catalog/image/footer_seals/correios_foot.png"
          alt=""
        />
      </div>
    </S.Container>
  );
}

export default ExtraInfo;
