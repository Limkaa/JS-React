import React from "react"
import { useDispatch } from "react-redux";

export default function Product({ product }) {
    const dispatch = useDispatch()

    function addItemToCart() {
        dispatch({
            type: 'add_item',
            payload: {
                product,
                quantity: 1
            }
        })
    }

    function buyProduct() {
        dispatch({
            type: 'buy_one_product',
            payload: product.price
        })
    }

    return (
        <div className="card">
            <img src={product.image} className="image" alt="img"></img>
            <div className="title">{product.title.length > 40 ? `${product.title.substring(0,36)} ...` : product.title}</div>
            <div className="rating">Rating: {product.rating.rate}/5 ({product.rating.count} marks)</div>
            <div className="price">Price: {product.price}$</div>
            <div className="buttons">
                <button onClick={() => buyProduct()} className="buy-now">Buy now</button>
                <button onClick={() => addItemToCart()} className="add-to-cart">Add to cart</button>
            </div>
        </div>
    )
}