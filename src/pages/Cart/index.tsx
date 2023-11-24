import { useContext } from "react";
import Section from "../../components/Section";
import { CartContext } from "../../context";
import * as S from "./styles";

function CartPage() {
  const { cart } = useContext(CartContext);

  return (
    <S.Container>
      {cart.length > 0 ? (
        <Section section={"Carrinho"} products={cart} />
      ) : (
        <div className="notFound">
          <h1>{"Carrinho"}</h1>
          <p className="paragraph">Nenhum Produto encontrado</p>
        </div>
      )}
    </S.Container>
  );
}

export default CartPage;
