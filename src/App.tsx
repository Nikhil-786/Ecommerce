
import './App.css'
import cart from './images/icon-cart.svg';
import logo from './images/logo.svg';
import Avatar from './images/image-avatar.png';
import product1 from './images/image-product-1.jpg';
import product2 from './images/image-product-2.jpg';
import product3 from './images/image-product-3.jpg';
import product4 from './images/image-product-4.jpg';
import product1Thumbnail from './images/image-product-1-thumbnail.jpg';
import product2Thumbnail from './images/image-product-2-thumbnail.jpg';
import product3Thumbnail from './images/image-product-3-thumbnail.jpg';
import product4Thumbnail from './images/image-product-4-thumbnail.jpg';
import minus from './images/icon-minus.svg';
import plus from './images/icon-plus.svg';
 
function App() {

  return (
    <>
    <div className='maindiv'>
      <div className='firsDiv'>
      <div className='child1'>
      <img src={logo} alt="logo" id='logoId' />
        <label htmlFor="Collections">Collections</label>
        <label htmlFor="men">Men</label>
        <label htmlFor="Women">Women</label>
        <label htmlFor="About">About</label>
        <label htmlFor="Contact">Contact</label>
      </div>
      <div className='child2'>
        <img src={cart} alt="cart" />
        <img src={Avatar} alt="avatar" id='avatar1' />
      </div>
     
      </div>
      <hr id='line' />
      <div className='secondDiv'>
        <div id='products'>
          <img src={product1} alt="product1" id='prd1'/><br />
          &nbsp;<img src={product1Thumbnail} alt="product1Thumbnail" className='thumbnail' />
          &nbsp;<img src={product2Thumbnail} alt="product1Thumbnail" className='thumbnail' />
          &nbsp;<img src={product3Thumbnail} alt="product1Thumbnail" className='thumbnail' />
          &nbsp; <img src={product4Thumbnail} alt="product1Thumbnail" className='thumbnail' />
        </div>
        <div className='productDetails'>
          <h3>SNEAKER COMPANY</h3>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect causal wear <br/>
            companion.Featuring a durable rubber outer sole, they'll <br />
            withstand everything the weather can offer.
          </p>
          <h3>$125.00<span>50%</span></h3>
          <h5>$250.00</h5>
          <div>
            <img src={minus} alt="" />
            0  
            <img src={plus} alt="" />
            </div>
          <button id='cart'><img src={cart} alt="" />Add to cart</button>
        </div>
      </div>
    </div>
 

    </>
  )
}

export default App
