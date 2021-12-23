import React from "react"

export default function Cart({ items }) {
    
  return (
    <div className="cart">
        { items.length !== 0 && 
            items.map((item, index) => {
                return <div key={index}>{item.item.title} - {item.number} count</div>
            })
        }
    </div>
  )
}