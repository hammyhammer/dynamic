import { useEffect, useState } from "react";
import { getAllMovements } from "../../services/movements";

export default function MovementContainer() {
  const [movements, setMovements] = useState([]);

  useEffect(() => {
    const fetchMovements = async () => {
      const movements = await getAllMovements()
      setMovements(movements)
    }
    fetchMovements()
  }, [])

  return (
    <div>TrainingContainer</div>
  )
}
