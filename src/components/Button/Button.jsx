import "./Button.css"

const Button = (props) => {
  return(
    <button onClick={props.onClick}>{props.texto}</button>
  )
}

export default Button