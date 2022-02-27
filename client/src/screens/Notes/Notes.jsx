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
  // console.log(props.notes.id)
  // console.log(currentUser)
  console.log(currentUser)
  console.log(props.notes)
  return (
    <div>
      {props.notes &&
        props.notes.map(note => (
          <div key={note?.id}>
            {
              currentUser?.id === note.user.id ?
                <>
                  <h5>{note.title}</h5>
                  <p>{note.content}</p>
                </>
                :
                null
            }
          </div>
        ))
      }
    </div>
    // <div>

    //   {props.currentUser?.id === props.notes.id ?
    //     <>
    //       {
    //         props.notes &&
    //         props.notes.map(note => (
    //           <div key={note.id}>
    //             <h5>{note.title}</h5>
    //             <p>{note.content}</p>
    //           </div>
    //         ))
    //       }
    //     </>
    //     :
    //     null
    //   }

    // </div>
  )
}

