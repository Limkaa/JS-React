import React, { useState, useEffect} from "react";
import Product from "./Product";


export default function Products({ products, title, addItemToCart, loading }) {
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
        <div className="products">
            <div className="heading">{title}</div>
            { loading ? "Loading..." :
                <div className="outlet">
                    {displayedProducts.map(item => <Product product={item} key={item.id} addItemToCart={addItemToCart}/>)}
                </div>
            }
            { !loading &&
                <div className="paggination">
                    {pagesNumbers.map(page => {
                        return <button onClick={() => {
                            setCurrentPage(page);
                        }} key={page} className={`action-button ${page === currentPage && 'current-page'}`}>{page}</button>
                    })}
                </div>
            }
        </div>
    )
  }