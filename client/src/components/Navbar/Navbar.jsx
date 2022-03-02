import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { verify } from "../../services/users"
import navcss from './Navbar.module.css'

export default function Navbar(props) {
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
    <div>
      {currentUser ?
        <div className={navcss.header}>
          <Link className={navcss.dynamic} to="/movements">Dynamic</Link>
          <Link className={navcss.calendar} to="/calendar">Your Calendar</Link>
          <Link className={navcss.logout} to='/' onClick={logout}>Logout</Link>
        </div>
        :
        <div className={navcss.header}>
          <Link className={navcss.dynamic} to="/movements">Dynamic</Link>
          <Link className={navcss.logout} to='/register'>Sign up!</Link>
        </div>
      }
    </div>
  )
}
