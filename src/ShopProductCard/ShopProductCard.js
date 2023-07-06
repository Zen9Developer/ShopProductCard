import React from 'react'
import ShopCard from "./ShopCard/ShopCard"
import ProductCard from "./ProductCard/ProductCard"

import "./ShopProductCard.css"

function ShopProductCard() {
  return (
    <div>
        <div className='header'>
            <div><span>Shop-Product-Card</span></div>
        </div>

        <div className='shop-card'>
            <div className='shop-card-topic-part'>
                <h4 className='shop-card-topic-part-h4'>Shop Card</h4>
            </div>

            <div className='shop-card-hr-part'></div>

            <div className='shop-card-product-part'>
                <ShopCard />
            </div>
        </div>

        <div className='shop-card'>
            <div className='shop-card-topic-part'>
                <h4 className='shop-card-topic-part-h4'>Product Card</h4>
            </div>

            <div className='shop-card-hr-part'></div>

            <div className='shop-card-product-part'>
                <ProductCard />
            </div>
        </div>
    </div>
  )
}

export default ShopProductCard