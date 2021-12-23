import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login({ authed,  setAuthed, check }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function onLogin() {
    if (check(username, password)===true) {
      navigate('/home');
    }
  }

  return (
    <form className="center login-form">
      <div className="heading">Login into your account</div>
      <div className="fields-group">
        <input className="input-field" type="text" onChange={(event => setUsername(event.target.value))}/>
        <h4 className="hint">Usernames: Pablo, Mark, Kate, Jane</h4>
      </div>
      <div className="fields-group">
        <input className="input-field" type="password" onChange={(event => setPassword(event.target.value))}/>
        <h4 className="hint">Password is username in lowercase</h4>
      </div>
      <button className="btn" onClick={onLogin}>
        Login
      </button>
    </form>
    
  )
}