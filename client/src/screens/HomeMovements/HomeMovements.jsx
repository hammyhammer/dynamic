import React from 'react'
import Layout from '../../components/Layout/Layout'
export default function HomeMovements(props) {

  return (

    <div>
      {props.currentUser ?
        <>
          <Layout>
            <div>
              Training Set of the Day
              <img src="https://media.istockphoto.com/photos/still-life-shot-of-exercise-equipment-in-a-gym-picture-id1320144030?b=1&k=20&m=1320144030&s=170667a&w=0&h=zRPUtgV7QbKzBYJ-VOHwNvKxRsLgWm4Z4eMi2KToJpc=" />
            </div>

            <div>
              Customize your Training
              <img src="https://media.istockphoto.com/photos/gym-background-with-clipboard-mockup-notepad-and-fitness-equipment-picture-id1210692942?k=20&m=1210692942&s=612x612&w=0&h=b2pFEdARCXBpMVbFTse_kYctLioA011CXgt6b6Fgl6Y=" />
            </div>
          </Layout>
        </>
        :
        <>
          <Layout>

            <div>
              Training Set of the Day
              <img src="https://media.istockphoto.com/photos/still-life-shot-of-exercise-equipment-in-a-gym-picture-id1320144030?b=1&k=20&m=1320144030&s=170667a&w=0&h=zRPUtgV7QbKzBYJ-VOHwNvKxRsLgWm4Z4eMi2KToJpc=" />
            </div>

            <div>
              Customize your Training (Available to Users only)
              <img src="https://media.istockphoto.com/photos/gym-background-with-clipboard-mockup-notepad-and-fitness-equipment-picture-id1210692942?k=20&m=1210692942&s=612x612&w=0&h=b2pFEdARCXBpMVbFTse_kYctLioA011CXgt6b6Fgl6Y=" />
            </div>
          </Layout>

        </>
      }
    </div>
  )

}
