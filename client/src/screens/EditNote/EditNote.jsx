import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import editcss from './EditNote.module.css';

export default function EditNote(props) {
  const specificNote = props.notes?.find(note => {
    return note.id;
  })

  const [title, setTitle] = useState();
  const [content, setContent] = useState(props.note.content);
  const [batman, setBatman] = useState(false);
  const [toggle, setToggle] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setTitle(specificNote?.title);
    setBatman(true);
  }, [id, props.notes]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const note = {
      title,
      content
    };
    props.handleNoteEdit(props.note.id, note);
  };

  const ShowEditForm = () => {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          {batman && < input
            type='text' autoFocus
            onChange={(event) => setContent(event.target.value)}
            value={content}
            className={editcss.edit_form}

          />}
          <button className={editcss.edit_button}>Update</button>

        </form>
      </div>
    );
  };



  return (
    <div>
      <button className={editcss.edit_entry} onClick={() => setToggle((prevToggle) => !prevToggle)}>Edit Entry</button>
      {toggle && <ShowEditForm onChange={(e) => { e.preventDefault() }} />}
    </div>
  );
}
