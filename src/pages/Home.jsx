import './Home.css'

import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <section className="homeContainer">
      <h1>O que você está esperando para ir até o </h1>
      <span>ESPAÇO</span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, iure
        quibusdam sapiente doloribus nobis cumque ut! Est maxime id, aperiam
        repellendus facere esse nesciunt eveniet animi saepe eos alias
        voluptatibus!
      </p>
      <NavLink className="homebtn" to="/tickets">
        clique
      </NavLink>
    </section>
  )
}

export default Home
