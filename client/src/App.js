import './App.css';
import { useEffect, useState } from 'react';
import { verify } from './services/users';
import { Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar/Navbar'
import Register from './screens/Register/Register'
import MovementContainer from './containers/MovementContainer/MovementContainer'
import Login from './screens/Login/Login';
function App(props) {

  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    const getUser = async () => {
      const user = await verify()
      setCurrentUser(user)
    }
    getUser()
  }, [])


  return (

    <div className="App">
      {/* <Navbar currentUser={currentUser} logout={logout} /> */}
      <Routes>
        <Route path="/" element={<Login setCurrentUser={setCurrentUser} />} />
        <Route path="/register" element={<Register setCurrentUser={setCurrentUser} />} />
        <Route path="/movements/*" element={<MovementContainer currentUser={currentUser} />} />

      </Routes>

    </div>
  );
}

export default App;
