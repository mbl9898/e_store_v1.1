import React from "react";

interface Props {
  isOpen: string;
  setIsOpen: (arg0: string) => void;
  handleChange: (e: any) => void;
  updateStock: () => void;
}

const UpdateStockModal: React.FC<Props> = ({
  isOpen,
  setIsOpen,
  handleChange,
  updateStock,
}) => {
  return (
    <>
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
    </>
  );
};

export default UpdateStockModal;
