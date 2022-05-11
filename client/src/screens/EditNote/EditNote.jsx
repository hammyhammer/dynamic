import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import editcss from './EditNote.module.css';
import Modal from '../Modal/Modal';

export default function EditNote(props) {
  const [show, setShow] = useState(false)


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

  // const ShowEditForm = () => {
  //   return (
  //     <div>
  //       <form onSubmit={handleSubmit}>
  //         {batman && < input
  //           type='text' autoFocus
  //           onChange={(event) => setContent(event.target.value)}
  //           value={content}
  //           className={editcss.edit_form}

  //         />}
  // <button className={editcss.edit_button}>Update</button>

  // </form>
  //     </div>
  //   );
  // };
  const ShowEditForm = () => {
    return (
      <div>
        <div className={editcss.modal}>
          <div className={editcss.main_content}>
            <div className={editcss.header}>
              <h4 className={editcss.title}>Edit your Entry</h4>
            </div>
            <div className={editcss.body}>
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
            <div className={editcss.footer}>
              <button onClick={props.onClose} onClose={() => setShow(false)} show={show} className={editcss.button}>Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }



  return (
    <div>
      {/* <button onClick={() => setShow(true)}>Edit Entry</button> */}
      {/* <Modal onClose={() => setShow(false)} show={show} /> */}
      <button className={editcss.edit_entry} onClick={() => setToggle((prevToggle) => !prevToggle)}>Edit Entry</button>
      {toggle && <ShowEditForm onChange={(e) => { e.preventDefault() }} />}
    </div>
  );
};
