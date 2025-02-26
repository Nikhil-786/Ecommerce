import cart from "./images/icon-cart.svg";
import "./App.css";
import { useState } from "react";
const Cart = ({ update, thumbnail}:{update:number,thumbnail:string}) => {
  const [active, setActive] = useState(false);
  function handleShowCart() {
    setActive(true);
  }
  return (
    <>
      <img src={cart} alt="cart" id="" onClick={handleShowCart} />
      <h3 id="countCart">{update}</h3>
      {active && (
        <div >
          
          <br />
          {update >= 1 ? (
            <div className="cartDetails">
              <h3>Cart</h3>
              <hr />
              <div className="pdetails">
              <p>
              <img src={thumbnail} alt="" id="thumbimg" />
              &nbsp;
                Fall Limited Edition Sneakers <br/>
                &nbsp; &nbsp;
                <span id="cal">{`$125.00 x ${update}`}&nbsp;<strong>${125.00*update}.00</strong></span>
              </p>
              </div>
              <button id="checkout">Checkout</button>
            </div>
            
          ) : (
            <p>Cart is empty</p>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
