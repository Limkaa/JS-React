import React, { useState } from "react"

export default function CartProduct({ item }) {
    const product = item.product

    return (
        <tr>
            <td><img src={product.image} className="image" alt="img"></img></td>
            {/* <div class="information"> */}
            <td className="title">{product.title}</td>
            <td className="price">{product.price}$</td>
            <td className="quantity">{item.quantity}</td>
            <td className="amount">{product.price * item.quantity}$</td>
            {/* </div> */}
        </tr>
    )
}