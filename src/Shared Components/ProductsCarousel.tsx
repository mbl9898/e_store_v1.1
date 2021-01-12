import React from // , { useState, useContext }
"react";
// import { Link } from "react-router-dom";
// import ItemsCarousel from "react-items-carousel";
// import { DBProductsContext } from "../contexts";
// import { DBProducts } from "../interfaces";

const ProductsCarousel: React.FC = () => {
  // const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  // const DBProducts: DBProducts[] = useContext<[] | DBProducts[]>(
  // DBProductsContext
  // );
  // const chevronWidth = 40;
  // const chevron = (
  //   <button style={{ backgroundColor: "transparent" }}>
  //     <svg
  //       width="40px"
  //       height="40px"
  //       viewBox="0 0 512 512"
  //       className="arrowCircleIcon"
  //     >
  //       <path
  //         fill="#0046be"
  //         d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm189.1 129.9L123.7 264.5c-4.7-4.7-4.7-12.3 0-17l121.4-121.4c4.7-4.7 12.3-4.7 17 0l19.6 19.6c4.8 4.8 4.7 12.5-.2 17.2L211.2 230H372c6.6 0 12 5.4 12 12v28c0 6.6-5.4 12-12 12H211.2l70.3 67.1c4.9 4.7 5 12.4.2 17.2l-19.6 19.6c-4.7 4.7-12.3 4.7-17 0z"
  //       ></path>
  //     </svg>
  //   </button>
  // );

  return (
    <h1>PRODUCT CAROUSEL</h1>
    //   <div style={{ padding: `0 ${chevronWidth}px` }}>
    //     <ItemsCarousel
    //       requestToChangeActive={setActiveItemIndex}
    //       activeItemIndex={activeItemIndex}
    //       // numberOfCards={DBProducts.length > 5 ? 5 : +DBProducts.length}
    //       numberOfCards={4}
    //       gutter={2}
    //       leftChevron={chevron}
    //       rightChevron={chevron}
    //       outsideChevron
    //       chevronWidth={chevronWidth}
    //       infiniteLoop={true}
    //       slidesToScroll={2}
    //       showSlither={true}
    //       activePosition={"center"}
    //     >
    //       {DBProducts.map(
    //         ({
    //           _id,
    //           productName,
    //           productImageURL,
    //           price,
    //           discountPrice,
    //           discountPercentage,
    //         }: DBProducts) => {
    //           return (
    //             <Link to={`/products`} key={_id}>
    //               <div className="productCarouselCard">
    //                 <div className="cardImgHolder">
    //                   <img src={productImageURL} alt={productName} />
    //                 </div>
    //                 <h6>{productName}</h6>
    //                 <div className="productDiscountedPriceDiv">
    //                   {discountPrice ? (
    //                     <p className="productDiscountedPrice">
    //                       Rs. {discountPrice}
    //                     </p>
    //                   ) : (
    //                     ""
    //                   )}
    //                   {discountPercentage && discountPrice ? (
    //                     <span>
    //                       {" "}
    //                       -
    //                       {Math.ceil(
    //                         discountPercentage.toString().replace("%", "")
    //                       )}
    //                       %
    //                     </span>
    //                   ) : (
    //                     ""
    //                   )}
    //                 </div>
    //                 <div className="productActualPriceDiv">
    //                   <p
    //                     className={
    //                       discountPrice ? "productActualPrice" : "actualPriceOnly"
    //                     }
    //                   >
    //                     {discountPrice ? "Was  " : ""} Rs.{price}
    //                   </p>
    //                 </div>
    //                 {/* {products.reviewCount ? (
    //                           <p className="productReviews">
    //                             Reviews(
    //                             <a href="/">{products.reviewCount}</a>)
    //                           </p>
    //                         ) : (
    //                           ""
    //                         )} */}
    //               </div>
    //             </Link>
    //           );
    //         }
    //       )}
    //     </ItemsCarousel>
    //   </div>
  );
};

export default ProductsCarousel;
