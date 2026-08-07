import './App.css'
import { Link, NavLink, Outlet } from "react-router";

function App() {
  return (
    <>
    <h1>Cava World</h1>
    <nav>
      <NavLink to="/greeting" end>Greeting</NavLink>
      <NavLink to="/contact" end>Contact</NavLink>
      <NavLink to="/farewell" end>Farewell</NavLink>
    </nav>
    
    <Outlet />

    <Link to="/blablabla" className="candy">Free Candy</Link>
    </>
  )
}

export function Greeting() {
  return ( 
  <>
  <h2>Hello User</h2>
  <h3>Welcome to Testing Declarative React</h3>
  </>
  )
}

export function Contact() {
  return ( 
  <>
  <h2>Contact Us @</h2>
  <h3>Phone: 71614966 | Email: ali.hamdan.lb05@gmail.com</h3>
  </>
  )
}

export function Farewell() {
  return ( 
  <>
  <h2>Thanks For Your visit</h2>
  <h3>Come back Again, Or Else...</h3>
  </>
  )
}

export function PathError() {
  return ( 
  <>
  <h2>Errorrr</h2>
  <h3>Failed to Load Page, Path Not Found</h3>
  </>
  )
}

export default App;
