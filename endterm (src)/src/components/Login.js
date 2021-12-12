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
      <h4 className="hint">Usernames: Pablo, Mark, Kate, Jane</h4>
      <input className="input-field" type="text" onChange={(event => setUsername(event.target.value))}/>
      <h4 className="hint">Password is username in lowercase</h4>
      <input className="input-field" type="password" onChange={(event => setPassword(event.target.value))}/>
      <button className="btn" onClick={onLogin}>
        Login
      </button>
    </form>
    
  )
}