import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context";
import * as S from "./styles";

function Cart() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const priceTotalCart = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <S.Container>
      <FaShoppingCart onClick={() => navigate("/cart")} />
      <p>
        {cart.length} item(s) - R$ {priceTotalCart.toFixed(2)}
      </p>
    </S.Container>
  );
}

export default Cart;
