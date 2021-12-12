import { BrowserRouter as Router, Routes, Route,  Link, Navigate, Outlet } from 'react-router-dom';

import Profile from "./components/Profile";
import Home from "./components/Home";
import Friends from './components/Friends';
import Friend from './components/Friend';
import Login from './components/Login';

import './App.css';
import React, { useState } from 'react';

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
        <nav className="navigationBar">
          <ul className="navigationOptions">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/friends">Friends</Link></li>
            <li>
              {loginned ? <div onClick={Logout}>Logout</div> : <Link to="/login">{loginned ? "Logout" : "Login"}</Link>}
            </li>
          </ul>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/home" element={<Home loginned={loginned} />} />
            <Route path="/profile" element={
              <CheckForAuth authed={loginned}>
                <Profile profile={accounts.filter((item) => item.id === profileId)[0]}/>
              </CheckForAuth>
            } />
            <Route path="/friends" element={
                <CheckForAuth authed={loginned}>
                  <FriendsLayout profileId={profileId}/>
                </CheckForAuth>
              }>
                {accounts.filter((friend)=>friend.id !== profileId).map((friend) => {
                  return <Route path={friend.name} element={ <Friend friend={accounts.filter((friendPage)=>friendPage.name === friend.name)[0]}/>}/>
                })}
            </Route>
            <Route path="/login" element={<Login authed={loginned} setAuthed={setLoginned} check={checkCredentials}/>} />
            <Route path="*" element={<Home loginned={loginned} />} />
          </Routes>
        </div>
      </Router>
    </main>
  )
}

function CheckForAuth({ authed, children }) {
  return authed ?
        children :
        <Navigate to="/login" replace />
}

function FriendsLayout({profileId}) {
  return (
    <div>
      <h1 className="heading center">Friends Page</h1>
      <div className="friends-layout">
        <Friends friends={accounts.filter((friend)=>friend.id !== profileId)}/>
        <Outlet />
      </div>
    </div>
  )
}