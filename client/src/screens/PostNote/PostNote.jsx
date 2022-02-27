import { useState, useEffect } from 'react'
import { verify } from '../../services/users'

export default function PostNote(props) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const user = await verify()
      setCurrentUser(user)
    }
    getUser()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    const note = {
      title,
      content
    }
    props.handleNoteCreate(note)
  }

  return (
    <div>
      {currentUser ?
        <form onSubmit={handleSubmit}>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
          <button>Leave a Note</button>
        </form>
        :
        <p>Only Users can leave a note</p>
      }
    </div>
  )
}
