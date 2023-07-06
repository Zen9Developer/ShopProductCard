import React from 'react'
import img2 from "../../images/img2.jpg"

import "./ProductCard.css"

function ProductCard() {
  return (
    <div className='card-product'>
      <div className='down-part'>
        <ul>
          <li><span><i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i></span></li>
          <li><span><i class="fa fa-heart fa-lg" aria-hidden="true"></i></span></li>
          <li><span><i class="fa fa-share fa-lg" aria-hidden="true"></i></span></li>
        </ul>
      </div>

      <div className='card-product-image'>
        <img src={img2} alt='' />
      </div>

      <div className='details-card-product'>
        <h3>Arsiperd Waterproof Wireless Earbuds</h3>

        <ul className='star-list-product-card'>
          <li>
            <span>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              5.0
            </span>
          </li>

          <li><p>20 sold</p></li>
        </ul>

        <div className='buy-me-product-card'>
          <h5>$99.99</h5>
          <h4 className='add-to-cart-product-card'>Buy Now</h4>
        </div>
      </div>
    </div>
  )
}

export default ProductCard