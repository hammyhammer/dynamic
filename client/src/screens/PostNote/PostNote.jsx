import { useState } from 'react';
import postcss from './PostNote.module.css';

export default function PostNote(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const note = {
      title,
      content
    }
    props.handleNoteCreate(note);
  }

  return (
    <div className={postcss.whole}>
      {props.currentUser ?

        <form onSubmit={handleSubmit}>
          {/* <input className={postcss.title} type="text" value={title} placeholder="Entry Title" onChange={(e) => setTitle(e.target.value)} /> */}
          <input className={postcss.content} type="text" value={content} placeholder="How did you do today?" onChange={(e) => setContent(e.target.value)} />
          <button className={postcss.button}>Save</button>
        </form>
        :
        <p>Only Users can leave a note</p>
      }
    </div>
  );
};
