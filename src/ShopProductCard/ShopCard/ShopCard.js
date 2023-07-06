import React from 'react'
import img1 from "../../images/img1.jpeg"

import "./ShopCard.css"

function ShopCard() {
  return (
    <div className='card-shop'>
      <div className='card-shop-image'>
        <img src={img1} alt='' />
      </div>

      <div className='details-card-shop'>
        <h3>Fresh & Hot Family Resturant</h3>
        <p>Non vegetarian, indian resturant</p>

        <ul>
          <li className='like-card-shop'>
            <span>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              5.0
            </span>
          </li>

          <li className='fa-share-shop-card'>
            <span><i class="fa fa-share fa-lg" aria-hidden="true"></i></span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ShopCard