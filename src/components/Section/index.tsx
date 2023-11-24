import { useContext, useEffect, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { CartContext } from "../../context";
import Card from "../Card";
import * as S from "./styles";

interface ProductProps {
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

interface SectionProps {
  background?: "primary" | "secondary";
  products: Array<ProductProps>;
  section: string;
}

function Section({ background = "primary", products, section }: SectionProps) {
  const [list, setList] = useState<ProductProps[]>([]);
  const [index, setIndex] = useState<number>(0);
  const { cart, setCart } = useContext(CartContext);
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    setList(products.slice(index, index + 4));
  }, [products, index]);

  const next = () => {
    const newIndex = index + 4;
    if (newIndex < products.length) {
      setIndex(newIndex);
      setList(list.slice(newIndex, newIndex + 4));
    }
  };

  const prev = () => {
    const newIndex = index - 4;
    if (newIndex >= 0) {
      setIndex(newIndex);
      setList(list.slice(newIndex, newIndex + 4));
    }
  };

  const addCart = (product: ProductProps) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  const removeProduct = (product: ProductProps) => {
    const newCart = cart.filter((prevProduct) => prevProduct.id !== product.id);
    console.log(newCart);
  };

  return (
    <S.Container $backgroud={background}>
      <h1 className="container">{section}</h1>
      <S.ContainerCard className="container">
        {list.map((product) => (
          <Card
            product={product}
            key={product.id}
            onClick={pathname.includes("cart") ? removeProduct : addCart}
          />
        ))}
      </S.ContainerCard>
      <FaArrowCircleLeft className="prev" onClick={prev} />
      <FaArrowCircleRight className="next" onClick={next} />
    </S.Container>
  );
}

export default Section;
