import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import homecss from './HomeMovements.module.css';

export default function HomeMovements(props) {
  return (
    <div className={homecss.whole}>
      <Layout currentUser={props.currentUser}>
        <Link className={homecss.mini_titles} to="movements/random">
          <p className={homecss.random_title}>Training Set of the Day</p>
          <img src="https://media.istockphoto.com/photos/still-life-shot-of-exercise-equipment-in-a-gym-picture-id1320144030?b=1&k=20&m=1320144030&s=170667a&w=0&h=zRPUtgV7QbKzBYJ-VOHwNvKxRsLgWm4Z4eMi2KToJpc="
            alt="Squatrack"
            className={homecss.default_training_img} />
        </Link>

        <br />

        {/* <Link className={homecss.mini_titles} to='movements/custom'> */}
        {/* <p className={homecss.custom_title}>Customize Your Training (Coming Soon)</p>
        <img src="https://media.istockphoto.com/photos/gym-background-with-clipboard-mockup-notepad-and-fitness-equipment-picture-id1210692942?k=20&m=1210692942&s=612x612&w=0&h=b2pFEdARCXBpMVbFTse_kYctLioA011CXgt6b6Fgl6Y="
          alt="Clipboard"
          className={homecss.default_training_img}
        /> */}
        {/* </Link> */}
      </Layout>
    </div >
  );
};
