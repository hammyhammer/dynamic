import { useState } from 'react';
import { loginUser } from '../../services/users';
import { useNavigate } from 'react-router-dom';

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

  return (
    <div>
      <h3>Welcome to Dynamic</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          <button>Login</button>


        </form>
      </div>
      <div>New here? Signup!</div>
      <button>Register</button>
      <div>Continue as Guest</div>
    </div>
  )
}
