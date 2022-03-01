import { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { useParams } from 'react-router-dom';
import editcss from './EditNote.module.css';

export default function EditNote(props) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const { id } = useParams();

  useEffect(() => {
    const specificNote = props.notes?.find(note => {
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
    props.handleNoteEdit(props.note.id, note)
  }

  const showEditForm = (event) => {
    event.preventDefault()
    render()
    {
      return (
        <div>
          <form onSubmit={handleSubmit}>
            {/* 
        <input
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
        </div>
      )
    }
  }


  return (
    <div>
      <button onClick={showEditForm}>Edit Entry</button>
    </div>
  );


  // return (
  //   <form onSubmit={handleSubmit}>
  //     <button className={editcss.button}>Edit</button>

  //      <input
  //       type='text'
  //       onChange={(event) => setTitle(event.target.value)}
  //       value={title}
  //       className={editcss.title}
  //     />

  //     <input
  //       type='text'
  //       onChange={(event) => setContent(event.target.value)}
  //       value={content}
  //       className={editcss.content}

  //     />
  //   </form>
  // )
}
