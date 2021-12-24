import React from "react"

import { useDispatch } from "react-redux";

export default function CartProduct({index, item}) {
    const product = item.product
    const dispatch = useDispatch()

    function deleteItem(product) {
        dispatch({
            type: 'delete_item',
            payload: product
        })
    }

    function increaseItemNumber(index) {
        dispatch({
            type: 'increase_item_quantity',
            payload: index
        })
    }

    function decreaseItemNumber(index) {
        dispatch({
            type: 'decrease_item_quantity',
            payload: index
        })
    }

    return (
        <div className="row">
            <div><img src={product.image} className="image" alt="img"></img></div>
            {/* <div class="information"> */}
            <div className="title">{product.title}</div>
            <div className="price">{product.price}$</div>
            <div className="quantity">
                <button className="decrease" onClick={() => { decreaseItemNumber(index)}}>-</button>
                <div>{item.quantity}</div>
                <button className="increase" onClick={() => { increaseItemNumber(index)}}>+</button>
            </div>
            <div className="amount">{Math.ceil(product.price * item.quantity)}$</div>
            <button className="delete" onClick={() => { deleteItem(product)}}>X</button>
        </div>
    )
}