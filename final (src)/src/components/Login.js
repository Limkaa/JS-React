import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const profile = useSelector(store => store.profile)
  const dispatch = useDispatch()

  function onLogin() {
    if (username && password) {
      dispatch({
        type: 'login',
        payload: {
          username, 
          password
        }
      })
    } else {
      alert('Fill the form')
    }
  }

  useEffect(() => {
    if (profile.loginned) {
      navigate('/home')
    }
  })

  return (
    <div className="center login-form">
      <div className="heading">Login into your account</div>
      <div className="fields-group">
        <input className="input-field" type="text" onChange={(event => setUsername(event.target.value))}/>
        <h4 className="hint">Usernames: Pablo, Mark, Kate, Jane</h4>
      </div>
      <div className="fields-group">
        <input className="input-field" type="password" onChange={(event => setPassword(event.target.value))}/>
        <h4 className="hint">Password is username in lowercase</h4>
      </div>
      <button className="btn" onClick={() => onLogin()}>
        Login
      </button>
    </div>
  )
}