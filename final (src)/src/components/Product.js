import React from "react"

export default function Product({ product }) {
  return (
    <div className="card">
        <img src={product.image} className="image" alt="img"></img>
        <div className="title">{product.title.length > 40 ? `${product.title.substring(0,36)} ...` : product.title}</div>
        <div className="rating">Rating: {product.rating.rate}/5 ({product.rating.count} marks)</div>
        <div className="price">Price: {product.price}$</div>
        <div className="buttons">
            <button className="buy-now">Buy now</button>
            <button className="add-to-cart">Add to cart</button>
        </div>
    </div>
  )
}