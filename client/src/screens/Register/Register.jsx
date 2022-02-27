import { useState } from 'react';
import { registerUser } from '../../services/users';
import { useNavigate } from 'react-router-dom';
import registercss from './Register.module.css';

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
    <div className={registercss.whole}>
      <form onSubmit={handleSubmit}>
        <input className={registercss.username} type="text" value={username} placeholder="Username" onChange={(event) => setUsername(event.target.value)} />
        <input className={registercss.email} type="email" value={email} placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
        <input className={registercss.password} type="password" value={password} placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
        <button>Register</button>



      </form>
    </div>
  )
}
