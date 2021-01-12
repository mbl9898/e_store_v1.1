import React from "react";
import { DBProducts, DBCategories } from "../interfaces";

interface Props {
  getBrands: () => void;
  getCategories: () => void;
  setIsOpen: (any: string | boolean) => void;
  isOpen: boolean;
  handleChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  // (
  //   event?: React.ChangeEvent<HTMLSelectElement>,
  //   name?: string,
  //   value?: any
  // ) => void | undefined;
  DBBrands: [any: any];
  DBCategories: DBCategories[];
  productData: DBProducts;
  isDiscountPriceValid: boolean;
  setPercentage: () => void;
  setDiscountPrice: () => void;
  addProduct: () => void;
}

export const AddProductModal: React.FC<Props> = ({
  getBrands,
  getCategories,
  setIsOpen,
  isOpen,
  handleChange,
  DBBrands,
  DBCategories,
  productData,
  isDiscountPriceValid,
  setPercentage,
  setDiscountPrice,
  addProduct,
}) => {
  // const onAChange = (e: any) => {
  //   const { name, value } = e.target;
  //   handleChange(name, value);
  // };
  return (
    <>
      {/* Button trigger modal  */}
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        onClick={() => {
          getBrands();
          getCategories();
          setIsOpen("addProduct");
          console.log(isOpen);
        }}
      >
        Add
      </button>
      {/* Modal  */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Product
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body ">
              <label>Product Name</label>
              <input
                type="text"
                name="productName"
                // placeholder="Product name"
                autoComplete="off"
                onChange={handleChange}
                required
              />
              <label>Brand Name</label>
              <select name="brandId" onChange={handleChange}>
                <option value="" disabled selected>
                  Select Brand Name
                </option>
                {DBBrands.map((brand) => {
                  return (
                    <option value={brand._id} key={brand._id}>
                      {brand.brandName}
                    </option>
                  );
                })}
              </select>
              <label>Product Image Link</label>
              <input
                type="text"
                name="productImageLink"
                // placeholder="Product Image Link"
                autoComplete="off"
                onChange={handleChange}
              />
              <label>Price</label>
              <input
                type="text"
                name="price"
                placeholder="Price"
                autoComplete="off"
                onChange={handleChange}
              />
              <label>Discount Price</label>
              <div className="inputWithBtn">
                <input
                  className={
                    !productData.discountPrice
                      ? ""
                      : isDiscountPriceValid
                      ? "valid"
                      : "invalid"
                  }
                  type="text"
                  name="discountPrice"
                  // placeholder="Discount Price"
                  autoComplete="off"
                  value={productData.discountPrice}
                  onChange={handleChange}
                />
                <button className="btn btn-primary" onClick={setPercentage}>
                  Calc%
                </button>
              </div>
              <label>Discount Percentage</label>
              <div className="inputWithBtn">
                <input
                  type="text"
                  name="discountPercentage"
                  value={productData.discountPercentage}
                  // placeholder="Discount Percentage"
                  autoComplete="off"
                  onChange={handleChange}
                />
                <button className="btn btn-primary" onClick={setDiscountPrice}>
                  calcDiscPrice
                </button>
              </div>
              <label>SKU</label>
              <input
                type="text"
                name="sku"
                // placeholder="SKU"
                autoComplete="off"
                onChange={handleChange}
              />
              <label>Stock Quantity</label>
              <input
                type="text"
                name="quantity"
                // placeholder="Stock Quantity"
                onChange={handleChange}
              />
              <label>Product Category</label>
              <select name="categoryId" onChange={handleChange}>
                <option value="" disabled selected>
                  Select Product Category
                </option>
                {DBCategories.map((category) => {
                  return (
                    <option value={category._id} key={category._id}>
                      {category.categoryName}
                    </option>
                  );
                })}
              </select>
              <label>Product Description</label>
              <textarea
                name="productDescription"
                cols={30}
                rows={10}
                onChange={handleChange}
              ></textarea>
              <button
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={addProduct}
              >
                Add Product
              </button>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
