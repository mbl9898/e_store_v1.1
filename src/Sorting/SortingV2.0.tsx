import React, { useContext, useEffect, useState } from "react";
import ProductsGrid from "../Shared Components/ProductsGrid";
// import { viewedRelatedProductsData } from "../data";
import { DBProductsContext, DBCategoriesContext } from "../contexts";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { DBProducts, DBCategories } from "../interfaces";

interface Props {
  isProductsBtnClicked: undefined | boolean;
  setIsProductsBtnClicked: React.Dispatch<
    React.SetStateAction<undefined | boolean>
  >;
  isBackDropDisplay: boolean;
  setIsBackDropDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCategoriesMenuMainOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsBodyOverflowYDisplay: React.Dispatch<React.SetStateAction<string>>;
}

const Sorting: React.FC<Props> = ({
  isProductsBtnClicked,
  setIsProductsBtnClicked,
  isBackDropDisplay,
  setIsBackDropDisplay,
  setIsCategoriesMenuMainOpen,
  setIsBodyOverflowYDisplay,
}) => {
  const [currentCategory, setCurrentCategory] = useState<{} | any>({});
  // let brandIds: { brandIdsArr: [] } = {
  //   brandIdsArr: [],
  // };
  // const [brandsForSort, setBrandsForSort] = useState<null>(null);
  const DBCategories = useContext<[] | DBCategories[]>(DBCategoriesContext);
  const DBProducts: DBProducts[] = useContext<[] | DBProducts[]>(
    DBProductsContext
  );
  const { categoryName } = useParams<{ categoryName: string }>();
  console.log(categoryName);
  const getCurrentCategory: () => void = async () => {
    try {
      const res = await Axios.get(
        `http://localhost:3001/api/categories/${categoryName}`
      );
      setCurrentCategory(res.data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const filterCurrentCategory: () => void = () => {
    try {
      console.log(categoryName, DBCategories);
      const res = DBCategories.filter((category) => {
        return category.categoryName === categoryName;
      });
      setCurrentCategory(res[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(
    () => {
      if (DBCategories.length === 0) {
        getCurrentCategory();
      } else filterCurrentCategory();
    }
    // , []
  );

  return (
    <div className="sorting">
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
      <div className="categoryPath">
        <ul>
          <li>E-store</li>
          <svg
            width="15px"
            height="15px"
            viewBox="0 0 192 512"
            className="caretRightSvg"
          >
            <path
              fill="#0046be"
              d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
            ></path>
          </svg>
          <li>All Categories</li>
          <svg
            width="15px"
            height="15px"
            viewBox="0 0 192 512"
            className="caretRightSvg"
          >
            <path
              fill="#0046be"
              d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
            ></path>
          </svg>
          <li>{currentCategory ? currentCategory.categoryName : ""}</li>
        </ul>
        <h3>{currentCategory ? currentCategory.categoryName : ""}</h3>
      </div>
      <div className="sortingPane">
        <div className="filtersPane">
          <div className="category">
            <h5>Category</h5>
            <h6>{currentCategory ? currentCategory.categoryName : ""}</h6>
            <a href="/">
              <label>
                {" "}
                {currentCategory ? currentCategory.subCategoryName : ""}{" "}
              </label>
            </a>
            <a href="/">
              <label>flat screen tvs</label>
            </a>
            <a href="/">
              <label>flat screen tvs</label>
            </a>
            <a href="/">
              <label>flat screen tvs</label>
            </a>
            <a href="/">
              <label>flat screen tvs</label>
            </a>
            <a href="/">
              <label>flat screen tvs</label>
            </a>
            <a href="/">
              <label>flat screen tvs</label>
            </a>
          </div>
          <div className="brand">
            <h5>Brand</h5>
            <div>
              <input type="checkbox" />
              <label>Samsung</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Samsung</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Samsung</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Samsung</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Samsung</label>
            </div>
          </div>
          <div className="price">
            <h5>Price</h5>
            <div>
              <input type="checkbox" />
              <label>10000-15000</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>10000-15000</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>10000-15000</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>10000-15000</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>10000-15000</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>10000-15000</label>
            </div>
          </div>
        </div>
        <div className="productsDisplay">
          <div className="saleBanner">
            <div className="saleBannerInner">
              <div className="saleBannerContent">
                <div className="saleBannerContentInner">
                  <div className="bannerHeading">
                    <h1>Our Coolest Deals</h1>
                    <h1 className="saleH1">Sale.</h1>
                  </div>
                  <h3>Ends Sunday</h3>
                  <h2>Looking for Black Friday Deals available now</h2>
                </div>
              </div>
              <div className="bannerShopNow">
                <p>Limited quantities.</p>
                <button>Shop Now</button>
              </div>
            </div>
          </div>
          <ProductsGrid
            // gridCategoryData={viewedRelatedProductsData}
            DBProduct={DBProducts}
          />
        </div>
      </div>
    </div>
  );
};

export default Sorting;

// let dbProducts = DBProducts;
// let dbCategories = DBCategories;
// // console.log(DBProducts);

// const reqBrands = () => {
//   Axios.post(`http://localhost:3001/api/brands/ids`, brandIds);
//   // setBrandsForSort(res.data);
//   // console.log(res.data);
// };

// const getBrands = () => {
//   try {
//     const brandsIds = [];
//     dbProducts.forEach((product) => {
//       brandsIds.push(product.brandId);
//     });
//     brandIds = {
//       brandIdsArr: [...brandsIds],
//     };
//     reqBrands();
//   } catch (err) {
//     console.log(err);
//   }
//   // console.log(brandsIds);
// };

// const getProducts = async () => {
//   const res = await Axios.get("http://localhost:3001/api/products");
//   dbProducts = res.data;
// };

// const getCategories = async () => {
//   const res = await Axios.get("http://localhost:3001/api/categories");
//   dbCategories = res.data;
//   console.log(res.data, dbCategories, "HJ");
//   return res.data;
// };

// useEffect(() => {
//   setTimeout(() => {
//     console.log(dbCategories, "erfuiref");
//     if (!dbCategories.length) {
//       const fetchCategories = async () => {
//         await getCategories();

//         console.log(dbCategories, "jhgjhg");
//         getCategory();
//       };
//       fetchCategories();
//     } else {
//       getCategory();
//     }

//     if (!dbProducts.length) {
//       const fetchProducts = async () => {
//         await getProducts();

//         console.log(dbProducts, "dbProducts");
//         getBrands();
//       };
//       fetchProducts();
//     } else {
//       getBrands();
//     }
//   }, 2000);
// }, []);
