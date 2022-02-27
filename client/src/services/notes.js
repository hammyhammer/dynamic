import { api } from "./apiConfig"

export const getUserNotes = async (movement_id) => {
  const res = await api.get(`/movements/${movement_id}/notes`)
  return res.data
}

export const createNote = async (movement_id, noteData) => {
  const res = await api.post(`/movements/${movement_id}/notes`, { note: noteData })
  return res.data
}

export const updateNote = async (user_id, note_id, noteData) => {
  const res = await api.put(`/users/${user_id}/notes/${note_id}`, { note: noteData })
  return res.data
}

export const deleteNote = async (user_id, note_id) => {
  const res = await api.delete(`/users/${user_id}/notes/${note_id}`)
  return res.data
}
