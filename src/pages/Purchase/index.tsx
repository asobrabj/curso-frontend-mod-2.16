import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductProps } from "../../components/Card";
import StarsIcon from "../../components/StarsIcon";
import instance from "../../services";
import * as S from "./styles";

function Purchase() {
  const [name, setName] = useState<string>("");
  const [ref, setRef] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [installments, setInstallments] = useState<number>(0);
  const [img, setImg] = useState<string>();
  const { product } = useParams();

  useEffect(() => {
    if (product) {
      const finalSlug = product.replace(/%20/g, " ");
      const fetchData = async () => {
        try {
          const response = await instance.get<ProductProps[]>("/products");
          const foundProduct = response.data.find(
            (item) => item.name === finalSlug,
          );

          if (foundProduct) {
            const nameSplit = foundProduct.name.split("-");
            setImg(foundProduct.img);
            setName(nameSplit[0]);
            setRef(nameSplit[1]);
            setPrice(foundProduct.price);
            setInstallments(foundProduct.installments);
          }
        } catch (error) {
          console.error("Erro na requisição:", error);
        }
      };
      fetchData();
    }
  }, []);

  return (
    <S.Container>
      <img src={img} alt="" />
      <S.Content>
        <h1>{name}</h1>
        <S.ContainerRef>
          <span>ref:{ref}</span>
          <span>disponibilidade: Pronta entrega</span>
        </S.ContainerRef>
        <p className="price">R$ {price.toFixed(2)}</p>
        <p>
          {installments}x de{" "}
          <strong>R$ {(price / installments).toFixed(2)}</strong> sem juros
        </p>
        <p>
          ou <strong>R$ {(price - price * 0.1).toFixed(2)}</strong> no pix
        </p>

        <S.ButtonPurchase>clique para comprar</S.ButtonPurchase>
        <S.ContainerAssessment>
          <StarsIcon />
          <span>0 Avalições</span>
          <span>0 Avaliar</span>
        </S.ContainerAssessment>
        <S.ContainerCep>
          <p>caucular prazos e preços</p>
          <span>não sei meu CEP</span>
        </S.ContainerCep>
        <S.Input type="text" placeholder="Digite seu CEP" />
        <S.Button>Consultar</S.Button>
      </S.Content>
    </S.Container>
  );
}

export default Purchase;
