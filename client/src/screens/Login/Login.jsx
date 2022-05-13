import { useState } from 'react';
import { loginUser } from '../../services/users';
import { useNavigate } from 'react-router-dom';
import logincss from './Login.module.css';

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [guest, setGuest] = useState({
    email: "guest@guest.com",
    password: guest,
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      username,
      password,
    };

    const res = await loginUser(user);
    props.setCurrentUser(res);
    navigate('/movements');
  };

  const registerPath = () => {
    navigate('/register');
  };

  const guestPath = () => {
    const user = loginUser(guest);
    props.setCurrentUser(user);
    navigate('/movements');
  };

  return (
    <div className={logincss.whole}>
      <header className={logincss.welcome}>Dynamic</header>
      <div className={logincss.form_data}>
        <form onSubmit={handleSubmit}>
          <input className={logincss.username} type="text" value={username} placeholder="Username" onChange={(event) => setUsername(event.target.value)} />
          <br />
          <input className={logincss.password} type="password" value={password} placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
          <br />
          <button className={logincss.login}>Login</button>


        </form>
      </div>
      <br />
      <div className={logincss.nonusers}>
        <button className={logincss.register} onClick={registerPath}>Signup here</button>
        <button className={logincss.guest} onClick={guestPath}>Guest</button>
      </div>
    </div>
  );
};
