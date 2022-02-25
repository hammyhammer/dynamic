import { useState } from "react"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Navbar(props) {
  const [currentUser, setCurrentUser] = useState(null)

  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem(`authToken`)
    setCurrentUser(null)
    navigate("/")
  }

  return (
    <div>
      {currentUser ?
        <>
          <h5>Dynamic</h5>
          <Link to='/register'>Sign up!</Link>

        </>
        :
        <>
          <h5>Dynamic</h5>
          <button onClick={logout}>Logout</button>
        </>
      }
    </div>
  )
}
