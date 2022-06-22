import { Link } from "react-router-dom";
import randomcss from "./MovementsRandom.module.css";

export default function Movements(props) {
  const currentDate = function () {
    const current = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthName = months[current.getMonth()]
    return `${monthName} ${current.getDate()}, ${current.getFullYear()}`;
  }

  const shuffle = (array) => {
    let currentIndex = array.length, randomIndex
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]]

    }
    return array
  }
  shuffle(props.movements)

  return (
    <div className={randomcss.whole}>
      <h3 className={randomcss.date}>{`Training Set: ${currentDate()}`}</h3>
      {
        props.movements.map(movement => (
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

