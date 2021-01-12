import React, {
  // useState,
  useContext,
} from "react";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import { DBProductsContext } from "../contexts";
import { DBProducts } from "../interfaces";
import "@brainhubeu/react-carousel/lib/style.css";

const ProductsCarousel1: React.FC = () => {
  const DBProducts: DBProducts[] = useContext(DBProductsContext);

  return (
    <>
      <Carousel
        plugins={[
          "arrows",
          "infinite",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 4,
            },
          },
        ]}
      >
        {DBProducts.map(({ _id, productImageURL }) => {
          return <img key={_id} src={productImageURL} alt="Product" />;
        })}
      </Carousel>
    </>
  );
};

export default ProductsCarousel1;
