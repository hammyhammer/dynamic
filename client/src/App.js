import './App.css';
import { useEffect, useState } from 'react';
import { verify } from './services/users';
import { Routes, Route } from 'react-router-dom'
function App() {

  // const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   const getUser = async () => {
  //     const user = await verify();
  //     setCurrentUser(user);
  //   }
  //   getUser();
  // }, []);

  // const logout = () => {
  //   localStorage.removeItem('authToken')
  //   setCurrentUser(null)
  // }

  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<div>This is the home page</div>} />
        <Route path="/login" element={<div>Login in page</div>} />
        <Route path="/register" element={<div>Register page</div>} />
      </Routes>

    </div>
  );
}

export default App;
