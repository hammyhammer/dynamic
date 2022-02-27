import { useState, useEffect } from 'react'
import { verify } from '../../services/users'
import EditNote from '../EditNote/EditNote'
export default function Notes(props) {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const user = await verify()
      setCurrentUser(user)
    }
    getUser()
  }, [])
  // console.log(currentUser)
  // console.log(props.notes)
  return (
    <div>
      {props.notes &&
        props.notes.map(note => (
          <div key={note?.id}>
            {
              currentUser?.id === note.user.id && note.movement_id === props.movement.id ?
                <>
                  <div>
                    <p>Your Entry on {note.created_at}</p>
                    <h5>{note.title}</h5>
                    <p>{note.content}</p>

                  </div>
                  <div>
                    <EditNote notes={props.notes} handleNoteEdit={props.handleNoteEdit} />
                    <button onClick={() => props.handleNoteDelete(note.id)}>Remove entry</button>
                  </div>
                </>
                :
                null
            }
          </div>
        ))
      }
    </div>
  )
}

