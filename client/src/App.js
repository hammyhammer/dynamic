import './App.css';
import { useEffect, useState } from 'react';
import { verify } from './services/users';
function App() {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const user = await verify();
      setCurrentUser(user);
    }
    getUser();
  }, []);

  const logout = () => {
    localStorage.removeItem('authToken')
    setCurrentUser(null)
  }

  return (

    <div className="App">
      test
    </div>
  );
}

export default App;
