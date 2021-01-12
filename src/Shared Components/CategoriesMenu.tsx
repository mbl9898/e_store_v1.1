import React, { useEffect, useState } from "react";
import axios from "axios";
// import { categoriesMenuMainData } from "../data";
import { appliancesCategoriesMenu } from "../data";
import { DBCategories } from "../interfaces";

interface Props {
  isProductsBtnClicked: boolean | undefined;
  isCategoriesMenuMainOpen: boolean;
  isCategoriesLevel1Open: boolean;
  setIsCategoriesLevel1Open: (any: boolean) => void;
  isCategoriesLevel2Open: boolean;
  setIsCategoriesLevel2Open: (any: boolean) => void;
}

const CategoriesMenu: React.FC<Props> = ({
  isProductsBtnClicked,
  isCategoriesMenuMainOpen,
  isCategoriesLevel1Open,
  setIsCategoriesLevel1Open,
  isCategoriesLevel2Open,
  setIsCategoriesLevel2Open,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [DBCategories, setDBCategories] = useState<DBCategories[]>([]);
  useEffect(() => {
    try {
      axios.get("http://localhost:3001/api/categories").then((res) => {
        setDBCategories(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div
      className="categoriesMenuMain"
      style={{
        display: isCategoriesMenuMainOpen ? "flex" : "none",
        right: isProductsBtnClicked ? "0px" : "unset",
        left: isProductsBtnClicked ? "unset" : "0px",
      }}
    >
      <div className="navLinks">
        <a href="/">Brands</a>
        <a className="secondLink" href="/">
          Deals
        </a>
      </div>
      <div
        className="categoriesLevel1"
        style={{ display: isCategoriesLevel1Open ? "initial" : "none" }}
      >
        <h3>All Categories</h3>
        <ul>
          {DBCategories.map(({ _id, categoryName }) => {
            return (
              <li
                className="categoryLi"
                key={_id}
                onClick={() => {
                  setSelectedCategory(categoryName);
                  setIsCategoriesLevel1Open(false);
                  setIsCategoriesLevel2Open(true);
                  // console.log(DBCategories);
                }}
              >
                {categoryName}
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 32 32"
                    fill="#0046be"
                  >
                    <path d="M11.385 29.319a.979.979 0 01-.78-1.566l8.854-11.75-8.854-11.748a.979.979 0 011.562-1.177l9.296 12.337a.98.98 0 010 1.177L12.167 28.93a.977.977 0 01-.782.389"></path>
                  </svg>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className="categoriesLevel2"
        style={{ display: isCategoriesLevel2Open ? "initial" : "none" }}
      >
        <div className="categoriesLevel2Header">
          <button
            onClick={() => {
              setIsCategoriesLevel2Open(false);
              setIsCategoriesLevel1Open(true);
            }}
          >
            <svg width="16" height="16" viewBox="0 0 32 32" fill="#fff">
              <path d="M11.385 29.319a.979.979 0 01-.78-1.566l8.854-11.75-8.854-11.748a.979.979 0 011.562-1.177l9.296 12.337a.98.98 0 010 1.177L12.167 28.93a.977.977 0 01-.782.389"></path>
            </svg>
            Back
          </button>
          <h3>{selectedCategory}</h3>
        </div>
        <ul>
          {appliancesCategoriesMenu.map((category, index) => {
            return (
              <li className="categoryLi" key={index}>
                {category}
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 32 32"
                    fill="#0046be"
                  >
                    <path d="M11.385 29.319a.979.979 0 01-.78-1.566l8.854-11.75-8.854-11.748a.979.979 0 011.562-1.177l9.296 12.337a.98.98 0 010 1.177L12.167 28.93a.977.977 0 01-.782.389"></path>
                  </svg>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesMenu;
