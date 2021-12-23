import React, { useState, useEffect} from "react";

// import { Link } from 'react-router-dom';
import Products from "./Products";

export default function Categories() {
    const filters = [
        {title: 'Price 🔻', field: 'price', sort: 'desc'},
        {title: 'Price 🔺', field: 'price', sort: 'asc'},
        {title: 'Rating 🔻', field: 'rating', sort: 'desc'},
        {title: 'Rating 🔺', field: 'rating', sort: 'asc'},
    ]
    const [currentFilter, setCurrentFilter] = useState(filters[0])
    const [products, setProducts] = useState([])
    const [displayedProducts, setDisplayedProducts] = useState([])
    const [categories, setCategories] = useState(['All products'])
    // const [loading, setLoading] = useState(true)
    const [currentCategory, setCurrentCategory] = useState('All products')

    useEffect(() => {
        console.log('try')
        fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(json => {
            setCategories(['All products', ...json])
        })
        .catch(err => alert(err))

        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            setProducts(json)
        })
        .catch(err => alert(err))

        // setLoading(false)
    }, [])

    // Filtering products array
    useEffect(() => {
        let productsForDisplay = products.sort((a, b) => {
            if (currentFilter.sort === 'desc') [a, b] = [b, a]
            if (currentFilter.field === 'rating') return a.rating.rate - b.rating.rate
            return a[currentFilter.field] - b[currentFilter.field]
        })
        if (currentCategory === 'All products') return setDisplayedProducts(productsForDisplay.filter(item => true))
        return setDisplayedProducts(productsForDisplay.filter(item => item.category === currentCategory))
    }, [products, currentCategory, currentFilter])

    return (
        <div className="products-layout">
            <Products products={displayedProducts} title={currentCategory}/>
            <div className="sidebar">
                <div className="grid">
                    <div className="heading">Categories</div>
                    <ul className="options">
                        {categories.map((item, index) => {
                            return <li onClick={
                                () => {setCurrentCategory(item)}
                            } key={index} className={`title ${item === currentCategory && 'chosen'}`}>{item}</li>
                        })}
                    </ul>
                    <div className="heading"><hr/>Filters</div>
                    <ul className="options">
                        {filters.map((item, index) => {
                            return <li onClick={
                                () => {setCurrentFilter(item)}
                            } key={index} className={`title ${item.title === currentFilter.title && 'chosen'}`}>{item.title}</li>
                        })}
                    </ul>
                </div>
                {/* <div className="grid">
                    <div className="heading">Filters</div>
                    <ul className="options">
                        {filters.map((item, index) => {
                            return <li onClick={
                                () => {setCurrentFilter(item)}
                            } key={index} className={`title ${item.title === currentFilter.title && 'chosen'}`}>{item.title}</li>
                        })}
                    </ul>
                </div> */}
            </div>
        </div>
    )
  }