import './Home.css'

import LinkButton from '../components/LinkButton'

const Home = () => {
  return (
    <section className="homeContainer">
      <div className='homeContent'>
      <h1>O que você está esperando para ir até o </h1>
      <span>ESPAÇO</span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, iure
        quibusdam sapiente doloribus nobis cumque ut! Est maxime id, aperiam
        repellendus facere esse nesciunt eveniet animi saepe eos alias
        voluptatibus!
      </p>
      </div>
      <LinkButton text='ir para o espaço' to="/tickets"/>
    </section>
  )
}

export default Home
