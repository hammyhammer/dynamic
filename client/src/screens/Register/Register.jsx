import { useState } from 'react';
import { registerUser } from '../../services/users';
import { useNavigate } from 'react-router-dom';

export default function Register(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      username,
      email,
      password
    }
    const res = await registerUser(user)
    props.setCurrentUser(res)
    navigate('/movements')
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <button>Register</button>



      </form>
    </div>
  )
}
