import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DBProductsContext, DBCategoriesContext } from "./contexts";
import DotLoader from "react-spinners/DotLoader";

// store Context in Local or browser storage temporarily
import axios from "axios";
// interfaces
import { DBCategories, DBProducts } from "./interfaces";
// Pages

import Home from "./Home/Home";

// import Sorting from "./Sorting/Sorting";

import SortingVTwo from "./Sorting/SortingV2.0";
import Admin from "./Admin/Admin";
import Product from "./Product/Product";

// Components

import Navbar from "./Shared Components/Navbar";
import Footer from "./Shared Components/Footer";

const App: React.FC = () => {
  const [isAppLoading, setIsAppLoading] = useState<boolean>(true);
  const [isHomePageLoading, setIsHomePageLoading] = useState<boolean>(true);
  const [isBackDropDisplay, setIsBackDropDisplay] = useState<boolean>(false);
  const [
    isCategoriesMenuMainOpen,
    setIsCategoriesMenuMainOpen,
  ] = useState<boolean>(false);
  const [isBodyOverflowYDisplay, setIsBodyOverflowYDisplay] = useState<string>(
    "auto"
  );
  const [isProductsBtnClicked, setIsProductsBtnClicked] = useState<
    boolean | undefined
  >(false);

  const [DBProducts, setDBProducts] = useState<[] | DBProducts[]>([]);
  const [DBCategories, setDBCategories] = useState<[] | DBCategories[]>([]);

  const getProducts: () => void = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/products");
      setDBProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getCategories: () => void = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/categories");
      setDBCategories(res.data);
      // console.log(res.data);
      setIsHomePageLoading(false);
      setTimeout(() => {
        setIsAppLoading(false);
      }, 2000);
    } catch (err) {
      // console.log(err);
    }
  };
  // console.log("DBCategories", DBCategories);
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      {isAppLoading ? (
        <div className="AppLoading">
          <img src="/images/e_logo.jpg" alt="AppLogo" />
          <h1>E-Store</h1>
          <DotLoader color={"#ffe000"} />
        </div>
      ) : (
        <DBProductsContext.Provider value={DBProducts}>
          <DBCategoriesContext.Provider value={DBCategories}>
            <Router>
              <Navbar
                isProductsBtnClicked={isProductsBtnClicked}
                setIsProductsBtnClicked={setIsProductsBtnClicked}
                isBackDropDisplay={isBackDropDisplay}
                setIsBackDropDisplay={setIsBackDropDisplay}
                isCategoriesMenuMainOpen={isCategoriesMenuMainOpen}
                setIsCategoriesMenuMainOpen={setIsCategoriesMenuMainOpen}
                isBodyOverflowYDisplay={isBodyOverflowYDisplay}
                setIsBodyOverflowYDisplay={setIsBodyOverflowYDisplay}
              />
              <Switch>
                <Route exact path="/">
                  <Home
                    isLoading={isHomePageLoading}
                    isProductsBtnClicked={isProductsBtnClicked}
                    setIsProductsBtnClicked={setIsProductsBtnClicked}
                    isBackDropDisplay={isBackDropDisplay}
                    setIsBackDropDisplay={setIsBackDropDisplay}
                    setIsCategoriesMenuMainOpen={setIsCategoriesMenuMainOpen}
                    setIsBodyOverflowYDisplay={setIsBodyOverflowYDisplay}
                  />
                </Route>
                <Route path="/products">
                  <Product
                    isProductsBtnClicked={isProductsBtnClicked}
                    setIsProductsBtnClicked={setIsProductsBtnClicked}
                    isBackDropDisplay={isBackDropDisplay}
                    setIsBackDropDisplay={setIsBackDropDisplay}
                    setIsCategoriesMenuMainOpen={setIsCategoriesMenuMainOpen}
                    setIsBodyOverflowYDisplay={setIsBodyOverflowYDisplay}
                  />
                </Route>
                <Route path="/admin">
                  <Admin />
                </Route>
                <Route
                  path="/sort/categories/:categoryName"
                  children={
                    // <Sorting
                    //   isProductsBtnClicked={isProductsBtnClicked}
                    //   setIsProductsBtnClicked={setIsProductsBtnClicked}
                    //   isBackDropDisplay={isBackDropDisplay}
                    //   setIsBackDropDisplay={setIsBackDropDisplay}
                    //   setIsCategoriesMenuMainOpen={setIsCategoriesMenuMainOpen}
                    //   setIsBodyOverflowYDisplay={setIsBodyOverflowYDisplay}
                    // />
                    <SortingVTwo
                      isProductsBtnClicked={isProductsBtnClicked}
                      setIsProductsBtnClicked={setIsProductsBtnClicked}
                      isBackDropDisplay={isBackDropDisplay}
                      setIsBackDropDisplay={setIsBackDropDisplay}
                      setIsCategoriesMenuMainOpen={setIsCategoriesMenuMainOpen}
                      setIsBodyOverflowYDisplay={setIsBodyOverflowYDisplay}
                    />
                  }
                ></Route>
              </Switch>
              <Footer />
            </Router>
          </DBCategoriesContext.Provider>
        </DBProductsContext.Provider>
      )}
    </>
  );
};

export default App;
