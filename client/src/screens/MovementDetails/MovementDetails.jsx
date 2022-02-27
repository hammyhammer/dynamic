import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import PostNote from '../PostNote/PostNote'
import { createNote, deleteNote, getUserNotes } from '../../services/notes'
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

  const handleNoteDelete = async (note_id) => {
    await deleteNote(id, note_id)
  }

  return (
    <Layout>
      <div>

        <h3>{movement.name}</h3>
        <h4>{movement.category}</h4>
        <img src={movement.image} />

        <PostNote handleNoteCreate={handleNoteCreate} />
        <Notes notes={notes} currentUser={props.currentUser} handleNoteDelete={handleNoteDelete} />
      </div>
    </Layout>
  )
}
