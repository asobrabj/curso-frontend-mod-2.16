import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import * as S from "./styles";

function Carousel() {
  const images = [
    "https://img.irroba.com.br/fit-in/1440x1440/filters:format(webp):quality(80)/rebecaaz/catalog/banner/novembro/colecao-celebration.jpg",
    "https://img.irroba.com.br/fit-in/1440x1440/filters:format(webp):quality(80)/rebecaaz/catalog/banner/novembro/escolhido-da-lu.jpg",
    "https://img.irroba.com.br/fit-in/1440x1440/filters:format(webp):quality(80)/rebecaaz/catalog/banner/novembro/colecao-celebration-02.jpg",
    "https://img.irroba.com.br/fit-in/1440x1440/filters:format(webp):quality(80)/rebecaaz/catalog/banner/setembro/01.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <S.Container>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </S.Container>
  );
}

export default Carousel;
