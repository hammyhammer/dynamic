import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
export default function MovementDetails(props) {
  const [movement, setMovement] = useState([])
  const { movements } = props
  const { id } = useParams()

  useEffect(() => {
    if (movements.length) {
      const specificMovement = movements.find((movement) => movement.id === Number(id))
      setMovement(specificMovement)
    }
  }, [movements, id])

  return (
    <Layout>
      <div>

        <h3>{movement.name}</h3>
        <h4>{movement.category}</h4>
        <img src={movement.image} />


      </div>
    </Layout>
  )
}
