import React from 'react'

export default function Notes(props) {
  return (
    <div>
      {props.currentUser?.id === notes.user_id ?
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
