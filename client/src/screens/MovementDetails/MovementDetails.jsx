import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import PostNote from '../PostNote/PostNote'
import { createNote, deleteNote, getUserNotes, updateNote } from '../../services/notes'
import Notes from '../Notes/Notes'

export default function MovementDetails(props) {
  const [movement, setMovement] = useState([])
  const [notes, setNotes] = useState([])
  // const { movements } = props
  const { id } = useParams()
  // if (movements.length) formerly on line 15
  useEffect(() => {
    const specificMovement = props.movements.find(movement => {
      return movement.id === Number(id)
      // setMovement(specificMovement)
    })
    const fetchNotes = async () => {
      const notes = await getUserNotes(id)
      setNotes(notes)
    }
    fetchNotes()
    setMovement(specificMovement)
  }, [id, props.movements])

  const handleNoteCreate = async (formData) => {
    await createNote(id, formData)
  }
  // tried doing id in the agrument
  const handleNoteEdit = async (note_id, formData) => {
    await updateNote(id, note_id, formData)
    // Navigate('/movements/')
  }

  const handleNoteDelete = async (note_id) => {
    await deleteNote(id, note_id)
  }
  // console.log(movement)
  return (
    <Layout>
      <div>
        <h3>{movement?.name}</h3>
        <h4>{movement?.category}</h4>
        <img src={movement?.image} />

        {props.currentUser ?
          <>
            <PostNote currentUser={props.currentUser} handleNoteCreate={handleNoteCreate} />
            <Notes handleNoteEdit={handleNoteEdit} notes={notes} movement={movement} currentUser={props.currentUser} handleNoteDelete={handleNoteDelete} />
            {/* <EditNote movement={movement} notes={notes} handleNoteEdit={handleNoteEdit} /> */}
          </>
          :
          <p>Only users can leave a note</p>


        }

      </div>
    </Layout>
  )
}
