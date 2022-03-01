import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import editcss from './EditNote.module.css';

export default function EditNote(props) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const { id } = useParams()
  console.log(props.note)
  // console.log(props.movement)
  useEffect(() => {
    console.log(props.note.id)
    const specificNote = props.notes?.find(note => {
      console.log(note.id)
      console.log(Number(id))
      // return note.id === Number(id)
      return note.id
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
    // props.handleNoteEdit(Number(id), note)
    props.handleNoteEdit(props.note.id, note)
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <input
        type='text'
        onChange={(event) => setTitle(event.target.value)}
        value={title}
        className={editcss.title}
      /> */}

      <input
        type='text'
        onChange={(event) => setContent(event.target.value)}
        value={content}
        className={editcss.content}

      />
      <button className={editcss.button}>Edit</button>
    </form>
  )
}
