import React from "react"

import CartProduct from "./CartProduct"

export default function Cart({ items }) {
    
  return (
        <div className="cart">
            <table className="orders">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    { items.length !== 0 && 
                        items.map((item, index) => <CartProduct item={item}/>)}
                </tbody>
            </table>
            <dic className="sidebar">

            </dic>
        </div>
  )
}