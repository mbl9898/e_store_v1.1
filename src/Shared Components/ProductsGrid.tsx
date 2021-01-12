import React from "react";
import { Link } from "react-router-dom";
import { DBProducts } from "../interfaces";

interface Props {
  gridCategoryData?: any | { categoryHeading: string; CategoryLink: string };
  DBProduct: DBProducts[];
}

const ViewedRelatedProducts: React.FC<Props> = ({
  gridCategoryData,
  DBProduct,
}) => {
  let { categoryHeading, categoryLink } = gridCategoryData
    ? gridCategoryData
    : "";

  return (
    <div className="productsGridWrapper">
      <div className="productsGrid">
        <h6>{categoryHeading ? categoryHeading : ""}</h6>
        <div className="productsGridInner">
          {DBProduct.map(
            ({
              _id,
              productName,
              productImageURL,
              price,
              discountPrice,
              discountPercentage,
            }) => {
              return (
                <Link to={`/products`} key={_id}>
                  <div className="productCard">
                    <div className="cardImgHolder">
                      <img src={productImageURL} alt={productName} />
                    </div>
                    <h6>{productName}</h6>
                    <div className="productDiscountedPriceDiv">
                      {discountPrice ? (
                        <p className="productDiscountedPrice">
                          Rs. {discountPrice}
                        </p>
                      ) : (
                        ""
                      )}
                      {discountPercentage && discountPrice ? (
                        <span>
                          {" "}
                          -
                          {Math.ceil(
                            discountPercentage.toString().replace("%", "")
                          )}
                          %
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <p
                      className={
                        discountPrice ? "productActualPrice" : "actualPriceOnly"
                      }
                    >
                      {discountPrice ? "Was " : ""} Rs. {price}
                    </p>
                    {/* {products.reviewCount ? (
                      <p className="productReviews">
                        Reviews(
                        <a href="/">{products.reviewCount}</a>)
                      </p>
                    ) : (
                      ""
                    )} */}
                  </div>
                </Link>
              );
            }
          )}
        </div>
      </div>
      <button className="productsGridViewMoreBtn">
        <a href={categoryLink ? categoryLink : "/"}>View more</a>
      </button>
    </div>
  );
};

export default ViewedRelatedProducts;
