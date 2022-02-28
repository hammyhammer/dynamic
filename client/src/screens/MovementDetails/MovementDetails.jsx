import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import PostNote from '../PostNote/PostNote';
import { createNote, deleteNote, getUserNotes, updateNote } from '../../services/notes';
import Notes from '../Notes/Notes';
import random_detailcss from './MovementDetails.module.css'

export default function MovementDetails(props) {
  const [movement, setMovement] = useState([]);
  const [notes, setNotes] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const specificMovement = props.movements.find(movement => {
      return movement.id === Number(id);
    })
    const fetchNotes = async () => {
      const notes = await getUserNotes(id);
      setNotes(notes);
    }
    fetchNotes();
    setMovement(specificMovement);
  }, [id, props.movements]);

  const handleNoteCreate = async (formData) => {
    await createNote(id, formData);
  };

  const handleNoteEdit = async (note_id, formData) => {
    await updateNote(id, note_id, formData);
  };

  const handleNoteDelete = async (note_id) => {
    await deleteNote(id, note_id);
  };

  return (
    <Layout>
      <div className={random_detailcss.whole}>
        <h3 className={random_detailcss.name}>{movement?.name}</h3>
        <h4 className={random_detailcss.category}>{movement?.category}</h4>
        <img
          src={movement?.image}
          alt={`Image of ${movement?.image}`}
          className={random_detailcss.image}
        />

        {props.currentUser ?
          <>
            <PostNote currentUser={props.currentUser} handleNoteCreate={handleNoteCreate} />
            <Notes handleNoteEdit={handleNoteEdit} notes={notes} movement={movement} currentUser={props.currentUser} handleNoteDelete={handleNoteDelete} />
          </>
          :
          <p>Only users can leave a note</p>


        };

      </div>
    </Layout>
  );
};
