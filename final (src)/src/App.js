import React from 'react';
import { BrowserRouter as Router, Routes, Route,  Link, Navigate } from 'react-router-dom';

import Home from "./components/Home";
import Login from './components/Login';
import Catalog from './components/Catalog';
import Cart from './components/Cart';

import { useSelector, useDispatch } from "react-redux";

export default function App() {
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
                        <li className='right-nav'>
                            {loginned ? 
                            <>
                            <div>Balance: {profile.account.balance}$</div>
                            <div onClick={() => {
                                dispatch({type:'clear_cart'})
                                dispatch({type:'logout'})
                            }}>Logout from account</div></> : 
                            <><div></div>
                            <Link to="/login">Login into account</Link></>}
                        </li>
                    </ul>
                </nav>
                <div className="content">
                    <Routes>
                        <Route path="/home" element={<Home loginned={loginned} />} />
                        <Route path="/catalog" element={<CheckForAuth authed={loginned} children={<Catalog/>}/>} />
                        <Route path="/cart" element={<CheckForAuth authed={loginned} children={<Cart/>}/>}/>
                        <Route path="/login" element={<Login/>} />
                        <Route path="*" element={<Home loginned={loginned} />} />
                    </Routes>
                </div>
            </Router>
        </main>
    )
}

function CheckForAuth({ authed, children }) {
    return authed ? children : <Navigate to='/login' replace/>
}