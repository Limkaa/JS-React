import React from 'react';
import { BrowserRouter as Router, Routes, Route,  Link, Navigate } from 'react-router-dom';

import Home from "./Home";
import Login from './Login';
import Catalog from './Catalog';
import Cart from './Cart';

import { useSelector, useDispatch } from "react-redux";

export default function Content() {
    const store = useSelector(store => store)
    const profile = store.profile
    const loginned = profile.loginned
    const dispatch = useDispatch()

    return (
        <main>
            <Router>
                <nav className="navigation">
                    <ul className="navigationOptions">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/catalog">Catalog</Link></li>
                        <li className={store.cart.length ? 'not-empty-cart' : ''}><Link to="/cart">Cart</Link></li>
                        <li>
                            {loginned ? 
                            <div onClick={() => dispatch({type:'logout'})}>Logout from account</div> : 
                            <Link to="/login">Login into account</Link>}
                        </li>
                    </ul>
                </nav>
                <div className="content">
                    <Routes>
                        <Route path="/home" element={<Home loginned={loginned} />} />
                        <Route path="/catalog" element={<Catalog/>} />
                        <Route path="/cart" element={<Cart/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="*" element={<Home loginned={loginned} />} />
                    </Routes>
                </div>
            </Router>
        </main>
    )
}

// function CheckForAuth({ authed, children }) {
//     return authed ? children : <Navigate to='/home' replace/>
// }