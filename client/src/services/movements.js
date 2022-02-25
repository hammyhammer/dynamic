import { api } from "./apiConfig";

export const getAllMovements = async () => {
  const res = await api.get('/movements')
  return res.data
}

export const getOneMovement = async (movement_id) => {
  const res = await api.get(`/movements/${movement_id}`)
  return res.data
}

