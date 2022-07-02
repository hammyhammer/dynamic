import { useState } from 'react';
import postcss from './PostNote.module.css';

export default function PostNote(props) {
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const note = {
      content
    }
    props.handleNoteCreate(note);
  }

  return (
    <div className={postcss.whole}>
      {props.currentUser ?

        <form className={postcss.input_save} onSubmit={handleSubmit}>
          <input className={postcss.content} type="text" value={content} placeholder="How did you do today?" onChange={(e) => setContent(e.target.value)} />
          <button className={postcss.button}>Save</button>
        </form>
        :
        null
      }
    </div >
  );
};
