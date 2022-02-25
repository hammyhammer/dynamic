import { useState } from 'react';
import { loginUser } from '../../services/users';
import { useNavigate } from 'react-router-dom';

export default function Login() {

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
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
      <input type="password" value={password} onChange={(event) => setUsername(event.target.value)} />
      <button>Login</button>

      <div>New here? Signup!</div>

      <div>Continue as Guest</div>
    </form>
  )
}
