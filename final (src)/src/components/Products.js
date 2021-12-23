import React, { useState, useEffect} from "react";
import Product from "./Product";
// import { Link } from 'react-router-dom';


export default function Products({ products, title }) {
    const [displayedProducts, setDisplayedProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [pagesNumbers, setPagesNumbers] = useState([])

    useEffect(() => {
        const start = (currentPage - 1) * 4
        const nextProducts = products.slice(start, start + 4)
        setDisplayedProducts(nextProducts)
    }, [products, currentPage])

    useEffect(() => {
        setPagesNumbers(Array.from({length: Math.ceil(products.length/4)}, (_, i) => i + 1))
        setCurrentPage(1)
    }, [products])

    return (
        // <div>Hello</div>
        <div className="products">
            <div className="heading">{title}</div>
            <div className="outlet">
                {displayedProducts.map(item => {
                    return <Product product={item} key={item.id}/>
                })}
            </div>
            <div className="paggination">
                {pagesNumbers.map(page => {
                    return <button onClick={() => {
                        setCurrentPage(page);
                    }} key={page}>{page}</button>
                })}
            </div>
        </div>
    )
  }