import React from "react";

interface Props {
  isOpen: string;
  setIsOpen: (arg0: string) => void;
  handleChange: (e: any) => void;
  addCategories: () => void;
}

const AddCategoryModal: React.FC<Props> = ({
  isOpen,
  setIsOpen,
  handleChange,
  addCategories,
}) => {
  return (
    <>
      <div className="addCategory card1">
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
        </button>

        {/* Modal  */}
        <div
          className="modal fade"
          id="exampleModal1"
          tabIndex={-1}
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
                />
                {/* <input
                    type="text"
                    name="subCategories"
                    placeholder="Sub-Categories Name"
                    onChange={handleChange}
                  /> */}
                <div className="subCategoriesMain">
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
      </div>
    </>
  );
};

export default AddCategoryModal;
