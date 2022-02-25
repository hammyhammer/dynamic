import { useState } from 'react';
import { loginUser } from '../../services/users';
import { useNavigate } from 'react-router-dom';
import logincss from './Login.module.css'
// import Register from '../Register/Register';
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
    navigate('/training')
  }

  const registerPath = () => {
    navigate('/register')
  }

  return (
    <div>
      <h3 className={logincss.welcome}>Welcome to Dynamic</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          <button>Login</button>


        </form>
      </div>
      <div>New here? Signup!</div>
      <button onClick={registerPath}>Register</button>
      <div>Continue as Guest</div>
    </div>
  )
}
