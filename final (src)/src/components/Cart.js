import React from "react"

import CartProduct from "./CartProduct"

import { useSelector } from "react-redux";

export default function Cart() {
    let total_amount =  0
    const cart = useSelector(state => state.cart)
    
    cart.forEach(item => total_amount += Math.ceil(item.quantity * item.product.price));

    return (
            <div className="cart">
                <div className="orders">
                    <div className="row head">
                        <div></div>
                        <div>Product title</div>
                        <div>Price</div>
                        <div>Quantity</div>
                        <div>Total</div>
                    </div>
                    { cart.length !== 0 && cart.map((item, index) => 
                        <CartProduct key={index} index={index} item={item}/>)}
                </div>
                <div className="sidebar">
                    <div className="heading">Total amount:</div>
                    <div className="total-amount">{total_amount}$</div>
                </div>
            </div>
    )
}