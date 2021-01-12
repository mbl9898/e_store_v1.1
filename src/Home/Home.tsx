import React, { useContext } from "react";
import WelcomeEventPane from "../Shared Components/WelcomeEventPane";
import SaleEventCarouselAndCategories from "../Shared Components/SaleEventCarouselAndCategories";
import ProductsGrid from "../Shared Components/ProductsGrid";
import ProductsCarousel from "../Shared Components/ProductsCarousel";
import ProductsCarousel1 from "../Shared Components/ProductsCarousel1";
import { DBProducts } from "../interfaces";
import { DBProductsContext } from "../contexts";
import {
  viewedRelatedProductsData,
  topSellingProductsData,
  featuredProductsData,
} from "../data";

interface Props {
  isLoading: boolean;
  isProductsBtnClicked: undefined | boolean;
  setIsProductsBtnClicked: React.Dispatch<
    React.SetStateAction<undefined | boolean>
  >;
  isBackDropDisplay: boolean;
  setIsBackDropDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCategoriesMenuMainOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsBodyOverflowYDisplay: React.Dispatch<React.SetStateAction<string>>;
}

const Home: React.FC<Props> = ({
  isLoading,
  isProductsBtnClicked,
  setIsProductsBtnClicked,
  isBackDropDisplay,
  setIsBackDropDisplay,
  setIsCategoriesMenuMainOpen,
  setIsBodyOverflowYDisplay,
}) => {
  const DBProducts = useContext<[] | DBProducts[]>(DBProductsContext);

  return (
    <div className="home">
      {isLoading ? (
        <div>
          <h1>Loading</h1>
        </div>
      ) : (
        <>
          <div
            className="backDrop"
            onClick={() => {
              setIsProductsBtnClicked(isProductsBtnClicked ? false : undefined);
              setIsCategoriesMenuMainOpen(false);
              setIsBackDropDisplay(!isBackDropDisplay);
              setIsBodyOverflowYDisplay("auto");
            }}
            style={{ display: isBackDropDisplay ? "initial" : "none" }}
          ></div>

          <WelcomeEventPane />
          <SaleEventCarouselAndCategories />
          <ProductsGrid
            gridCategoryData={viewedRelatedProductsData}
            DBProduct={DBProducts}
          />
          <ProductsGrid
            gridCategoryData={topSellingProductsData}
            DBProduct={DBProducts}
          />
          <ProductsGrid
            gridCategoryData={featuredProductsData}
            DBProduct={DBProducts}
          />
          <ProductsCarousel />
          <ProductsCarousel1 />
        </>
      )}
    </div>
  );
};

export default Home;
