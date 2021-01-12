import React from "react";

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

const Product: React.FC<Props> = ({
  isProductsBtnClicked,
  setIsProductsBtnClicked,
  isBackDropDisplay,
  setIsBackDropDisplay,
  setIsCategoriesMenuMainOpen,
  setIsBodyOverflowYDisplay,
}) => {
  return (
    <div className="productComponent">
      <div
        className="backDrop"
        onClick={() => {
          setIsProductsBtnClicked(isProductsBtnClicked ? false : false);
          setIsCategoriesMenuMainOpen(false);
          setIsBackDropDisplay(!isBackDropDisplay);
          setIsBodyOverflowYDisplay("auto");
        }}
        style={{ display: isBackDropDisplay ? "initial" : "none" }}
      ></div>
      <h1>Product Component</h1>
    </div>
  );
};

export default Product;
