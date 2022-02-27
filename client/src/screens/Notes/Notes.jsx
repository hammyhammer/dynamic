import { useState, useEffect } from 'react'
import { verify } from '../../services/users'

export default function Notes(props) {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    const getUser = async () => {
      const user = await verify()
      setCurrentUser(user)
    }
    getUser()
  }, [])
  console.log(props.notes.user_id)
  console.log(currentUser)
  return (

    <div>

      {props.currentUser?.id === props.notes.user_id ?
        <>
          {
            props.notes &&
            props.notes.map(note => (
              <div key={note.id}>
                <h5>{note.title}</h5>
                <p>{note.content}</p>
              </div>
            ))
          }
        </>
        :
        null
      }

    </div>
  )
}

