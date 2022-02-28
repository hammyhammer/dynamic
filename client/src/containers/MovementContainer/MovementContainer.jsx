import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import HomeMovements from "../../screens/HomeMovements/HomeMovements";
import { getAllMovements } from "../../services/movements";
import MovementsRandom from '../../screens/MovementsRandom/MovementsRandom'
import MovementDetails from "../../screens/MovementDetails/MovementDetails";
import CustomMovements from "../../screens/CustomMovements/CustomMovements";
export default function MovementContainer(props) {
  const [movements, setMovements] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchMovements = async () => {
      const movements = await getAllMovements()
      setMovements(movements)
    }
    fetchMovements()
  }, [toggle])

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeMovements movements={movements} currentUser={props.currentUser} />} />
        <Route path="/:id" element={<MovementDetails movements={movements} currentUser={props.currentUser} />} />
        <Route path="/movements/random" element={<MovementsRandom movements={movements} currentUser={props.currentUser} />} />
        <Route path="/movements/custom" element={<CustomMovements movements={movements} currentUser={props.currentUser} />} />

      </Routes>
    </div>
  )
}
