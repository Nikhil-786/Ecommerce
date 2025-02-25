import "./App.css";

import logo from "./images/logo.svg";
import Avatar from "./images/image-avatar.png";
import product1 from "./images/image-product-1.jpg";
import product2 from "./images/image-product-2.jpg";
import product3 from "./images/image-product-3.jpg";
import product4 from "./images/image-product-4.jpg";
import product1Thumbnail from "./images/image-product-1-thumbnail.jpg";
import product2Thumbnail from "./images/image-product-2-thumbnail.jpg";
import product3Thumbnail from "./images/image-product-3-thumbnail.jpg";
import product4Thumbnail from "./images/image-product-4-thumbnail.jpg";
import minus from "./images/icon-minus.svg";
import plus from "./images/icon-plus.svg";
import Cart from "./Cart";
import cart from "./images/icon-cart.svg";
import { useState } from "react";
import next from "./images/icon-next.svg";

function App() {
  const [count, setCount] = useState(1);
  const images = [product1, product2, product3, product4];
  const [imageindex, setImageIndex] = useState(0);
  const [productImage, setProductImages] = useState(product1);
  const [updateCart, setUpdateCart] = useState(0);

  function handleToggelImages(e) {
    if (e.target.id === "product1Thumbnail") {
      setProductImages(product1);
    }

    if (e.target.id === "product2Thumbnail") {
      setProductImages(product2);
    }
    if (e.target.id === "product3Thumbnail") {
      setProductImages(product3);
    }
    if (e.target.id === "product4Thumbnail") {
      setProductImages(product4);
    }
  }

  function handleCart() {
    setUpdateCart(count);
  }

  function handlepopUp() {
    const popUp = document.querySelector(".modal");
    popUp?.classList.add("appear");
  }

  function handleClose() {
    const popUp = document.querySelector(".modal");
    popUp?.classList.remove("appear");
  }

  function handleNextImg() {
    setImageIndex((index) => {
    
      if (index === images.length - 1) {
        return images.length - 1;
      } else {
        return index + 1;
      }
    });
  }

  function handlePrevtImg() {
    setImageIndex((index) => {
      if (index === 0) {
        return images.length - 1;
      } else {
        return index - 1;
      }
    });
  }

  return (
    <>
      <div className="modal">
        <span className="close" onClick={handleClose}>
          <strong>X</strong>
        </span>
        <div className="modalContent">
          <span className="leftarrow" onClick={handlePrevtImg}>
            <img src={next} alt="Thumbnail" className="left" />
          </span>

          <img src={images[imageindex]} alt="product" className="modalImg" />
          <span className="rightarrow" onClick={handleNextImg}>
            <img src={next} alt="Thumbnail" className="right" />
          </span>
        </div>
      </div>
      <div className="maindiv">
        <div className="firsDiv">
          <img src={logo} alt="logo" id="logoId" />
          <div className="child1">
            <label htmlFor="Collections" id="collection">
              Collections
            </label>
            <label htmlFor="men" id="men">
              Men
            </label>
            <label htmlFor="Women" id="women">
              Women
            </label>
            <label htmlFor="About" id="About">
              About
            </label>
            <label htmlFor="Contact" id="Contact">
              Contact
            </label>
          </div>
          <div className="child2">
            <Cart
              update={updateCart}
              thumbnail={product1Thumbnail}
              text="Fall Limited Edition Sneakers"
            />
            <img src={Avatar} alt="avatar" id="avatar1" />
          </div>
        </div>
        <hr id="line" />
        <div className="secondDiv">
          <div id="products" onClick={(e) => handleToggelImages(e)}>
            <img
              src={productImage}
              alt="product1"
              id="prd1"
              onClick={handlepopUp}
            />
            <br />
            &nbsp;
            <img
              src={product1Thumbnail}
              alt="product1Thumbnail"
              className="thumbnail"
              id="product1Thumbnail"
            />
            &nbsp;
            <img
              src={product2Thumbnail}
              alt="product1Thumbnail"
              className="thumbnail"
              id="product2Thumbnail"
            />
            &nbsp;
            <img
              src={product3Thumbnail}
              alt="product1Thumbnail"
              className="thumbnail"
              id="product3Thumbnail"
            />
            &nbsp;{" "}
            <img
              src={product4Thumbnail}
              alt="product1Thumbnail"
              className="thumbnail"
              id="product4Thumbnail"
            />
          </div>
          <div className="productDetails">
            <h3>SNEAKER COMPANY</h3>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>
              These low-profile sneakers are your perfect causal wear <br />
              companion.Featuring a durable rubber outer sole, they'll <br />
              withstand everything the weather can offer.
            </p>
            <h3>
              $125.00&nbsp;<span id="discount">50%</span>
            </h3>
            <h5 id="orginalAmount">$250.00</h5>
            <div className="child3">
              <div id="counter">
                <img
                  src={minus}
                  alt="minus"
                  className="count"
                  onClick={() =>
                    count <= 1 ? setCount(1) : setCount(count - 1)
                  }
                />
                <label htmlFor="count">{count}</label>
                <img
                  src={plus}
                  alt="plus"
                  className="count"
                  onClick={() => setCount(count + 1)}
                />
              </div>
              <button id="cart" onClick={handleCart}>
                <img src={cart} alt="" />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
