import React, { useState } from "react";

import AddCategoryModal from "./AddCategoryModal";
import AddProductModal from "./AddProductModal";
import UpdateStockModal from "./UpdateStockModal";
import axios from "axios";
import { DBProducts, DBCategories } from "../interfaces";

const Admin: React.FC = () => {
  const [DBBrands, setDBBrands] = useState<[]>([]);
  const [DBCategories, setDBCategories] = useState<DBCategories[]>([]);
  // const [subCategories, setSubCategories] = useState<[]>([]);
  const [isOpen, setIsOpen] = useState<string>("");
  const [isDiscountPriceValid, setIsDiscountPriceValid] = useState<
    null | boolean
  >(null);

  const [productData, setProductData] = useState<DBProducts>({
    productName: "",
    brandId: "",
    productImageURL: "",
    price: NaN,
    discountPrice: NaN,
    discountPercentage: "",
    sku: "",
    quantity: NaN,
    categoryId: "",
    productDescription: "",
    productReviews: "",
  });

  const [categoryData, setCategoryData] = useState<{
    categoryName: string;
    categoryImageURL: string;
    subCategories: never[];
  }>({
    categoryName: "",
    categoryImageURL: "",
    subCategories: [],
  });

  const [updateStockData, setUpdateStockData] = useState<{
    productName: string;
    stockQuantity: string;
  }>({
    productName: "",
    stockQuantity: "",
  });

  const [brandData, setBrandData] = useState<{
    brandName: string;
    brandCategory: string;
  }>({
    brandName: "",
    brandCategory: "",
  });

  const setPercentage: () => void = () => {
    if (+productData.price! && +productData.discountPrice!) {
      setProductData((prevData) => {
        return {
          ...prevData,
          discountPercentage: `${
            ((productData.price! - productData.discountPrice!) /
              productData.price!) *
            100
          }%`,
        };
      });
    }
  };

  const setDiscountPrice: () => void = () => {
    let discountPercentage = productData.discountPercentage
      .toString()
      .replace("%", "");
    const calculateDiscountPrice = `${
      productData.price! - productData.price! * (+discountPercentage / 100)
    }`;

    if (
      +calculateDiscountPrice < productData.price! &&
      +calculateDiscountPrice > 0
    ) {
      setIsDiscountPriceValid(true);
    }

    if (
      +calculateDiscountPrice > productData.price! ||
      +calculateDiscountPrice < 0
    ) {
      return;
    }
    if (+productData.price! && productData.discountPercentage) {
      setProductData((prevData: any) => {
        return {
          ...prevData,
          discountPrice: calculateDiscountPrice,
        };
      });
    }
  };

  const handleChange: (e: any) => void = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (isOpen === "addProduct") {
      if (name === "discountPrice") {
        console.log(productData.price, value);
        if (+productData.price! > +value && +value > 0) {
          console.log("discount price valid");
          setIsDiscountPriceValid(true);
          setProductData((prevData) => ({ ...prevData, [name]: value }));
          console.log(productData);
        }
        if (+productData.price! < +value || +value < 0) {
          console.log("discount price invalid");
          setIsDiscountPriceValid(false);
          return;
        }
      }
      setProductData((prevData) => ({ ...prevData, [name]: value }));
      console.log(productData);
    }
    if (isOpen === "addCategory") {
      setCategoryData((prevData) => ({ ...prevData, [name]: value }));
      console.log(categoryData);
    }
    if (isOpen === "updateStock") {
      setUpdateStockData((prevData) => ({ ...prevData, [name]: value }));
      console.log(updateStockData);
    }
    if (isOpen === "addBrand") {
      setBrandData((prevData) => ({ ...prevData, [name]: value }));
      console.log(brandData);
    }
  };

  const addProduct: () => Promise<void> = async () => {
    try {
      await axios.post("http://localhost:3001/api/products", productData);
    } catch (err) {
      console.log(err);
    }
  };

  const addCategories: () => Promise<void> = async () => {
    try {
      await axios.post("http://localhost:3001/api/categories", categoryData);
    } catch (err) {
      console.log(err);
    }
  };

  const updateStock: () => Promise<void> = async () => {
    try {
      await axios.post("http://localhost:3001/api/stocks", updateStockData);
    } catch (err) {
      console.log(err);
    }
  };

  const addBrand: () => Promise<void> = async () => {
    try {
      await axios.post("http://localhost:3001/api/brands", brandData);
    } catch (err) {
      console.log(err);
    }
  };

  const getBrands: () => Promise<void> = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/brands");
      setDBBrands(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getCategories: () => Promise<void> = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/categories");
      setDBCategories(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="admin">
      <div className="adminInner">
        <AddProductModal
          getBrands={getBrands}
          getCategories={getCategories}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleChange={handleChange}
          DBBrands={DBBrands}
          productData={productData}
          isDiscountPriceValid={isDiscountPriceValid}
          setPercentage={setPercentage}
          setDiscountPrice={setDiscountPrice}
          DBCategories={DBCategories}
          addProduct={addProduct}
        />
        <AddCategoryModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleChange={handleChange}
          addCategories={addCategories}
        />
        <UpdateStockModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleChange={handleChange}
          updateStock={updateStock}
        />
        <div>
          {/* <div className="addProducts card1">
          <h3>Add Product</h3>
          {/* Button trigger modal  */}
          {/* <button
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
          </button> */}
          {/* Modal  */}
          {/* <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
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
                  <select
                    name="brandId"
                    onChange={handleChange}
                    // defaultValue={"Select Brand Name"}
                  >
                    <option disabled selected>
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
                  <label>Product Image URL</label>
                  <input
                    type="text"
                    name="productImageURL"
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
                    <button
                      className="btn btn-primary"
                      onClick={setDiscountPrice}
                    >
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
                    <option disabled selected>
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
                    cols="30"
                    rows="10"
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
        </div> */}
        </div>
        <div>
          {/* <div className="addCategory card1">
            <h3>Add Category</h3>
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal1"
              onClick={() => {
                setIsOpen("addCategory");
                console.log(isOpen);
              }}
            >
              Add
            </button> */}

          {/* Modal  */}
          {/* <div
              className="modal fade"
              id="exampleModal1"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Add Category
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
                    <input
                      // uuid={uuid()}
                      type="text"
                      name="categoryName"
                      onChange={handleChange}
                      placeholder={"Category Name"}
                      // errorMessage={"Category Name is required"}
                    />
                    <input
                      // uuid={uuid()}
                      type="url"
                      name="categoryImageURL"
                      placeholder="Category Image URL"
                      onChange={handleChange}
                      // errorMessage={"Category Image URL is required"}
                    /> */}
          {/* <input
                    type="text"
                    name="subCategories"
                    placeholder="Sub-Categories Name"
                    onChange={handleChange}
                  /> */}
          {/* <div className="subCategoriesMain">
                      <span>
                        Some Data <button>x</button>
                      </span>
                      <span>Some Data</span>
                      <input
                        type="text"
                        name="subCategories"
                        placeholder="Sub-Categories Name"
                        onKeyPress={(e) => {
                          // console.log(e.key);
                          if (e.key === "Enter") {
                            console.log("Enter Pressed");
                          }
                        }}
                      />
                    </div>
                    <button
                      className="btn btn-primary"
                      data-dismiss="modal"
                      onClick={addCategories}
                    >
                      Add Category
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
          </div> */}
        </div>
        <div>
          <div className="updateStock card1">
            <h3>Update Stock</h3>
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal2"
              onClick={() => {
                setIsOpen("updateStock");
                console.log(isOpen);
              }}
            >
              Update
            </button>

            {/* Modal  */}
            <div
              className="modal fade"
              id="exampleModal2"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Update Stock
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
                    <input
                      type="text"
                      name="productName"
                      placeholder="Product Name"
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="stockQuantity"
                      placeholder="Stock Quantity"
                      onChange={handleChange}
                    />
                    <button
                      className="btn btn-primary"
                      onClick={updateStock}
                      data-dismiss="modal"
                    >
                      Update Stock
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
          </div>
        </div>
        <div className="addBrand card1">
          <h3>Add Brand</h3>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal3"
            onClick={() => {
              setIsOpen("addBrand");
              console.log(isOpen);
            }}
          >
            Add
          </button>

          {/* Modal  */}
          <div
            className="modal fade"
            id="exampleModal3"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Add Brand
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
                  <input
                    type="text"
                    name="brandName"
                    placeholder="Brand Name"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="brandCategory"
                    placeholder="Brand Category"
                    onChange={handleChange}
                  />
                  <button
                    className="btn btn-primary"
                    data-dismiss="modal"
                    onClick={addBrand}
                  >
                    Add Brand
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
        </div>
      </div>
    </div>
  );
};

export default Admin;
