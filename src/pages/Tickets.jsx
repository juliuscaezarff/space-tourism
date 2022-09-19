import './Tickets.css'

const Tickets = () => {
  return (
    <section className="ticketContainer">
      <h1>Inscreva-se para receber seu ticket!!</h1>

      <p>E prepare-se para a mairo experiência da sua vida!</p>

      <div>
        <div>
          <input type="text" placeholder="Digite seu e-mail" />
        </div>
        <div>
          <input type="text" placeholder="Digite seu nome" />
        </div>
        <div>
          <input type="password" placeholder="Digite sua senha" />
        </div>
        <div>
          <input type="submit" value="Enviar" />
        </div>
      </div>
    </section>
  )
}

export default Tickets
