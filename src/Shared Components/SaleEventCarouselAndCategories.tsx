import React, { useContext } from "react";
import HomeCarousel from "./HomeCarousel";
import { DBCategoriesContext } from "../contexts";
import { Link } from "react-router-dom";
import { DBCategories } from "../interfaces";

const SaleEventCarouselAndCategories: React.FC = () => {
  const DBCategories: DBCategories[] = useContext(DBCategoriesContext);

  return (
    <>
      <div className="saleEventCarouselAndCategories">
        <HomeCarousel />
        <div className="categoriesMain">
          <h6>Shop these and more by categories</h6>
          <div className="categoriesInner">
            {DBCategories.map(
              ({ _id, categoryName, categoryImageURL }: DBCategories) => {
                return (
                  <Link to={`/sort/categories/${categoryName}`} key={_id}>
                    <div className="categoryCard">
                      <div className="cardImgHolder">
                        <img src={categoryImageURL} alt={categoryName} />
                      </div>
                      <p>{categoryName}</p>
                    </div>
                  </Link>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SaleEventCarouselAndCategories;
