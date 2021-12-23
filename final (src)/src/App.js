import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route,  Link, Navigate } from 'react-router-dom';

import Home from "./components/Home";
import Login from './components/Login';
import Catalog from './components/Catalog';
import Cart from './components/Cart';

import { accounts } from './Accounts';

export default function App() {
  const [loginned, setLoginned] = useState(false);
  const [profileId, setProfileId] = useState(-1);
  const [cartItems, setCartItems] = useState([]);

  function Logout() {
    setLoginned(false)
    setProfileId(-1)
  }

  function checkCredentials(username, password) {
    const account = accounts.filter((item) => item.name === username)[0]
    if (account !== null) {
      if (password === account.password) {
        setProfileId(account.id)
        setLoginned(true)
        return true
      }
      return false
    }
  }

  function addItemToCart(item, number) {
    setCartItems([...cartItems, {item, number}])
  }

  return (
    <main>
      <Router>
        <nav className="navigation">
          <ul className="navigationOptions">
            <li><Link to="/about">Home</Link></li>
            <li><Link to="/catalog">Catalog</Link></li>
            <li><Link to="/cart">Open cart ({cartItems.length} items)</Link></li>
            <li>
                {loginned ? 
                <div onClick={Logout}>Logout from account</div> : 
                <Link to="/login">Login into account</Link>}
            </li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/about" element={<Home loginned={loginned} />} />
            <Route path="/catalog" element={<Catalog addItemToCart={addItemToCart}/>} />
            <Route path="/cart" element={<Cart items={cartItems}/>} />
            <Route path="/login" element={<Login authed={loginned} setAuthed={setLoginned} check={checkCredentials}/>} />
            <Route path="*" element={<Home loginned={loginned} />} />
          </Routes>
        </div>
      </Router>
    </main>
  )
}

// function CheckForAuth({ authed, children }) {
//   return authed ?
//         children :
//         <Navigate to="/login" replace />
// }