import './App.css';
import { useEffect, useState } from 'react';
import { verify } from './services/users';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

import Login from './screens/Login/Login';
function App() {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const user = await verify()
      setCurrentUser(user)
    }
    getUser()
  }, [])

  const logout = () => {
    localStorage.removeItem(`authToken`)
    setCurrentUser(null)
  }

  return (

    <div className="App">
      <Navbar currentUser={currentUser} logout={logout} />
      <Routes>
        <Route path="/" element={<Login setCurrentUser={setCurrentUser} />} />
        <Route path="/register" element={<div>Register page</div>} />
        <Route path="/training" element={<div>Login in page</div>} />

      </Routes>

    </div>
  );
}

export default App;
