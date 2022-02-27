import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function EditNote(props) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const { id } = useParams()
  // console.log(props.notes.id)
  // console.log(props.movement)
  useEffect(() => {
    const specificNote = props.notes.find(note => {
      console.log(note.id)
      console.log(Number(id))
      return note.id === Number(id)

    })

    if (specificNote) {
      setTitle(specificNote.title)
      setContent(specificNote.content)

    }
  }, [id, props.notes])

  const handleSubmit = (event) => {
    event.preventDefault();
    const note = {
      title,
      content
    }
    props.handleNoteEdit(Number(id), note)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />

      <input
        type='text'
        onChange={(event) => setContent(event.target.value)}
        value={content}
      />
      <button>Edit</button>
    </form>
  )
}
