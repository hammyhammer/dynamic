import { useState } from 'react';
import { loginUser } from '../../services/users';
import { useNavigate } from 'react-router-dom';
import logincss from './Login.module.css'

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      username,
      password,
    }
    const res = await loginUser(user)
    props.setCurrentUser(res)
    navigate('/movements')
  }

  const registerPath = () => {
    navigate('/register')
  }
  const guestPath = () => {
    navigate('/movements')
  }

  return (
    <div>
      <h3 className={logincss.welcome}>Welcome to Dynamic</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} placeholder="Enter your username" onChange={(event) => setUsername(event.target.value)} />
          <br />
          <input type="password" value={password} placeholder="Enter your password" onChange={(event) => setPassword(event.target.value)} />
          <button>Login</button>


        </form>
      </div>
      <button onClick={registerPath}>New here? Signup!</button>
      <button onClick={guestPath}>Continue as Guest</button>
    </div>
  )
}
