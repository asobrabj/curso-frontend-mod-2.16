import { useLocation, useNavigate } from "react-router-dom";
import StarsIcon from "../StarsIcon";
import * as S from "./styles";

export interface ProductProps {
  id: number;
  img: string;
  name: string;
  price: number;
  oldPrice?: number;
  installments: number;
  category: string;
  subCategory?: string;
  section: string;
}

interface CardProps {
  onClick: (product: ProductProps) => void;
  product: ProductProps;
}

function Card({ onClick, product }: CardProps) {
  const { img, installments, name, price } = product;
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  return (
    <S.Container>
      <img src={img} alt="" />
      <a href="">{name}</a>
      <StarsIcon />
      <p>R$ {price.toFixed(2)}</p>
      <span>
        {installments}x de R$ {(price / installments).toFixed(2)} sem juros
      </span>
      <S.ContainerButton>
        <S.Button className="carrinhoBtn" onClick={() => onClick(product)}>
          {pathname.includes("cart") ? "remover" : "carrinho"}
        </S.Button>
        <span>/</span>
        <S.Button className="compraBtn" onClick={() => navigate(`/${name}`)}>
          comprar
        </S.Button>
      </S.ContainerButton>
    </S.Container>
  );
}

export default Card;
