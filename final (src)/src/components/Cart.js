import React from "react"

import CartProduct from "./CartProduct"

import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
    let total_amount =  0
    const store = useSelector(state => state)
    const cart = store.cart
    const profile = store.profile 
    const dispatch = useDispatch()

    cart.forEach(item => total_amount += Math.ceil(item.quantity * item.product.price));

    function clearCart() {
        dispatch({type: 'clear_cart'})
    }

    function buyProducts() {
        clearCart()
        dispatch({type: 'buy_many_products', payload: cart})
    }

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
                    { cart.length !== 0 && <button onClick={() => clearCart()} className="action-button">Clear cart</button>}
                </div>
                <div className="sidebar">
                    <div className="heading">Total amount:</div>
                    <div className="total-amount">{total_amount}$</div>
                    { profile.account.balance < total_amount ?
                        <div className="warning">
                            Not enough money on your balance!
                            <button className="deposit" onClick={() => {dispatch({type: 'deposit_money'})}}>Deposit money</button>
                        </div> : 
                        total_amount > 0 &&
                        <button className="buy-products" onClick={() => buyProducts()}>Buy products</button>
                    }
                </div>
            </div>
    )
}