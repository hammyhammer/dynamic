import { useState } from 'react'

export default function PostNote(props) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const token = localStorage.getItem("token")

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
      {token ?
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
