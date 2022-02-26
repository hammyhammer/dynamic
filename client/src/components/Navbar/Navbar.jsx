import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { verify } from "../../services/users"

export default function Navbar(props) {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const user = await verify()
      setCurrentUser(user)
    }
    getUser()
  }, [])

  const navigate = useNavigate()
  // const token = localStorage.getItem('token')
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
