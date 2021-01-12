import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer1">
        <div className="brandName">
          <h1>E-Store</h1>
          <h4>Customer satisfaction, Our Priority</h4>
        </div>
        <div className="newsLetter">
          <input
            type="email"
            placeholder="Enter email to get latest deal & more."
          />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
