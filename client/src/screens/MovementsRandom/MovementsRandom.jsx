import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Movements(props) {

  return (
    <div>
      <h3>Assigned Movements by Dynamic</h3>
      {
        props.movements.map(movement => (
          <Link key={movement.id} to={`/movements/${movement.id}`}>
            <h2>{movement.name}</h2>
            <img src={movement.image} />
          </Link>
        ))
      }
    </div>
  )
}
