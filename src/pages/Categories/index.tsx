import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Section from "../../components/Section";
import instance from "../../services";
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

interface SubCategories {
  subCategory: string;
  urlSubCategory: string;
}

interface ListCategories {
  category: string;
  urlCategory: string;
  subCategories?: SubCategories[];
}

function Categories() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [categoryFormat, setCategoryFormat] = useState<string>("");

  const location = useLocation();
  const { category } = useParams();
  console.log(category);

  useEffect(() => {
    const request = async () => {
      const [responseProducts, responseCategories] = await Promise.all([
        instance.get<ProductProps[]>("/products"),
        instance.get<ListCategories[]>("/navCategories"),
      ]);

      if (location.pathname.includes("sub")) {
        const dataCategory = responseCategories.data
          .filter((item) => item.subCategories)
          .map((item) => ({ subCategories: item.subCategories }));

        const dataSubCategory = dataCategory.filter((item) =>
          item.subCategories!.find((subItem) =>
            subItem.urlSubCategory.includes(category!),
          ),
        )[0];
        const { subCategories } = dataSubCategory;
        if (subCategories) {
          setProducts(
            responseProducts.data.filter(
              (product) => product.subCategory === subCategories[0].subCategory,
            ),
          );
          console.log("sub-category");
        }
      } else {
        const dataCategory = responseCategories.data.find((item) =>
          item.urlCategory.includes(category!),
        );
        setCategoryFormat(dataCategory!.category);
        setProducts(
          responseProducts.data.filter(
            (product) => product.category === dataCategory!.category,
          ),
        );
      }
    };

    request();
  }, [category]);

  return (
    <S.Container>
      {products.length > 0 ? (
        <Section section={categoryFormat!} products={products} />
      ) : (
        <div className="notFound">
          <h1>{categoryFormat}</h1>
          <p className="paragraph">Nenhum Produto encontrado</p>
        </div>
      )}
    </S.Container>
  );
}

export default Categories;
