import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route,  Link, Navigate } from 'react-router-dom';

import Home from "./components/Home";
import Login from './components/Login';
import Catalog from './components/Catalog';

import './App.css';

import { accounts } from './Accounts';

export default function App() {
  const [loginned, setLoginned] = useState(false);
  const [profileId, setProfileId] = useState(-1);

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

  return (
    <main>
      <Router>
        <nav className="navigation">
          <ul className="navigationOptions">
            <li><Link to="/about">Home</Link></li>
            <li><Link to="/catalog">Catalog</Link></li>
            <li>
                {loginned ? 
                <div onClick={Logout}>Logout from account</div> : 
                <Link to="/login">Login into account</Link>}
            </li>
          </ul>
        </nav>

        {/* <div className="container">
          <Routes>
            <Route path="/about" element={<Home loginned={loginned} />} />
            <Route path="/products" element={
              <Profile profile={accounts.filter((item) => item.id === profileId)[0]}/>
            } />
            <Route path="/categories" element={
                <FriendsLayout profileId={profileId}/>
              }>
                {accounts.filter((friend)=>friend.id !== profileId).map((friend) => {
                  return <Route path={friend.name} element={ <Friend friend={accounts.filter((friendPage)=>friendPage.name === friend.name)[0]}/>}/>
                })}
            </Route>
            <Route path="/login" element={<Login authed={loginned} setAuthed={setLoginned} check={checkCredentials}/>} />
            <Route path="*" element={<Home loginned={loginned} />} />
          </Routes>
        </div> */}
        <div className="content">
          <Routes>
            <Route path="/about" element={<Home loginned={loginned} />} />
            <Route path="/catalog" element={<Catalog/>} />
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