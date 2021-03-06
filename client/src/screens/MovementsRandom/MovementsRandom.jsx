import { Link } from "react-router-dom";
import randomcss from "./MovementsRandom.module.css";

export default function Movements(props) {
  const currentDate = function () {
    const current = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthName = months[current.getMonth()]
    return `${monthName} ${current.getDate()}, ${current.getFullYear()}`;
  }

  // Variable shuffled shuffles the array of movements randomly. 
  let shuffled = props.movements.sort(() => 0.5 - Math.random());

  // Reinitialized shuffled to only spit out 9 of the movements.  
  shuffled = shuffled.slice(0, 9)

  return (
    <div className={randomcss.whole}>
      <h3 className={randomcss.date}>{`Training Set: ${currentDate()}`}</h3>
      {
        shuffled.map(movement => (
          <Link className={randomcss.movements} key={movement.id} to={`/movements/${movement.id}`}>
            <div className={randomcss.card}>
              <h2 className={randomcss.name}>{movement.name}</h2>
              <img src={movement.image}
                alt={`Image of ${movement.name}`}
                className={randomcss.images} />
            </div>
          </Link>
        ))
      };
    </div>
  );
};

