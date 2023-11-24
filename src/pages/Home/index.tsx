import { useEffect, useState } from "react";
import Section from "../../components/Section";
import instance from "../../services";

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

function Home() {
  const [news, setNews] = useState<ProductProps[]>([]);
  const [offers, setOffers] = useState<ProductProps[]>([]);
  const [detach, setDetach] = useState<ProductProps[]>([]);

  useEffect(() => {
    const request = async () => {
      const response = await instance.get<ProductProps[]>("/products");

      setNews(
        response.data.filter((product) => product.section === "novidades"),
      );
      setOffers(
        response.data.filter((product) => product.section === "ofertas"),
      );
      setDetach(
        response.data.filter((product) => product.section === "destaque"),
      );
    };

    request();
  }, []);
  return (
    <>
      <Section section="novidades" products={news} />
      <Section section="destaque" products={detach} background="secondary" />
      <Section section="ofertas" products={offers} />
    </>
  );
}

export default Home;
