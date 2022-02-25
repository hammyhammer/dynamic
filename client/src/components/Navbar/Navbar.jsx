export default function Navbar(props) {


  return (
    <div>
      {props.currentUser ?
        <>
          <h5>Yous logged in</h5>
          <button onClick={props.logout}>Logout</button>
        </>
        :
        <>
          <h5>You are a guest</h5>
        </>
      }
    </div>
  )
}
