import { useState, useEffect } from 'react';
import { verify } from '../../services/users';
import EditNote from '../EditNote/EditNote';
import notescss from './Notes.module.css';

export default function Notes(props) {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      const user = await verify();
      setCurrentUser(user);
    }
    getUser();
  }, []);

  const sortDate = (a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  }

  let entries = props.notes.flat(1).sort(sortDate);

  return (
    <div className={notescss.whole}>
      {props.notes &&
        entries.map(note => (
          <div key={note?.id}>
            {
              currentUser?.id === note.user.id && note.movement_id === props.movement.id ?
                <>
                  <div className={notescss.container}>
                    <p className={notescss.time}>Date: {note.created_at.substr(0, 10)}</p>
                    <h5 className={notescss.title}>{note.title}</h5>
                    <p className={notescss.content}>{note.content}</p>
                    <div className={notescss.edit_delete}>
                      <EditNote note={note} handleNoteEdit={props.handleNoteEdit} />


                      <button className={notescss.delete} onClick={() => props.handleNoteDelete(note.id)}>Remove entry</button>

                    </div>
                  </div>
                </>
                :
                null
            }
          </div>
        ))
      }
    </div>
  );
};
