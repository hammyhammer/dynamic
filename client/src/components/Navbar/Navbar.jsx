import { useState } from "react"
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  const [currentUser, setCurrentUser] = useState(null)

  const logout = () => {
    localStorage.removeItem(`authToken`)
    setCurrentUser(null)
  }

  return (
    <div>
      {props.currentUser ?
        <>
          <h5>Dynamic</h5>
          <button onClick={logout}>Logout</button>
        </>
        :
        <>
          <h5>Dynamic</h5>
          <Link to='/register'>Sign up!</Link>
        </>
      }
    </div>
  )
}
