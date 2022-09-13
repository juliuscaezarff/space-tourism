import { Link } from "react-router-dom"

const LinkButton = ({to, text}) => {

  return(
    <Link to={to}>{text}</Link>
  )
}

export default LinkButton