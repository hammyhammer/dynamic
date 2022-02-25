import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import HomeMovements from "../../screens/HomeMovements/HomeMovements";
import { getAllMovements } from "../../services/movements";
import MovementsRandom from '../../screens/MovementsRandom/MovementsRandom'
export default function MovementContainer(props) {
  const [movements, setMovements] = useState([]);

  useEffect(() => {
    const fetchMovements = async () => {
      const movements = await getAllMovements()
      setMovements(movements)
    }
    fetchMovements()
  }, [])

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeMovements movements={movements} currentUser={props.currentUser} />} />
        <Route path="/movements/random" element={<MovementsRandom movements={movements} currentUser={props.currentUser} />} />
      </Routes>
    </div>
  )
}
