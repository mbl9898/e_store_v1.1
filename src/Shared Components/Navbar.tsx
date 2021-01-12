import React, { useState } from "react";
import CategoriesMenu from "./CategoriesMenu";
import { Link } from "react-router-dom";

interface Props {
  setIsCategoriesMenuMainOpen: (any: boolean) => void;
  isCategoriesMenuMainOpen: boolean;
  setIsBackDropDisplay: (any: boolean) => void;
  isBackDropDisplay: boolean;
  isBodyOverflowYDisplay: string;
  setIsBodyOverflowYDisplay: (any: string) => void;
  isProductsBtnClicked: boolean | undefined;
  setIsProductsBtnClicked: (any: any) => void;
}

const Navbar: React.FC<Props> = ({
  setIsCategoriesMenuMainOpen,
  isCategoriesMenuMainOpen,
  setIsBackDropDisplay,
  isBackDropDisplay,
  isBodyOverflowYDisplay,
  setIsBodyOverflowYDisplay,
  isProductsBtnClicked,
  setIsProductsBtnClicked,
}: Props) => {
  const [accMenuDisplay, setAccMenuDisplay] = useState<string>("none");
  const [isAccMenuTransition, setIsAccMenuTransition] = useState<boolean>(
    false
  );
  const [isSignIn, setIsSignIn] = useState<boolean>(false);
  const [isCategoriesLevel1Open, setIsCategoriesLevel1Open] = useState<boolean>(
    false
  );
  const [isCategoriesLevel2Open, setIsCategoriesLevel2Open] = useState<boolean>(
    false
  );

  document.body.style.overflowY = isBodyOverflowYDisplay;

  return (
    <div className="navbar">
      <button
        className="menuIconBtn"
        onClick={() => {
          setIsProductsBtnClicked(isProductsBtnClicked ? false : false);
          setIsCategoriesMenuMainOpen(!isCategoriesMenuMainOpen);
          setIsBackDropDisplay(!isBackDropDisplay);
          setIsCategoriesLevel1Open(true);
          setIsBodyOverflowYDisplay(
            isBodyOverflowYDisplay === "auto" ? "hidden" : "auto"
          );
          setIsSignIn(!isSignIn);
        }}
      >
        <svg width="25" height="25" viewBox="0 0 448 512" className="menuSvg">
          <g className="menu-group">
            <path
              fill="#ffffffa3"
              d="M16 288h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16z"
              className="secondary"
            ></path>
            <path
              fill="#fff"
              d="M432 384H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 80v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16z"
              className="primary"
            ></path>
          </g>
        </svg>
      </button>
      <button
        style={{
          display: isCategoriesMenuMainOpen ? "initial" : "none",
          right: isProductsBtnClicked ? "320px" : "unset",
          left: isProductsBtnClicked ? "unset" : "320px",
        }}
        className="closeSvgBtn"
        onClick={() => {
          setIsProductsBtnClicked(isProductsBtnClicked ? false : undefined);
          setIsCategoriesMenuMainOpen(false);
          setIsBackDropDisplay(false);
          setIsBodyOverflowYDisplay("auto");
        }}
      >
        <svg width="25" height="25" viewBox="0 0 320 512" className="closeSvg">
          <path
            fill="#265ebe"
            d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
          ></path>
        </svg>
      </button>
      <CategoriesMenu
        isProductsBtnClicked={isProductsBtnClicked}
        isCategoriesMenuMainOpen={isCategoriesMenuMainOpen}
        isCategoriesLevel1Open={isCategoriesLevel1Open}
        setIsCategoriesLevel1Open={setIsCategoriesLevel1Open}
        isCategoriesLevel2Open={isCategoriesLevel2Open}
        setIsCategoriesLevel2Open={setIsCategoriesLevel2Open}
      />
      <Link to="/">
        <h3>E-Store</h3>
      </Link>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2 navSearchInput"
          type="search"
          placeholder="Search E-Store"
          aria-label="Search"
          // onChange={handleTaskSearch}
        ></input>
        <button className="searchIconBtn">
          <svg
            width="30"
            height="30"
            viewBox="0 0 512 512"
            className="searchSvg"
          >
            <path
              fill="#0046be"
              d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
            ></path>
          </svg>
        </button>
      </form>
      <div className="navbar-1">
        <button
          className="navBtns"
          onClick={() => {
            setIsProductsBtnClicked(isProductsBtnClicked ? false : true);
            setIsCategoriesMenuMainOpen(!isCategoriesMenuMainOpen);
            setIsBackDropDisplay(!isBackDropDisplay);
            setIsCategoriesLevel1Open(true);
            setIsBodyOverflowYDisplay(
              isBodyOverflowYDisplay === "auto" ? "hidden" : "auto"
            );
          }}
        >
          Products
        </button>
        <button className="navBtns">Brands</button>
        <button className="navBtns">Deals</button>

        <button className="buttonCart">
          <svg className="cartSvg" width="25" height="25" viewBox="0 0 576 512">
            <path
              fill="#fff"
              d="M551.991 64H129.28l-8.329-44.423C118.822 8.226 108.911 0 97.362 0H12C5.373 0 0 5.373 0 12v8c0 6.627 5.373 12 12 12h78.72l69.927 372.946C150.305 416.314 144 431.42 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-17.993-7.435-34.24-19.388-45.868C506.022 391.891 496.76 384 485.328 384H189.28l-12-64h331.381c11.368 0 21.177-7.976 23.496-19.105l43.331-208C578.592 77.991 567.215 64 551.991 64zM240 448c0 17.645-14.355 32-32 32s-32-14.355-32-32 14.355-32 32-32 32 14.355 32 32zm224 32c-17.645 0-32-14.355-32-32s14.355-32 32-32 32 14.355 32 32-14.355 32-32 32zm38.156-192H171.28l-36-192h406.876l-40 192z"
            ></path>
          </svg>
          <span className="badge">5</span>
        </button>

        <div
          className="signInBtnDiv"
          style={{ display: isSignIn ? "none" : "unset" }}
        >
          <p>Hi</p>
          <button>Signin</button>
        </div>
        <div
          className="accountButtonDiv"
          style={{ display: isSignIn ? "unset" : "none" }}
          onMouseLeave={() => {
            setAccMenuDisplay("none");
            setIsAccMenuTransition(false);
          }}
        >
          <button
            className="accountDropDownButton"
            onMouseOver={() => {
              setAccMenuDisplay("block");
              setIsAccMenuTransition(true);
            }}
          >
            <svg
              height="25"
              width="25"
              viewBox="0 0 496 512"
              className="accountSvg"
            >
              <path
                fill="#fff"
                d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
              ></path>
            </svg>
            <div
              className="accountDropDownMenu"
              style={{
                display: accMenuDisplay,
                right: isAccMenuTransition ? "0px" : "-90px",
              }}
            >
              <a className="dropDownMenuElement" href="/">
                Profile
              </a>
              <a className="dropDownMenuElement" href="/">
                Setting
              </a>
              <a className="dropDownMenuElement" href="/">
                Logout
              </a>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
